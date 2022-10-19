<script setup>
import { defineProps, inject, ref } from 'vue'

const props = defineProps({
  groups: {
    type: Array,
    default: null
  },
  journal: {
    type: Object,
    default: null
  }
})

const axios = inject('$axios')

const isOpen = ref(false)
const groups = ref(props.groups ?? [])
const selectedGroup = ref(null)
const text = ref(null)
const isLoading = ref(false)

const reset = () => {
  text.value = null
  selectedGroup.value = null
}

const setIsOpen = (value) => {
  reset()
  isOpen.value = value
}

const selectGroup = (group) => {
  text.value = null
  selectedGroup.value = group
}

const send = async () => {
  if (isLoading.value || !selectedGroup.value) return

  isLoading.value = true

  await axios.post(`/groups/${selectedGroup.value.id}/chat`, {
    journal_code: props.journal.code,
    text: text.value
  })

  isLoading.value = false
  isOpen.value = false
}
</script>

<template>
  <div class="relative">
    <button class="text-regal-green text-sm rounded px-2 items-center flex gap-2 transition font-bold"
            @click="() => setIsOpen(true)">
      Bagikan
    </button>
    <div v-if="isOpen"
         class="absolute -top-10 right-0 w-60 bg-white rounded-lg font-medium shadow border border-solid text-black text-left text-sm">
      <div class="py-3 px-4 border-b border-solid relative">
        <div class="font-bold">{{ selectedGroup ? 'Bagikan ke' : 'Pilih group' }}</div>
        <div class="">{{ selectedGroup ? selectedGroup.title : 'yang ingin dibagikan' }}</div>
        <span class="absolute top-0 right-0 text-2xl my-2 mx-3 cursor-pointer"
              @click="() => setIsOpen(false)">&times;</span>
      </div>
      <div :class="{'h-52': !selectedGroup}" class="py-2 px-2 overflow-auto">
        <template v-if="selectedGroup">
          <textarea v-model="text"
                    class="rounded p-2 w-full rounded-lg border border-solid mb-2"
                    placeholder="Pesan yang ingin dicantumkan"
                    rows="5"
          ></textarea>
          <button :class="{'bg-regal-green': !isLoading, 'bg-gray-300': isLoading}"
                  :disabled="isLoading"
                  class="bg-regal-green rounded-lg py-2 w-full font-bold text-white"
                  @click="send">Kirim
          </button>
        </template>
        <ul v-else>
          <template v-for="group in props.groups" :key="group.id">
            <li class="hover:bg-gray-100 transition p-2 rounded cursor-pointer"
                @click="() => selectGroup(group)">
              {{ group.title }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>