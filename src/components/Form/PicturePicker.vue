<script setup>
import { defineEmits, defineProps, ref } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: File,
    default: null
  },
  class: {
    type: String,
    default: null
  },
  placeholderSrc: {
    type: String,
    default: null
  }
})

const input = ref(null)
const filePath = ref(null)

const openPicker = () => {
  input.value.dispatchEvent(new MouseEvent('click'))
}

const handleChange = () => {
  const file = input.value.files[0]

  if (file) {
    filePath.value = URL.createObjectURL(file)
    emit('update:modelValue', file)
  }
}
</script>

<template>
  <div :class="props.class"
       class="border border-solid hover:bg-gray-100 active:scale-95 w-32 h-32 rounded-full cursor-pointer transition flex justify-center items-center text-regal-green font-semibold text-2xl overflow-hidden"
       @click="openPicker">
    <template v-if="filePath">
      <img :src="filePath" alt="Group picture" class="w-full min-h-full object-cover rounded-full">
    </template>
    <template v-else-if="placeholderSrc">
      <img :src="placeholderSrc" alt="Group picture" class="w-full min-h-full object-cover rounded-full">
    </template>
    <template v-else>+</template>
  </div>
  <input ref="input"
         accept="image/jpeg,image/webp,image/png,image/svg+xml"
         class="absolute opacity-0"
         type="file"
         @change="handleChange">
</template>