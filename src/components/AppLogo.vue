<script setup>
import { defineProps } from 'vue'
import AppIcon from '@/components/AppIcon'

const props = defineProps({
  white: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="d-flex font-bold cursor-pointer" :class="{'text-white': props.white}">
    <app-icon :name="props.white ? 'award-white' : 'award'" width="40" height="40"/>
    Belajar
  </div>
</template>