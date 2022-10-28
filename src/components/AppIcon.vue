<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  },
  width: {
    type: [String, Number],
    default: 25
  },
  height: {
    type: [String, Number],
    default: 25
  }
})
</script>

<template>
  <img :src="`/icons/${props.name}.svg`" :alt="props.name" :class="props.class" :width="props.width" :height="props.height" class="inline">
</template>