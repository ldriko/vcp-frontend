<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  group: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <li>
    <div class="text-lg font-bold">{{ props.title }}</div>
    <div>Latest message</div>
  </li>
</template>