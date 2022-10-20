<script setup>
import { defineProps } from 'vue'
import { useSessionStore } from '@/stores/session'
import AppLogo from '@/components/AppLogo'
import HomeNavbarMenu from '@/components/Home/HomeNavbarMenu'
import HomeNavbarMenuItem from '@/components/Home/HomeNavbarMenuItem'
import AppButton from '@/components/AppButton'
import AppAvatar from '@/components/AppAvatar'

const props = defineProps({
  hideMenu: {
    type: Boolean,
    default: false
  }
})

const sessionStore = useSessionStore()
</script>

<template>
  <div
      class="flex px-10 lg:px-16 py-10 items-center justify-between font-semibold sticky top-0 bg-white"
  >
    <app-logo />
   
    <home-navbar-menu v-if="!hideMenu">
      <home-navbar-menu-item>Beranda</home-navbar-menu-item>
      <home-navbar-menu-item>
        <a href="#mengapa_kami">Mengapa Kami</a></home-navbar-menu-item
      >
      <home-navbar-menu-item>
        <a href="#fitur_kami">Fitur Kami</a>
      </home-navbar-menu-item>
      <home-navbar-menu-item
        ><a href="#cara_penggunaan">Cara Penggunaan</a>
      </home-navbar-menu-item>
    </home-navbar-menu>
    <div class="inline-flex gap-4 items-center">
      <template v-if="sessionStore.isLoggedIn">
        <app-avatar />
        <app-button @click="$router.push({ name: 'console-dashboard' })"
          >Console</app-button
        >
      </template>
      <template v-else>
        <div class="block flex">
          <div class="w-1/2">
            <app-button @click="$router.push({ name: 'login' })"
              >Masuk</app-button
            >
          </div>

          <div class="w-1/2">
            <app-button
              color="secondary"
              @click="$router.push({ name: 'register' })"
              >Daftar</app-button
            >
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
