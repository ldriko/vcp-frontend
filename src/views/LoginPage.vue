<template>
  <div class="flex p-5 px-20 w-screen">
    <div>
      <img src="../assets/login-img.png" class="h-full w-100" alt="" />
    </div>
    <div class="font-quicksand w-8/12 ml-10 py-3">
      <TittleName title="Selamat Datang" />
      <p class="mt-2 text-base font-medium">Sebelum masuk ke belajar pastikan daftar dahulu ya</p>

      <div class="mt-2">
        <label class="font-bold text-base" for="username">Email</label><br>
        <input type="text" placeholder="Masukkan Email kamu" class="border-solid border 12 rounded-lg px-1 py-2 w-full" id="username" /><br>
      </div>
     
      <div class="mt-2">
        <label class="font-bold text-base" for="password">Password</label><br>
        <input type="password" placeholder="Masukkan Password kamu" class="border-solid border 12 rounded-lg px-1 py-2 w-full" id="password" />
      </div>

      <router-link ><p class="mt-6 text-base underline text-regal-green">Lupa Password?</p></router-link>

      <div class="pt-4">
        <router-link to=""> <button class="bg-regal-green w-32 py-2 text-white text-sm rounded-md mr-4">Masuk</button></router-link> atau 
        <router-link to="/register" > <button class="border w-32 py-2 border-solid border-regal-green text-sm text-regal-green text-sm rounded-md mx-4">Buat Akun</button></router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import "../assets/tailwind.css";
import TittleName from "@/components/TittleName.vue";
export default { components: { TittleName } };
</script>


