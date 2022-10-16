<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  size: {
    type: [String, Number],
    default: null
  },
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: null
  }
})

const sizeClass = props.size ?? 'w-10 h-10'
</script>

<template>
  <img v-if="props.src" :alt="alt" :class="sizeClass" :src="props.src" class="rounded-full">
  <div v-else :class="sizeClass" class="bg-gray-100 border border-gray-200 rounded-full"/>
</template>