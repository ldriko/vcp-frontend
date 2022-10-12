<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: null
  },
  width: {
    type: Number,
    default: 25
  },
  height: {
    type: Number,
    default: 25
  }
})
</script>

<template>
  <img :src="`/icons/${props.name}.svg`" :alt="props.name" :width="props.width" :height="props.height" class="inline">
</template>