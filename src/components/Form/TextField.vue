<script setup>
import { defineProps, toRef } from 'vue'
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
  }
})
// const emit = defineEmits(['update:modelValue'])
//
// const model = ref(props.modelValue)
//
// watch(model, () => {
//   emit('update:modelValue', model.value)
// })

props

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
    <label :for="name" class="mb-1">{{ label }}</label>
    <input
        :name="name"
        :id="name"
        :type="type"
        :value="inputValue"
        :placeholder="placeholder"
        class="border-solid border 12 rounded-lg py-2 px-3 w-full"
        @input="handleChange"
        @blur="handleBlur"
    />
    <small class="text-red-400" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </small>
  </div>
</template>