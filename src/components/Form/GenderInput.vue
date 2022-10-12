<script>
export default {
  name: 'gender-input'
}
</script>

<script setup>
import { ref, watch, defineEmits, defineProps } from 'vue'

const props = defineProps({ modelValue: { type: Number, default: 0 } })
const emit = defineEmits(['update:modelValue'])
const gender = ref(props.modelValue)

watch(gender, () => {
  console.log('test', gender.value)
  emit('update:modelValue', Number(gender.value))
})
</script>

<template>
  <div class="mt-2">
    <label class="font-bold text-base" for="gender">Jenis Kelamin</label><br>

    <div class="flex justify-between">
      <div>
        <input id="gender-none" v-model="gender" type="radio" value="0" class="mr-3">
        <label for="gender-none">Tidak ingin memberitahu</label>
      </div>

      <div>
        <input id="gender-male" v-model="gender" type="radio" value="1" class="mr-3">
        <label for="gender-male">Laki-laki</label>
      </div>

      <div>
        <input id="gender-female" v-model="gender" type="radio" value="2" class="mr-3">
        <label for="gender-female">Perempuan</label>
      </div>
    </div>
  </div>
</template>