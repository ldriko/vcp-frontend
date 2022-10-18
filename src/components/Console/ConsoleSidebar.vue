<script setup>
import AppLogo from '@/components/AppLogo'
import ConsoleSidebarMenu from '@/components/Console/ConsoleSidebarMenu'
import ConsoleSidebarMenuItem from '@/components/Console/ConsoleSidebarMenuItem'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/stores/session'

const axios = inject('$axios')

const router = useRouter()
const sessionStore = useSessionStore()

const logout = () => {
  axios.post('/logout')
      .then(() => {
        router.push({ name: 'home' })
        sessionStore.clear()
      })
      .catch(() => null)
}
</script>

<template>
  <nav class="w-console-sidebar bg-regal-green text-white font-semibold px-3 py-8">
    <app-logo class="mb-10 mx-2" white/>
    <console-sidebar-menu title="Menu">
      <console-sidebar-menu-item icon="home" to="console-dashboard">Beranda</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="document-copy" to="journals-search">Temukan Jurnal</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="document-text" to="journals-manage">Jurnal Saya</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="people" to="groups">Grup Saya</console-sidebar-menu-item>
    </console-sidebar-menu>

    <console-sidebar-menu title="Lainnya">
      <console-sidebar-menu-item icon="profile-circle-white">Akun Saya</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="logout-white" @click="logout">Keluar Akun</console-sidebar-menu-item>
    </console-sidebar-menu>
  </nav>
</template>
