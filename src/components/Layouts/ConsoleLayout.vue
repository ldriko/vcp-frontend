<script setup>
import { inject } from 'vue'
import ConsoleSidebar from '@/components/Console/ConsoleSidebar'
import AppLogo from '../AppLogo.vue';
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
  <div class="min-h-screen flex">
    <console-sidebar class="flex-shrink-0"/>
    <div class="flex-grow min-h-screen max-h-screen lg:p-10 sm:p-0 overflow-auto">
      <header class="flex lg:hidden sm:block items-center lg:py-0 py-3 lg:px-20  bg-regal-green  ">
        <div class="flex justify-between items-center mx-2">
          <app-logo/>

          <img src="./../../assets/icon-hamburger.svg" id="btnOpen" class="lg:hidden  w-5 h-5" @click="openNav()"
               alt="">
          <img src="./../../assets/icon-close.svg" id="btnHide" class="lg:block hidden w-5 h-5" @click="closeNav()"
               alt="">
        </div>

        <button
            class="hidden lg:block bg-gradient-to-r text-white from-lime-green to-bright-cyan py-2 px-5 rounded-3xl">
          Request Invite
        </button>


      </header>

      <div class="bg-regal-green relative mt-3 mx-3 text-white  rounded-md lg:hidden hidden" id="open">
        <ul>
          <li class="py-2 hover:bg-almost-green">
            <router-link :to="{ name: 'console-dashboard'}"><p class="text-center">Beranda</p></router-link>

          </li>
          <li class="py-2 hover:bg-almost-green">
            <router-link :to="{ name: 'journals-search'}"><p class="text-center">Temukan Jurnal</p></router-link>

          </li>
          <li class="py-2 hover:bg-almost-green">
            <router-link :to="{ name: 'journals-manage'}"><p class="text-center">Jurnal Saya</p></router-link>

          </li>
          <li class="py-2 hover:bg-almost-green">
            <router-link :to="{ name: 'groups'}"><p class="text-center">Group Saya</p></router-link>

          </li>
          <li class="py-2 hover:bg-almost-green">
            <p class="text-center" @click="logout">Keluar</p>

          </li>

        </ul>
      </div>


      <slot/>
    </div>
  </div>
</template>

<script>
function openNav() {
  document.getElementById("open").classList.remove("hidden");
  document.getElementById("btnOpen").classList.add("hidden");
  document.getElementById("btnHide").classList.add("block");
  document.getElementById("btnHide").classList.remove("hidden");
}

function closeNav() {
  document.getElementById("open").classList.remove("block");
  document.getElementById("open").classList.add("hidden");
  document.getElementById("btnOpen").classList.remove("hidden");
  document.getElementById("btnHide").classList.toggle("hidden");
}
</script>