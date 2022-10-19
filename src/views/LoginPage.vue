<script setup>
import { Form as VeeForm } from 'vee-validate'
import AppLogo from '@/components/AppLogo'
import * as Yup from 'yup'
import TittleName from '@/components/TittleName.vue'
import TextField from '@/components/Form/TextField'
import AppButton from '@/components/AppButton'
import { inject, ref } from 'vue'
import { useSessionStore } from '@/stores/session'
import router from '@/router'

const axios = inject('$axios')
const sessionStore = useSessionStore()

const schema = Yup.object().shape({
  email: Yup.string().required('Alamat email harus diisi'),
  password: Yup.string().required('Password harus diisi')
})

const isLoading = ref(false)

const gotoRegister = () => router.push({ name: 'register' })

const submit = async (values) => {
  if (isLoading.value) return

  isLoading.value = true

  await axios.get('/../sanctum/csrf-cookie')

  try {
    const { data } = await axios.post('/login', values)

    sessionStore.setUser(data)
    sessionStore.setIsLoggedIn(true)

    await router.push({ name: 'console-dashboard' })
  } catch (e) {
    console.log(e)
  }

  isLoading.value = false
}
</script>

<template>
  <div class="flex lg:flex-row sm:flex-col lg:p-5 sm:p-1 min-h-screen">
    <div class="bg-regal-green lg:block sm:hidden lg:w-2/5 sm:w-full rounded-md flex flex-col">
      <div class="p-9 flex flex-col gap-6">
        <app-logo white/>
        <p class="text-white font-bold text-3xl leading-10">
          Ayo Mulai Permudah Pekerjan anda dengan kami disini.
        </p>
        <p class="text-base text-white">
          Sebelum kamu mulai menggunakan Jourid, daftarkan akunmu terlebih dahulu yuk<br>
        </p>
      </div>
      <img alt="" class="mt-auto" src="../assets/login-new.png"/>
    </div>
    <div class="font-quicksand font-medium w-3/5 lg:ml-10 sm:ml-2 py-3">
      <p class="text-2xl">Selamat Datang</p>
      <div class="mb-5">Masukkan detil akunmu terlebih dahulu</div>
      <vee-form :validation-schema="schema" @submit="submit">
        <text-field
            class="w-full"
            label="Alamat email"
            name="email"
            placeholder="Masukkan alamat emailmu"
        />
        <text-field
            class="w-full"
            label="Password"
            name="password"
            placeholder="Masukkan password yang ingin digunakan"
            type="password"
        />
        <div class="mt-10 flex">
          <app-button
              :is-disabled="isLoading"
              :is-loading="isLoading"
              color="primary"
              type="submit"
          >Masuk
          </app-button>
          <span class="mx-5">atau</span>
          <app-button
              :is-disabled="isLoading"
              :is-loading="isLoading"
              color="secondary"
              @click="gotoRegister"
          >
            Buat Akun
          </app-button>
        </div>
      </vee-form>
    </div>
  </div>
</template>
