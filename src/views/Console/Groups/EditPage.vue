<script setup>
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import ConsoleSubtitle from '@/views/Console/ConsoleSubtitle'
import { Form as VeeForm } from 'vee-validate'
import * as Yup from 'yup'
import { inject, onMounted, ref } from 'vue'
import TextField from '@/components/Form/TextField'
import TextArea from '@/components/Form/TextArea'
import AppButton from '@/components/AppButton'
import { useRoute, useRouter } from 'vue-router'
import ConsoleBackButton from '@/components/Console/ConsoleBackButton'
import PicturePicker from '@/components/Form/PicturePicker'

const axios = inject('$axios')
const baseUrl = axios.defaults.baseURL
const router = useRouter()
const route = useRoute()

const schema = Yup.object().shape({
  title: Yup.string()
      .required('Nama grup harus diisi')
      .max(50, 'Nama grup tidak bisa lebih dari 50 karakter'),
  description: Yup.string()
      .max(250, 'Nama grup tidak bisa lebih dari 250 karakter')
})

const groupId = route.params.id
const isLoading = ref(false)
const picturePlaceholder = ref(null)
const picture = ref(null)
const titleInput = ref(null)
const descriptionInput = ref(null)

const getGroup = () => {
  isLoading.value = true

  axios.get(`/groups/${groupId}`)
      .then(({ data: { title, description } }) => {
        titleInput.value.changeValue(title)
        descriptionInput.value.changeValue(description)
        picturePlaceholder.value = `${baseUrl}/groups/${groupId}/picture`
      })
      .finally(() => isLoading.value = false)
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

  formData.append('_method', 'PUT')

  await axios.post(`/groups/${groupId}`, formData)
      .then(() => router.push({ name: 'groups' }))
      .catch(() => isLoading.value = false)
}

onMounted(getGroup)
</script>

<template>
  <div class="mx-2">
    <console-back-button/>
  <console-title>Edit Grup</console-title>
  <console-subtitle>Lengkapi detail grup yang ingin kamu ubah</console-subtitle>
  <vee-form :validation-schema="schema" @submit="submit">
    <label class="font-semibold block mb-2">Gambar profil grup</label>
    <picture-picker v-model="picture" :placeholder-src="picturePlaceholder" class="mb-5"/>
    <text-field ref="titleInput" label="Nama Grup" name="title" placeholder="Masukkan nama grup barumu"/>
    <text-area ref="descriptionInput"
               label="Deskripsi"
               name="description"
               placeholder="Masukkan deskripsi grup barumu"/>
    <div class="flex justify-end">
      <app-button :is-loading="isLoading" type="submit" class="sm:w-full lg:w-1/5">Simpan</app-button>
    </div>
  </vee-form>
  </div>
  
</template>