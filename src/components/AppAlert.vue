<script setup>
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()

const colorClasses = {
  'success': 'bg-green-100 border border-solid border-regal-green text-green-700',
  'error': 'bg-red-100 border border-solid border-red-400 text-red-700',
  'warning': 'bg-yellow-100 border border-solid border-yellow-400 text-yellow-700'
}
</script>

<template>
  <div v-if="alertStore.text !== null"
       :class="colorClasses[alertStore.type]"
       class="rounded-lg font-semibold px-4 py-2 flex items-center">
    <div class="flex-grow">{{ alertStore.text }}</div>
    <span class="text-xl flex-shrink-0 cursor-pointer" @click="() => alertStore.close()">&times;</span>
  </div>
</template>