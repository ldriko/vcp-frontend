<script setup>
import { defineProps } from 'vue'
import { useSessionStore } from '@/stores/session'

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
  }
})

const sessionStore = useSessionStore()
const isOwnedByUser = sessionStore.user.id === props.user.id
const classes = isOwnedByUser ? 'bg-regal-green text-white' : 'bg-gray-200'
</script>

<template>
  <div :class="{'justify-end': isOwnedByUser, 'mt-2': hideName, 'mt-4': !hideName}" class="flex">
    <div>
      <div v-if="!hideName" :class="{'text-right': isOwnedByUser}" class="font-semibold mb-2">
        {{ isOwnedByUser ? 'Kamu' : props.user.name }}
      </div>
      <div :class="`font-semibold rounded-xl px-5 py-4 flex-shrink ${classes}`">{{ props.text }}</div>
    </div>
  </div>
</template>