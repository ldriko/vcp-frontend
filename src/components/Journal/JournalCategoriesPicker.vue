<script setup>
import { defineEmits, defineProps, inject, onMounted, ref, watch } from 'vue'

const axios = inject('$axios')

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Array,
    default: null
  },
  label: {
    type: String,
    default: null
  }
})

const categories = ref([])
const selected = ref(props.modelValue)

const fetchCategories = async () => {
  const response = await axios.get('/categories').catch(() => null)
  categories.value = response?.data ?? []
}

const select = (id) => {
  const index = selected.value.indexOf(id)

  if (index > -1) {
    selected.value.splice(index, 1)
  } else {
    selected.value.push(id)
  }

  emit('update:modelValue', selected.value)
}

watch(() => props.modelValue, () => {
  selected.value = props.modelValue
})

onMounted(fetchCategories)
</script>

<template>
  <div>
    <label class="font-semibold mb-2 block font-semibold">{{ props.label }}</label>
    <div class="flex flex-wrap gap-2 font-medium mb-4">
      <div v-for="category in categories"
           :key="category.id"
           :class="{
           'bg-gray-100 text-gray-600': selected.indexOf(category.id) === -1,
           'bg-soft-green text-regal-green ': selected.indexOf(category.id) > -1,
         }"
           class=" py-2 px-3 rounded cursor-pointer transition active:scale-95"
           @click="() => select(category.id)">
        {{ category.name }}
      </div>
    </div>
  </div>
</template>