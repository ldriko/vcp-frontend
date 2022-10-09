<script setup>
import { useSessionStore } from '@/stores/session'
import AppButton from '@/components/AppButton'
import router from '@/router'

const sessionStore = useSessionStore()

const goLogin = () => router.push('/login')
const goRegister = () => router.push('/register')
</script>

<template>
  <h1>Hello, {{ sessionStore.user?.name ?? 'Guest' }}</h1>
  <div class="mt-5">
    <app-button color="primary" @click="goLogin">Masuk</app-button>
    <span class="mx-4">atau</span>
    <app-button color="secondary" @click="goRegister">Daftar</app-button>
  </div>
</template>