import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const type = ref('success')
  const text = ref(null)

  const open = (value) => {
    type.value = value.type
    text.value = value.text
  }

  const close = () => {
    type.value = 'success'
    text.value = null
  }

  return { type, text, open, close }
})