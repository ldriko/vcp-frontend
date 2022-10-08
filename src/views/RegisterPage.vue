<script setup>
import TittleName from '@/components/TittleName.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ButtonSecondary from '@/components/ButtonSecondary.vue'
import { inject, reactive } from 'vue'
import GenderInput from '@/components/form/GenderInput'

const $axios = inject('$axios')

const form = reactive({
  name: '',
  email: '',
  password: '',
  gender: 0
})

const register = async () => {
  // Cookies disek
  await $axios.get('/../sanctum/csrf-cookie')

  // Baru request register
}
</script>

<template>
  <div class="flex p-5 px-20 w-screen">
    <div>
      <!-- <img src="../assets/login-img.png" class="h-full w-100" alt=""/> -->
    </div>
    <div class="font-quicksand w-8/12 ml-10 py-3">
      <TittleName title="Yuk Daftar"/>
      <p class="mt-2 text-base font-medium">Sebelum kamu Masuk ke Belajar pastikan daftar dahulu ya </p>

      <div class="mt-2">
        <label class="font-bold text-base" for="name">Nama Lengkap</label><br>
        <input id="name"
               v-model="form.name"
               class="border-solid border 12 rounded-lg px-1 py-2 w-full"
               placeholder="Masukkan Nama Lengkap kamu"
               type="text"/>
      </div>

      <div class="mt-2">
        <label class="font-bold text-base" for="email">Email</label><br>
        <input id="email"
               v-model="form.email"
               class="border-solid border 12 rounded-lg px-1 py-2 w-full"
               placeholder="Masukkan email kamu"
               type="email"/>
      </div>

      <div class="mt-2">
        <label class="font-bold text-base" for="password">Password</label><br>
        <input type="password"
               placeholder="Masukkan password"
               class="border-solid border 12 rounded-lg px-1 py-2 w-full"
               id="password"/>
      </div>

      <gender-input v-model="form.gender"/>


      <div class="pt-4">
        <router-link to="">
          <ButtonPrimary title="Buat Akun" @click="register"/>
        </router-link>
        atau
        <router-link to="/">
          <ButtonSecondary title="Masuk Kembali"/>
        </router-link>
      </div>

    </div>
  </div>
</template>
  
  
  