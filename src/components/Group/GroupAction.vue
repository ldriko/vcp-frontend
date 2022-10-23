<script setup>
import { defineProps, ref } from 'vue'
import AppButton from '@/components/AppButton'
import AppIcon from '@/components/AppIcon'

const props = defineProps({
  group: {
    type: Object,
    required: true
  }
})

const isOpened = ref(false)
const showCopiedText = ref(false)

const open = (value = true) => isOpened.value = value

const setShowCopiedText = (value) => {
  showCopiedText.value = value
  navigator.clipboard.writeText(props.group.code)

  if (value) {
    setTimeout(() => showCopiedText.value = false, 2500)
  }
}
</script>

<template>
  <div class="relative">
    <app-button class="whitespace-nowrap" fit @click="() => open(!isOpened)">
      <app-icon name="dots"/>
    </app-button>
    <div v-if="isOpened"
         class="text-black absolute bg-white rounded-xl p-2 border border-solid top-full right-0 w-auto text-start mt-2 shadow">
      <ul>
        <li class="p-2 font-semibold select-none" @click="() => setShowCopiedText(true)">
          <div class="text-xs mb-1">Bagikan kode dibawah ini untuk mengundang</div>
          <input :value="props.group.code"
                 class="border border-solid rounded-lg p-2 cursor-pointer bg-white hover:bg-gray-100 transition active:scale-95"
                 readonly
                 type="text">
          <div v-if="showCopiedText" class="ml-1 mt-2 text-xs">Copied!</div>
        </li>
        <li class="hover:bg-gray-100 transition p-2 rounded-lg font-semibold cursor-pointer"
            @click="() => $router.push({ name: 'groups-edit', params: { id: props.group.id } })">
          Edit grup
        </li>
        <li class="hover:bg-gray-100 transition p-2 rounded-lg font-semibold cursor-pointer"
            @click="$emit('exit-group')">
          Keluar grup
        </li>
      </ul>
    </div>
  </div>
</template>
