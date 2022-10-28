<script setup>
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import { useSessionStore } from "@/stores/session";
import { Form as VeeForm } from 'vee-validate'
import ConsoleTitle from "@/views/Console/ConsoleTitle";
import PicturePicker from "@/components/Form/PicturePicker";
import TextField from "@/components/Form/TextField";
import AppButton from "@/components/AppButton";
import * as Yup from "yup";

const session = useSessionStore()
const router = useRouter()
const axios = inject('$axios')
const dayjs = inject('$dayjs')
const apiBaseURL = axios.defaults.baseURL
const pictureURL = `${ apiBaseURL }/user/picture`

const picture = ref(null)
const isLoading = ref(false)

const schema = Yup.object().shape({
  name: Yup.string().required('Nama harus diisi')
})

const submit = async (values) => {
  if (isLoading.value) return

  isLoading.value = true

  const formData = new FormData()

  for (const key in values) formData.append(key, values[key])

  if (picture.value) formData.append('picture', picture.value)

  formData.append('_method', 'PUT')

  try {
    const { data } = await axios.post('/user', formData)

    session.setUser(data)

    await router.push({ name: 'profile' })
  } catch (e) {
    isLoading.value = false
  }
}
</script>

<template>
  <console-title>Edit Profil</console-title>
  <hr class="my-8">
  <div class="max-w-screen-md mx-auto">
    <div class="flex flex-col items-center justify-center mb-8">
      <div class="font-semibold mb-2">Gambar Profil</div>
      <div class="mb-4">Klik untuk merubah</div>
      <picture-picker v-model="picture" :placeholder-src="pictureURL"/>
    </div>
    <vee-form :validation-schema="schema" @submit="submit">
      <text-field :value="session.user.name" label="Nama" name="name" placeholder="Masukkan nama lengkap anda"/>
      <div class="mt-10 flex lg:flex-row sm:flex-col justify-end">
        <app-button :is-disabled="isLoading" :is-loading="isLoading" color="primary" type="submit">Simpan</app-button>
      </div>
    </vee-form>
  </div>
</template>
