<script setup>
import { useSessionStore } from '@/stores/session'
import { onMounted } from 'vue'

const sessionStore = useSessionStore()

onMounted(async () => {
  await sessionStore.getUser()
})
</script>

<template>
  <router-view></router-view>
</template>