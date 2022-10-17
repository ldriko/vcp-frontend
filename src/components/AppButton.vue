<script setup>
import { defineEmits, defineProps } from 'vue'

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
  },
  fit: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click'])

const buttonColors = {
  primary: 'bg-regal-green text-white',
  secondary: 'border border-solid border-regal-green text-regal-green',
  disabled: 'bg-gray-300 text-gray-400 border border-solid border-gray-400',
  white: 'bg-white text-black border border-solid'
}

const classes = buttonColors[(props.isLoading || props.isDisabled) ? 'disabled' : props.color]
    + (props.fit ? ' p-2.5' : ' w-32 py-2.5')

const click = () => {
  if (!props.isDisabled) {
    emit('click')
  }
}
</script>

<template>
  <button :class="classes"
          class="text-sm font-semibold rounded-lg active:scale-95 transition"
          :type="type"
          @click="click">
    <slot/>
  </button>
</template>