<script setup>
import { defineProps } from 'vue'
import AppButton from '@/components/AppButton'
import AppIcon from '@/components/AppIcon'

const props = defineProps({
  to: {
    type: String,
    default: null
  }
})
</script>

<template>
  <app-button class="mb-5 flex justify-center gap-2 items-center"
              color="white"
              fit
              @click="() => props.to ? $router.push({ name: props.to }) : $router.back()">
    <app-icon name="arrow-left" width="15"/>
    Kembali
  </app-button>
</template>
