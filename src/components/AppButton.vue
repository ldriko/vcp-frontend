<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue'
import AppIcon from "@/components/AppIcon";

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
  primary: 'bg-regal-green text-white hover:bg-regal-green-hover',
  secondary: 'border border-solid border-regal-green text-regal-green hover:bg-gray-100',
  disabled: 'bg-gray-300 text-gray-400 border border-solid border-gray-400',
  white: 'bg-white text-black border border-solid hover:bg-gray-100'
}
const loadingIcon = {
  primary: 'spinner-white',
  secondary: 'spinner-green',
  disabled: 'spinner',
  white: 'spinner'
}

const classes = ref(buttonColors[(props.isLoading || props.isDisabled) ? 'disabled' : props.color]
    + (props.fit ? ' p-2.5' : ' px-8 py-2.5'))

const click = () => {
  if (!props.isDisabled) {
    emit('click')
  }
}

watch(props, () => {
  classes.value = buttonColors[(props.isLoading || props.isDisabled) ? 'disabled' : props.color]
      + (props.fit ? ' p-2.5' : ' px-8 py-2.5')
}, { deep: true })
</script>

<template>
  <button :class="classes"
          :type="type"
          class="text-sm font-semibold rounded-lg active:scale-95 transition"
          @click="click">
    <app-icon v-if="props.isLoading"
              :name="loadingIcon[(props.isLoading || props.isDisabled) ? 'disabled' : props.color]" class="animate-spin"
              width="20"/>
    <slot/>
  </button>
</template>