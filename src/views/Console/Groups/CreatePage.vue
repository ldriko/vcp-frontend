<script setup>
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import ConsoleSubtitle from '@/views/Console/ConsoleSubtitle'
import { Form as VeeForm } from 'vee-validate'
import * as Yup from 'yup'
import { inject, onMounted, ref, watch } from 'vue'
import TextField from '@/components/Form/TextField'
import TextArea from '@/components/Form/TextArea'
import AppButton from '@/components/AppButton'
import { useRouter } from 'vue-router'
import ConsoleBackButton from '@/components/Console/ConsoleBackButton'

const axios = inject('$axios')
const router = useRouter()

const schema = Yup.object().shape({
  title: Yup.string()
      .required('Nama grup harus diisi')
      .max(50, 'Nama grup tidak bisa lebih dari 50 karakter'),
  description: Yup.string()
      .max(250, 'Nama grup tidak bisa lebih dari 250 karakter'),
  code: Yup.string()
      .required('Kode grup harus diisi')
})

const isLoading = ref(false)
const code = ref(null)
const codeInput = ref(null)

const getCode = async () => {
  if (isLoading.value) return

  isLoading.value = true

  const response = await axios.get('/groups/code').catch(() => null)

  if (response !== null)
    code.value = response.data

  isLoading.value = false
}

const submit = async (values) => {
  if (isLoading.value) return

  isLoading.value = true

  try {
    await axios.post('/groups', values)
    await router.push({ name: 'groups' })
  } catch (e) {
    isLoading.value = false
  }
}

watch(code, () => codeInput.value.changeValue(code.value))

onMounted(() => {
  getCode()
})
</script>

<template>
  <console-back-button/>
  <console-title>Buat Grup Baru</console-title>
  <console-subtitle>Lengkapi detail grup barumu</console-subtitle>
  <vee-form :validation-schema="schema" @submit="submit">
    <text-field label="Nama Grup" name="title" placeholder="Masukkan nama grup barumu"/>
    <text-area label="Deskripsi" name="description" placeholder="Masukkan deskripsi grup barumu"/>
    <text-field ref="codeInput" disabled fit label="Kode Grup" name="code"/>
    <div class="flex justify-end">
      <app-button type="submit">Buat</app-button>
    </div>
  </vee-form>
</template>