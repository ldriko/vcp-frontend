<script setup>
import { Form as VeeForm } from 'vee-validate'
import * as Yup from 'yup'
import TittleName from '@/components/TittleName.vue'
import TextField from '@/components/Form/TextField'
import AppButton from '@/components/AppButton'
import { inject, ref } from 'vue'
import { useSessionStore } from '@/stores/session'
import router from '@/router'
import AppLogo from '@/components/AppLogo'

const axios = inject('$axios')
const sessionStore = useSessionStore()

const schema = Yup.object().shape({
  name: Yup.string().required('Nama harus diisi'),
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

    await router.push({ name: 'console-dashboard' })
  } catch (e) {
    console.log(e)
  }

  isLoading.value = false
}
</script>

<template>
  <div class="flex p-5 min-h-screen">
    <div class="bg-regal-green w-2/5 rounded-md flex flex-col lg:block sm:hidden">
      <div class="flex flex-col gap-6 p-9 flex-shrink-0">
        <app-logo white/>
        <p class="text-white font-bold text-3xl leading-10">
          Ayo Mulai Permudah <br/>
          Pekerjan anda dengan <br/>
          kami disini.
        </p>
        <p class="text-base text-white">
          Sebelum kamu Masuk ke Belajar pastikan daftar dahulu ya Sebelum kamu
          <br/>
          Masuk ke Belajar pastikan <br/>
        </p>
      </div>
      <div class="flex justify-between mt-auto">
        <img alt="" class="h-78" src="../assets/Girl-Mid.png"/>
        <img alt="" class="h-78" src="../assets/Girl-L.png"/>
      </div>
    </div>
    <div class="font-quicksand font-medium lg:w-3/5 sm:w-full lg:ml-10 sm:m-0 py-3">
      <tittle-name title="Yuk Daftar"/>
      <div class="mb-5">Sebelum kamu masuk ke Jourid, daftarkan akunmu terlebih dahulu ya</div>
      <vee-form :validation-schema="schema" @submit="submit">
        <text-field
            label="Nama"
            name="name"
            placeholder="Masukkan nama lengkap anda"
        />
        <text-field
            label="Alamat email"
            name="email"
            placeholder="Masukkan alamat email anda"
        />
        <text-field
            label="Password"
            name="password"
            placeholder="Masukkan password yang ingin digunakan"
            type="password"
        />
        <text-field
            label="Konfirmasi Password"
            name="password_confirmation"
            placeholder="Masukkan ulang password"
            type="password"
        />
        <div class="mt-10 flex lg:flex-row sm:flex-col">
          <app-button
              :is-disabled="isLoading"
              :is-loading="isLoading"
              color="primary"
              type="submit"
          >Buat Akun
          </app-button>
          <span class="mx-5 lg:block sm:hidden">atau</span>
          <app-button
              class="sm:mt-2 lg:m-0"
              :is-disabled="isLoading"
              :is-loading="isLoading"
              color="secondary"
              @click="gotoLogin"
          >Masuk
          </app-button>
        </div>
      </vee-form>
    </div>
  </div>
</template>
