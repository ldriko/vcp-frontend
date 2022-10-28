<script setup>
import { Form as VeeForm } from 'vee-validate'
import AppLogo from '@/components/AppLogo'
import * as Yup from 'yup'
import TextField from '@/components/Form/TextField'
import AppButton from '@/components/AppButton'
import { inject, ref } from 'vue'
import { useSessionStore } from '@/stores/session'
import router from '@/router'
import AppAlert from '@/components/AppAlert'
import { useAlertStore } from '@/stores/alert'

const axios = inject('$axios')
const sessionStore = useSessionStore()
const alertStore = useAlertStore()

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
    alertStore.open({
      type: 'error',
      text: 'Yahh, Detil akun yang kamu berikan belum terdaftar disini. Yuk daftar dulu'
    })
  }

  isLoading.value = false
}
</script>

<template>
  <div class="flex lg:flex-row sm:flex-col lg:p-5 sm:p-1 min-h-screen">
    <div class="bg-regal-green lg:flex sm:hidden lg:w-2/5 sm:w-full rounded-md flex flex-col">
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
    <div class="font-quicksand font-medium lg:w-3/5 sm:px-2 sm:w-full lg:ml-10  py-3">
      <p class="text-3xl font-bold">Selamat Datang</p>
      <div class="mb-5">Masukkan detil akunmu terlebih dahulu</div>
      <app-alert class="mb-4"/>
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
        <div class="mt-10 flex lg:flex-row sm:flex-col items-center">
          <app-button
              :is-disabled="isLoading"
              :is-loading="isLoading"
              color="primary"
              type="submit"
          >Masuk
          </app-button>
          <span class="mx-5 lg:block sm:hidden">atau</span>
          <app-button
              class="sm:mt-2 lg:m-0"
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
