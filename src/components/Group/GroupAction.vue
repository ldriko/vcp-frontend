<script setup>
import AppButton from '@/components/AppButton'
import AppIcon from '@/components/AppIcon'
import { ref } from 'vue'

const isOpened = ref(false)

const open = (value = true) => isOpened.value = value
</script>

<template>
  <app-button class="relative whitespace-nowrap" fit @click="() => open(!isOpened)">
    <app-icon name="dots"/>
    <div v-if="isOpened"
         class="text-black absolute bg-white rounded-xl p-2 border border-solid top-full right-0 w-auto text-start mt-2 shadow">
      <ul>
        <li class="hover:bg-gray-100 transition p-2 rounded-lg font-semibold"
            @click="$emit('exit-group')">
          Keluar grup
        </li>
      </ul>
    </div>
  </app-button>
</template>