<script setup>
import { defineEmits, defineProps, inject, onUnmounted, ref, watch } from 'vue'
import AppAvatar from '@/components/AppAvatar'
import AppButton from '@/components/AppButton'
import GroupChatMessage from '@/components/Group/GroupChatMessage'
import { useSessionStore } from '@/stores/session'
import GroupAction from '@/components/Group/GroupAction'
import AppIcon from '@/components/AppIcon'

const axios = inject('$axios')
const baseUrl = axios.defaults.baseURL
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
    text: message.value,
    journal_code: journal.value?.code
  }).then((response) => {
    message.value = ''
    clearJournal()
    chat.value.push({ ...response.data, user: sessionStore.user })
    latestId.value = response.data.id
    setTimeout(() => chatRef.value.scrollTo(0, chatRef.value.scrollHeight), 100)
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

const showJournalCodeInput = ref(false)
const journalCode = ref(null)
const journal = ref(null)

const getJournal = () => {
  axios.get(`/journals/${journalCode.value}`)
      .then(({ data }) => {
        journal.value = data
        showJournalCodeInput.value = false
      })
      .catch(() => journal.value = null)
}

const clearJournal = () => {
  journalCode.value = ''
  journal.value = null
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
        <app-avatar v-if="props.group.picture_path"
                    :src="`${baseUrl}/groups/${props.group.id}/picture`"
                    size="w-12 h-12"/>
        <app-avatar v-else size="w-12 h-12"/>
        <div class="flex-grow">
          <div class="text-md font-semibold">{{ props.group.title }}</div>
          <div v-if="membersCount !== null">{{ membersCount }} Anggota Tergabung</div>
        </div>
        <div>
          <group-action :group="props.group" @exit-group="exitGroup"/>
        </div>
      </div>
      <ul ref="chatRef" class="p-4 my-3 flex-grow overflow-y-auto">
        <li v-for="(message, index) in chat" :key="message.id">
          <group-chat-message :hide-name="chat[index - 1]?.user.id === message.user.id"
                              :text="message.text"
                              :journal="message.journal"
                              :user="message.user"/>
        </li>
      </ul>
      <div v-if="journal !== null" class="bg-white p-4 rounded-xl mb-3 relative">
        <app-icon class="absolute top-0 right-0 m-2 cursor-pointer active:scale-95"
                  name="tag-cross"
                  @click="clearJournal"/>
        <div class="font-bold text-regal-green">{{ journal.title }}</div>
        <div class="font-semibold">Author: {{ journal.user.name }}</div>
        <div>{{ journal.short_desc }}</div>
      </div>
      <div class="flex gap-3">
        <div class="relative">
          <div v-if="showJournalCodeInput"
               class="text-black absolute bg-white rounded-xl p-4 border border-solid bottom-full left-0 w-auto text-start mb-2 shadow">
            <label class="mb-2 block">Masukkan kode jurnal yang ingin ditambahkan</label>
            <div class="font-semibold select-none flex gap-2">
              <input v-model="journalCode" class="border border-solid rounded-lg p-2 bg-white" type="text">
              <app-button fit @click="getJournal">Tambah</app-button>
            </div>
          </div>
          <app-button class="min-h-full" fit @click="() => showJournalCodeInput = !showJournalCodeInput">
            <app-icon class="max-w-none" name="document-text"/>
          </app-button>
        </div>
        <input v-model="message"
               class="border border-solid rounded-lg p-4 w-full"
               placeholder="Ketik disini"
               type="text"
               @keydown.enter="send">
        <app-button @click="send">Kirim</app-button>
      </div>
    </template>
  </div>
</template>
