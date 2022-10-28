<script setup>
import SuccessPage from "@/components/Layouts/SuccessPage";
</script>

<template>
  <success-page title="Jurnalmu berhasil diperbarui!"
                subtitle="Jurnal yang telah kamu buat bisa kamu temukan di menu Jurnal Saya"
                redirect-text="Masuk ke jurnal saya"
                @redirect="$router.push({name:'journals-manage'})"/>
</template>