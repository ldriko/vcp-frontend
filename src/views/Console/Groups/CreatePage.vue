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
import PicturePicker from '@/components/Form/PicturePicker'

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
const picture = ref(null)
const code = ref(null)
const codeInput = ref(null)

const getCode = async () => {
  if (isLoading.value) return

  isLoading.value = true

  const response = await axios.get('/groups/code').catch(() => null)

  if (response !== null) {
    code.value = response.data
  }

  isLoading.value = false
}

const submit = async (values) => {
  if (isLoading.value) return

  isLoading.value = true

  const formData = new FormData()

  for (const key in values) {
    formData.append(key, values[key])
  }

  if (picture.value !== null) {
    formData.append('picture', picture.value)
  }

  formData.append('code', code.value)

  await axios.post('/groups', formData)
      .then(() => router.push({ name: 'groups-create-success', params: { code: code.value } }))
      .catch(() => isLoading.value = false)
}

watch(code, () => codeInput.value.changeValue(code.value))

onMounted(() => {
  getCode()
})
</script>

<template>
  <div class="mx-2">
    <console-back-button/>
    <console-title>Buat Grup Baru</console-title>
    <console-subtitle>Lengkapi detail grup barumu</console-subtitle>
    <vee-form :validation-schema="schema" @submit="submit">
      <label class="font-semibold block mb-2">Gambar profil grup</label>
      <picture-picker v-model="picture" class="mb-5"/>
      <text-field label="Nama Grup" name="title" placeholder="Masukkan nama grup barumu"/>
      <text-area label="Deskripsi" name="description" placeholder="Masukkan deskripsi grup barumu"/>
      <text-field ref="codeInput" disabled fit label="Kode Grup" name="code"/>
      <div class="flex justify-end">
        <app-button type="submit" class="lg:w-1/5 w-full">Buat</app-button>
      </div>
    </vee-form>
  </div>

</template>