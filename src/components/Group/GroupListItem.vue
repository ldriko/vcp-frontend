<script setup>
import { defineProps } from 'vue'
import AppAvatar from '@/components/AppAvatar'

const props = defineProps({
  group: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <li :class="{'bg-gray-100': isActive}"
      class="flex cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition active:scale-95 overflow-hidden"
      @click="$emit('click')">
    <div class="flex items-center flex-shrink-0">
      <app-avatar size="w-16 h-16" src="https://picsum.photos/200"/>
    </div>
    <div class="px-4 py-2 flex flex-col flex-grow justify-center">
      <div class="text-lg font-bold">{{ props.group.title }}</div>
      <div v-if="props.group.latest_chat !== null" class="whitespace-nowrap text-ellipsis overflow-hidden">
        <span class="text-regal-green font-semibold">{{ props.group.latest_chat.user.name }}:</span>
        {{ props.group.latest_chat.text }}
      </div>
    </div>
  </li>
</template>