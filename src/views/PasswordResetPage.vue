<template>
    <div class="flex p-5 px-20 w-screen">
      <div>
        <!-- <img src="../assets/login-img.png" class="h-full w-100" alt="" /> -->
      </div>
      <div class="font-quicksand w-8/12 ml-10 py-3">
        <TittleName title="Lupa dengan password kamu?" />
        <p class="mt-2 text-base font-medium">
          Sebelum kamu Masuk ke Jourid pastikan daftar dahulu ya
        </p>
  
        <div class="mt-2">
          <label class="font-bold text-base" for="username">Masukkan Email Anda</label><br />
          <input
            type="text"
            placeholder="Masukkan Email kamu"
            class="border-solid border 12 rounded-lg px-1 py-2 w-full"
            id="username"
          /><br />
        </div>
  
        <div class="pt-4">
            <router-link to="/pulihkan"> <ButtonPrimary title="Konfirmasi" /></router-link> atau 
            <router-link to="/" > <ButtonSecondary title="Saya Telah Ingat" /></router-link>
        </div>
     
      </div>
    </div>
  </template>
  
  <script>
  import '../assets/tailwind.css'
  import TittleName from '@/components/TittleName.vue'
  import ButtonPrimary from '@/components/ButtonPrimary.vue'
  import ButtonSecondary from '@/components/ButtonSecondary.vue'

  export default {
    components: {
      TittleName,
      ButtonPrimary,
      ButtonSecondary
    }
  }
  </script>
  