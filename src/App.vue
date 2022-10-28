<script setup>
import { useSessionStore } from '@/stores/session'
import { onMounted } from 'vue'

const sessionStore = useSessionStore()

onMounted(sessionStore.getUser)
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
}
</style>