<template>
  <div class="flex p-5 px-20 w-screen">
    <div>
      <!-- <img src="../assets/login-img.png" class="h-full w-100" alt="" /> -->
    </div>
    <div class="font-quicksand w-8/12 ml-10 py-3">
      <TittleName title="Selamat Datang" />
      <p class="mt-2 text-base font-medium">
        Sebelum kamu Masuk ke  Belajar pastikan daftar dahulu ya  
      </p>

      <div class="mt-2">
        <label class="font-bold text-base" for="username">Email</label><br />
        <input
          type="text"
          placeholder="Masukkan Email kamu"
          class="border-solid border 12 rounded-lg px-1 py-2 w-full"
          id="username"
        /><br />
      </div>

      <div class="mt-2">
        <label class="font-bold text-base" for="password">Password</label
        ><br/>
        <input
          type="password"
          placeholder="Masukkan Password kamu"
          class="border-solid border 12 rounded-lg px-1 py-2 w-full"
          id="password"
        />
      </div>


      <router-link to="/forget-password"><p class="underline decoration-solid text-regal-green mt-2">Lupa Password?</p></router-link>

      <div class="pt-4">
          <router-link to=""> <ButtonPrimary title="Masuk" /></router-link> atau 
          <router-link to="/register" > <ButtonSecondary title="Buat Akun" /></router-link>
      </div>
   
    </div>
  </div>
</template>

<script>
import "../assets/tailwind.css";
import TittleName from "@/components/TittleName.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import ButtonSecondary from "@/components/ButtonSecondary.vue";

export default {
  components: {
    TittleName,
    ButtonPrimary,
    ButtonSecondary,
  },
};
</script>
