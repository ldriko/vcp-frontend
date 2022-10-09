<script setup>
import { Form as VeeForm } from 'vee-validate'
import * as Yup from 'yup'
import TittleName from '@/components/TittleName.vue'
import TextField from '@/components/form/TextField'
import AppButton from '@/components/AppButton'
import { inject, ref } from 'vue'
import { useSessionStore } from '@/stores/session'
import router from '@/router'

const axios = inject('$axios')
const sessionStore = useSessionStore()

const schema = Yup.object().shape({
  name: Yup.string()
      .required('Nama harus diisi'),
  email: Yup.string()
      .required('Alamat email harus diisi')
      .email('Alamat email harus valid'),
  password: Yup.string()
      .required('Password harus diisi')
      .min(8, 'Jumlah password minimal 8 karakter'),
  password_confirmation: Yup.string()
      .required('Konfirmasi password anda')
      .oneOf([Yup.ref('password')], 'Konfirmasi password tidak sesuai')
})

const isLoading = ref(false)

const gotoLogin = () => router.push('/login')

const submit = async (values) => {
  if (isLoading.value) return

  isLoading.value = true

  await axios.get('/../sanctum/csrf-cookie')

  try {
    const { data } = await axios.post('/register', {
      ...values,
      gender: 0
    })

    sessionStore.setUser(data)
    sessionStore.setIsLoggedIn(true)

    await router.push('/')
  } catch (e) {
    console.log(e)
  }

  isLoading.value = false
}
</script>

<template>
  <div class="flex p-5 px-20">
    <div class="font-quicksand font-medium w-8/12 ml-10 py-3">
      <tittle-name title="Yuk Daftar"/>
      <div class="mb-5">Sebelum kamu masuk ke Belajar, daftarkan akunmu terlebih dahulu ya</div>
      <vee-form :validation-schema="schema" @submit="submit">
        <text-field label="Nama" name="name" placeholder="Masukkan nama lengkap anda"/>
        <text-field label="Alamat email" name="email" placeholder="Masukkan alamat email anda"/>
        <text-field label="Password"
                    name="password"
                    placeholder="Masukkan password yang ingin digunakan"
                    type="password"/>
        <text-field label="Konfirmasi Password"
                    name="password_confirmation"
                    placeholder="Masukkan ulang password"
                    type="password"/>
        <div class="mt-10">
          <app-button :is-disabled="isLoading" :is-loading="isLoading" color="primary" type="submit">Buat Akun
          </app-button>
          <span class="mx-5">atau</span>
          <app-button :is-disabled="isLoading" :is-loading="isLoading" color="secondary" @click="gotoLogin">Masuk</app-button>
        </div>
      </vee-form>
    </div>
  </div>
</template>