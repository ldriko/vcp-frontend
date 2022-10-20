<script setup>
import { defineProps } from 'vue'
import { useSessionStore } from '@/stores/session'
import AppLogo from '@/components/AppLogo'
import HomeNavbarMenu from '@/components/Home/HomeNavbarMenu'
import HomeNavbarMenuItem from '@/components/Home/HomeNavbarMenuItem'
import AppButton from '@/components/AppButton'
import AppAvatar from '@/components/AppAvatar'


function openNav() {
        document.getElementById("open").classList.remove("hidden");
        document.getElementById("btnOpen").classList.add("hidden");
        document.getElementById("btnHide").classList.add("block");
        document.getElementById("btnHide").classList.remove("hidden");
    }

    function closeNav(){
        document.getElementById("open").classList.remove("block");
        document.getElementById("open").classList.add("hidden");
        document.getElementById("btnOpen").classList.remove("hidden");
        document.getElementById("btnHide").classList.toggle("hidden");
    }

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
    class="lg:flex l sm:hidden px-10 lg:px-16 py-10 items-center justify-between font-semibold" id="beranda"
  >
    <app-logo />
   
    <home-navbar-menu v-if="!hideMenu">
      <home-navbar-menu-item href="#beranda">Beranda</home-navbar-menu-item>
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
  <header class="flex lg:hidden sm:block items-center lg:py-0 py-3 lg:px-20  bg-regal-green  ">
        <div class="flex justify-between items-center mx-2">
          <app-logo/>

          <img src="./../../assets/icon-hamburger.svg" id="btnOpen" class="lg:hidden  w-5 h-5"  @click="openNav()" alt="">
          <img src="./../../assets/icon-close.svg" id="btnHide" class="lg:block hidden w-5 h-5" @click="closeNav()"  alt="">
        </div>

            <button class="hidden lg:block bg-gradient-to-r text-white from-lime-green to-bright-cyan py-2 px-5 rounded-3xl">Request Invite</button>


    </header>

    <div class="bg-regal-green relative mt-3 mx-3 text-white  rounded-md lg:hidden hidden" id="open">
        <ul>
          <li class="py-2 text-center hover:bg-almost-green">

              <a href="">beranda</a>
            </li>
            <li class="py-2 text-center hover:bg-almost-green">
              <a href="#mengapa_kami">Mengapa Kami</a>

            </li>
            <li class="py-2 text-center hover:bg-almost-green">
              <a href="#fitur_kami">Fitur Kami</a>

            </li>

            <li class="py-2 text-center hover:bg-almost-green">
              <a href="#cara_penggunaan">Cara Penggunaan</a>

            </li>
            <div v-if="sessionStore.isLoggedIn" class="flex mx-20 py-2">
              <app-avatar />
                  <app-button @click="$router.push({ name: 'console-dashboard' })"
                    >Console</app-button
                  >
            </div>
            <div v-else>
              <li class="py-2 text-center hover:bg-almost-green">
              <button  @click="$router.push({ name: 'login' })">Masuk</button>

            </li>
            <li class="py-2 text-center hover:bg-almost-green">
              <button @click="$router.push({ name: 'register' })">Register</button>

            </li>
            </div>


        </ul>
    </div>

</template>
