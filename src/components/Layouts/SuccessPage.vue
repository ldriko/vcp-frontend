<script setup>
import { defineEmits, defineProps } from 'vue'
import AppIcon from "@/components/AppIcon";
import AppButton from "@/components/AppButton";

const emit = defineEmits(['redirect'])
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
  redirectText: {
    type: String,
    default: null
  }
})

const redirect = () => emit('redirect')
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center text-center h-full max-w-screen-lg m-auto">
    <app-icon name="success" class="w-1/2 mb-8"/>
    <div>
      <div class="text-3xl font-semibold">{{ props.title }}</div>
      <div class="mb-8">{{ props.subtitle }}</div>
      <div>
        <slot/>
      </div>
      <app-button @click="redirect">{{ props.redirectText }}</app-button>
    </div>
  </div>
</template>