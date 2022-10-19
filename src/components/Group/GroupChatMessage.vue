<script setup>
import { defineProps, inject } from 'vue'
import { useSessionStore } from '@/stores/session'
import AppButton from '@/components/AppButton'
import AppIcon from '@/components/AppIcon'
import { useRouter } from 'vue-router'

const axios = inject('$axios')
const baseURL = axios.defaults.baseURL
const router = useRouter()

const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  hideName: {
    type: Boolean,
    default: false
  },
  journal: {
    type: Object,
    default: null
  }
})

const sessionStore = useSessionStore()
const isOwnedByUser = sessionStore.user.id === props.user.id
const classes = isOwnedByUser ? 'bg-regal-green text-white' : 'bg-gray-200'

const openJournal = () => {
  router.push({ name: 'journals-show', params: { code: props.journal.code } })
}

const downloadJournalPdf = () => {
  window.open(`${baseURL}/journals/${props.journal.code}/pdf?is_download=1`)
}
</script>

<template>
  <div :class="{'mt-2': hideName, 'mt-4': !hideName}">
    <div>
      <div v-if="!hideName" :class="{'text-right': isOwnedByUser}" class="font-semibold text-base mb-2">
        {{ isOwnedByUser ? 'Kamu' : props.user.name }}
      </div>
      <div v-if="props.journal !== null" class="bg-white p-4 rounded-xl mb-3 relative">
        <div class="font-bold text-regal-green">{{ props.journal.title }}</div>
        <div class="font-semibold">Author: {{ props.journal.user.name }}</div>
        <div class="leading-6 h-6 text-ellipsis whitespace-nowrap w-full overflow-hidden">
          {{ props.journal.short_desc }}
        </div>
        <div class="flex mt-2 justify-end gap-2">
          <app-button class="py-2" color="secondary" fit @click="openJournal">
            <app-icon height="15" name="eye-green" width="15"/>
            Buka
          </app-button>
          <app-button class="py-2" color="secondary" fit @click="downloadJournalPdf">
            <app-icon height="15" name="document-download-green" width="15"/>
            Unduh
          </app-button>
        </div>
      </div>
      <div :class="{'justify-end': isOwnedByUser}" class="flex">
        <div :class="`font-semibold rounded-xl px-5 py-4 flex-shrink ${classes}`">{{ props.text }}</div>
      </div>
    </div>
  </div>
</template>