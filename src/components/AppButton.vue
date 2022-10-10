<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  color: {
    type: String,
    default: 'primary'
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click'])

const buttonColors = {
  primary: 'bg-regal-green text-white',
  secondary: 'border border-solid border-regal-green text-regal-green',
  disabled: 'bg-gray-300 text-gray-400 border border-solid border-gray-400'
}

const click = () => {
  if (!props.isDisabled) {
    emit('click')
  }
}
</script>

<template>
  <button class="w-32 py-2.5 text-sm rounded-md"
          :class="buttonColors[isLoading ? 'disabled' : props.color]"
          :type="type"
          @click="click">
    <slot/>
  </button>
</template>