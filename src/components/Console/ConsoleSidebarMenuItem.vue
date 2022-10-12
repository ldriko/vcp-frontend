<script setup>
import { defineProps } from 'vue'
import AppIcon from '@/components/AppIcon'

const props = defineProps({
  icon: {
    type: String,
    default: null
  }
})
</script>

<template>
  <li class="flex gap-5 items-center p-3 rounded-xl transition cursor-pointer hover:bg-black hover:bg-opacity-10">
    <app-icon :name="props.icon"/>
    <slot/>
  </li>
</template>