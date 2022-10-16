<script setup>
import { defineEmits, defineProps, inject, onUnmounted, ref, watch } from 'vue'
import AppAvatar from '@/components/AppAvatar'
import AppButton from '@/components/AppButton'
import GroupChatMessage from '@/components/Group/GroupChatMessage'
import { useSessionStore } from '@/stores/session'
import GroupAction from '@/components/Group/GroupAction'

const axios = inject('$axios')
const sessionStore = useSessionStore()

const emit = defineEmits(['close'])
const props = defineProps({
  group: {
    type: Object,
    default: null
  }
})

const latestId = ref(null)
const fetchRequest = ref(null)
const chat = ref([])
const message = ref('')
const chatRef = ref(null)
const scrollTimeout = ref(null)
const membersCount = ref(null)

const fetchChat = async () => {
  if (props.group === null) return

  const response = await axios.get(`/groups/${props.group.id}/chat`, {
    params: {
      offset_id: latestId.value ?? 0
    }
  }).catch(() => null)

  if (response !== null) {
    const isAtBottom = (chatRef.value.scrollTop + chatRef.value.clientHeight) === chatRef.value.scrollHeight || chat.value.length === 0
    chat.value = chat.value.concat(response.data)

    if (isAtBottom) {
      scrollTimeout.value = setTimeout(() => chatRef.value.scrollTo(0, chatRef.value.scrollHeight), 100)
    }
  }

  if (chat.value.length > 0) {
    latestId.value = chat.value[chat.value.length - 1].id
  }

  fetchRequest.value = setTimeout(fetchChat, 5000)
}

const send = () => {
  axios.post(`/groups/${props.group.id}/chat`, {
    text: message.value
  }).then((response) => {
    chat.value.push({ ...response.data, user: sessionStore.user })
    latestId.value = response.data.id
    clearTimeout(fetchRequest.value)
    fetchRequest.value = null
    fetchChat()
  })
}

const getMembersCount = async () => {
  if (props.group === null) return

  axios.get(`/groups/${props.group.id}/members/count`)
      .then(({ data }) => {
        membersCount.value = data
      })
      .catch()
}

const exitGroup = async () => {
  axios.delete(`/groups/${props.group.id}/exit`)
      .then(() => {
        clearTimeout(fetchRequest.value)
        clearTimeout(scrollTimeout.value)
        fetchRequest.value = null
        scrollTimeout.value = null
        latestId.value = null
        chat.value = []
        emit('close')
      })
      .catch()
}

watch(props, () => {
  clearTimeout(fetchRequest.value)
  fetchRequest.value = null
  latestId.value = null
  chat.value = []
  fetchChat()
  getMembersCount()
})

onUnmounted(() => {
  if (fetchRequest.value) clearTimeout(fetchRequest.value)
  if (scrollTimeout.value) clearTimeout(scrollTimeout.value)
})
</script>

<template>
  <div class="text-sm bg-gray-100 rounded-xl p-3 flex flex-col">
    <template v-if="props.group !== null">
      <div class="bg-gray-200 rounded-xl p-3 flex gap-4 items-center">
        <app-avatar size="w-12 h-12"/>
        <div class="flex-grow">
          <div class="text-md font-semibold">{{ props.group.title }}</div>
          <div v-if="membersCount !== null">{{ membersCount }} Anggota Tergabung</div>
        </div>
        <div>
          <group-action @exit-group="exitGroup"/>
        </div>
      </div>
      <ul ref="chatRef" class="p-4 my-3 flex-grow overflow-y-auto">
        <li v-for="(message, index) in chat" :key="message.id">
          <group-chat-message :hide-name="chat[index - 1]?.user.id === message.user.id"
                              :text="message.text"
                              :user="message.user"/>
        </li>
      </ul>
      <div class="flex gap-3">
        <input v-model="message"
               class="border border-solid rounded-lg p-4 w-full"
               placeholder="Ketik disini"
               type="text">
        <app-button @click="send">Kirim</app-button>
      </div>
    </template>
  </div>
</template>
