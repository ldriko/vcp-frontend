<script setup>
import { defineExpose, defineProps, ref, toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
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
  },
  fit: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const input = ref(null)
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

const changeValue = (value) => {
  input.value.value = value
  input.value.dispatchEvent(new Event('input'))
}

defineExpose({
  changeValue
})
</script>

<template>
  <div :class="{ 'has-error': !!errorMessage, success: meta.valid }" class="mb-5 flex flex-col">
    <label :for="name" class="font-semibold mb-1 font-semibold">{{ label }}</label>
    <div>
      <input
          :id="name"
          ref="input"
          :class="{'w-full': !props.fit, 'w-auto': props.fit}"
          :disabled="props.disabled"
          :name="name"
          :placeholder="placeholder"
          :type="type"
          :value="inputValue"
          class="border-solid border 12 rounded-lg py-2 px-3"
          @blur="handleBlur"
          @input="handleChange"
      />
    </div>
    <small class="text-red-400" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </small>
  </div>
</template>