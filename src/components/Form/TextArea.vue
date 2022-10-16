<script setup>
import { defineProps, toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  successMessage: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta
} = useField(name, undefined, {
  initialValue: props.value
})
</script>

<template>
  <div :class="{ 'has-error': !!errorMessage, success: meta.valid }" class="mb-5 flex flex-col">
    <label :for="name" class="font-semibold mb-1">{{ label }}</label>
    <textarea
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :value="inputValue"
        class="border-solid border 12 rounded-lg py-2 px-3 w-full"
        rows="5"
        @blur="handleBlur"
        @input="handleChange"
    />
    <small v-show="errorMessage || meta.valid" class="text-red-400">
      {{ errorMessage || successMessage }}
    </small>
  </div>
</template>