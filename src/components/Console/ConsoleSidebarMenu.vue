<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  }
})
</script>

<template>
  <h1 v-if="props.title !== null" class="text-white text-opacity-50 mx-3 mb-3 uppercase">{{ props.title }}</h1>
  <ul class="space-y-2 mb-10">
    <slot/>
  </ul>
</template>