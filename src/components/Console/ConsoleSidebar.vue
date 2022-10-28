<script setup>
import AppLogo from '@/components/AppLogo'
import ConsoleSidebarMenu from '@/components/Console/ConsoleSidebarMenu'
import ConsoleSidebarMenuItem from '@/components/Console/ConsoleSidebarMenuItem'
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/stores/session'

const axios = inject('$axios')

const router = useRouter()
const sessionStore = useSessionStore()

const isConfirmingLogout = ref(false)

const confirmLogout = () => isConfirmingLogout.value = true

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
  <nav class="w-console-sidebar bg-regal-green text-white font-semibold lg:block sm:hidden px-3 py-8 overflow-hidden">
    <img class="absolute top-0 -left-5" src="./../../assets/polaa.png" alt="">
    <img class="absolute top-64 left-60" src="./../../assets/polaa.png" alt="">
    <img class="absolute top-0 left-60" src="./../../assets/polaa.png" alt="">
    <app-logo class="mb-10 mx-2" white/>
    <console-sidebar-menu title="Menu">
      <console-sidebar-menu-item icon="home" to="console-dashboard">Beranda</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="document-copy" to="journals-search">Temukan Jurnal</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="document-text" to="journals-manage">Jurnal Saya</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="people" to="groups">Grup Saya</console-sidebar-menu-item>
    </console-sidebar-menu>
    <img class="absolute top-18 left-16 " src="./../../assets/polaa.png" alt="">
    <console-sidebar-menu title="Lainnya">
      <console-sidebar-menu-item icon="profile-white" to="profile">Profile</console-sidebar-menu-item>
      <console-sidebar-menu-item v-if="!isConfirmingLogout" icon="logout-white" @click="confirmLogout">
        Keluar Akun
      </console-sidebar-menu-item>
      <li v-else>
        <div class="text-white mb-4 mx-2">Apakah kamu yakin mau keluar?</div>
        <div class="flex gap-4">
          <div class="bg-red-600 hover:bg-red-700 transition cursor-pointer text-white text-sm rounded-xl px-3 py-4 flex-grow text-center" @click="logout">
            Keluar
          </div>
          <div class="bg-white hover:bg-gray-200 transition cursor-pointer text-black text-sm rounded-xl px-3 py-4 flex-grow text-center" @click="isConfirmingLogout = false">
            Batal
          </div>
        </div>
      </li>
    </console-sidebar-menu>
  </nav>

</template>
