<script setup>
import AppIcon from "@/components/AppIcon";
import AppButton from "@/components/AppButton";
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center text-center h-full max-w-screen-lg m-auto">
    <app-icon name="success" class="w-1/2 mb-8"/>
    <div>
      <div class="text-3xl font-semibold">Selamat! Jurnalmu telah berhasil dipublikasikan!</div>
      <div class="mb-8">Jurnal yang telah kamu buat bisa kamu temukan di menu Jurnal Saya</div>
      <app-button @click="$router.push({name: 'journals-manage'})">Masuk ke jurnal saya</app-button>
    </div>
  </div>
</template>