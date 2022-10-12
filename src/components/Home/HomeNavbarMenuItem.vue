<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  anchor: {
    type: String,
    default: null
  }
})
</script>

<template>
  <li>
    <a :href="props.anchor" class="text-black text-opacity-50 hover:text-opacity-100 transition cursor-pointer">
      <slot/>
    </a>
  </li>
</template>