<script setup>
import AppIcon from '@/components/AppIcon'
import HomeNavbar from '@/components/Home/HomeNavbar'
import HomeFooter from '@/components/Home/HomeFooter.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref(null)

const clearSearch = () => search.value = ''

const searchJournals = () => router.push({
  name: 'journals-search-guest',
  params: { type: 'guest' },
  query: { q: search.value }
})

</script>

<template>
  <home-navbar/>
  <div class="font-quicksand">
    <div class="flex justify-center">
      <div class="max-w-3xl">
        <p class="text-center font-semibold text-5xl mt-32 leading-snug">
          Belajar lebih mudah dan <span class="text-regal-green">menyenangkan</span> di
          <span class="text-regal-green">Jourid</span>
        </p>
        <p class="text-2xl text-center text-min-gray font-medium mt-8 mb-8">
          Mencari pengetahuan tidak pernah semudah dan secepat ini
        </p>
        <div class="border border-min-gray rounded-xl flex p-1">
          <div class="flex-grow relative">
            <input v-model="search"
                   class="w-full min-h-full px-5 outline-none"
                   placeholder="Masukkan judul jurnal"
                   type="text"
                   @keydown.enter="searchJournals"/>
            <app-icon class="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                      name="cross"
                      width="15"
                      @click="clearSearch"/>
          </div>
          <button class="bg-regal-green px-14 py-5 rounded-xl text-white" @click="searchJournals">
            Temukan
          </button>
        </div>
      </div>
    </div>

    <div class="">
      <img src="../assets/diskusi.png" class="px-16 mt-24" alt=""/>
      <p class="text-center text-regal-green font-semibold mt-28 text-2xl">
        MENGAPA KAMI
      </p>
      <div class="max-w-xl mx-auto">
        <div class="font-semibold text-5xl text-center mt-5">
          Poin-poin penting bagi kami
        </div>
        <div class="text-2xl text-center text-min-gray font-medium mt-4 mb-14">
          Kami memiliki beberapa alasan mengapa kamu harus mencoba produk kami dalam keseharianmu
        </div>
      </div>
      <div class="flex text-white justify-center">
        <div class="w-80 h-60 bg-regal-green mr-5 rounded-2xl p-5">
          <img alt="" src="../assets/people.png"/>
          <div class="font-semibold text-lg my-3">Mudah dalam penggunaan</div>
          <div class="text-sm font-medium">
            Kami memiliki tampilan yang dapat digunakan dengan mudah oleh semua kalangan
          </div>
        </div>

        <div class="w-80 h-60 bg-regal-green mr-5 rounded-2xl p-5">
          <img alt="" src="../assets/people.png"/>
          <div class="font-semibold text-lg my-3">Solusi lengkap</div>
          <div class="text-sm font-medium">
            Kami yakin akan menjadi solusi yang lengkap dalam menyelesaikan permasalahan tugas maupun proyekmu
          </div>
        </div>

        <div class="w-80 h-60 bg-regal-green mr-5 rounded-2xl p-5">
          <img alt="" src="../assets/people.png"/>
          <div class="font-semibold text-lg my-3">Semua fitur <span class="text-regal-green">GRATIS</span></div>
          <div class="text-sm font-medium">
            Produk dengan fitur lengkap tanpa meminta sepeser pun uang kamu
          </div>
        </div>
      </div>

      <div class="flex text-white justify-center mt-5">
        <div class="w-80 h-60 bg-regal-green mr-5 rounded-2xl p-5">
          <img alt="" src="../assets/people.png"/>
          <div class="font-semibold text-lg my-3">Mudah dalam penggunaan</div>
          <div class="text-sm font-medium">
            Kami memiliki tampilan yang dapat digunakan dengan mudah oleh semua kalangan
          </div>
        </div>

        <div class="w-80 h-60 bg-regal-green mr-5 rounded-2xl p-5">
          <img alt="" src="../assets/people.png"/>
          <div class="font-semibold text-lg my-3">Mudah dalam penggunaan</div>
          <div class="text-sm font-medium">
            Kami memiliki tampilan yang dapat digunakan dengan mudah oleh semua kalangan
          </div>
        </div>
      </div>
    </div>

    <!-- fitur kami  -->
    <div class="grid grid-cols-12 gap-4 mt-36">
      <div></div>
      <div class="col-span-6">
        <p class="text-regal-green font-bold text-lg">FITUR KAMI</p>

        <p class="font-semibold text-5xl mt-5">
          Kemudahan memang pilihan <br/>
          kesepurnaan adalah keharusan
        </p>
        <p class="text-lg text-min-gray font-medium">
          have you ever feel to hard move from schooll application to anoher
          video conference ,
        </p>

        <div class="flex justify-between items-center mt-12">
          <div>
            <p class="text-4xl font-semibold">Kelas Online</p>
            <p class="text-sm font-medium text-min-gray mt-5">
              have you ever feel to hard move from schooll application <br/>
              to anoher video conference ,
            </p>
          </div>
          <img alt="" class="w-28 h-28" src="../assets/button-circle.png"/>
        </div>

        <div class="flex justify-between bg items-center mt-12">
          <div>
            <p class="text-4xl font-semibold mt-5">Telusuri Jurnal Terkini</p>
            <p class="text-sm font-medium text-min-gray mt-5">
              have you ever feel to hard move from schooll application <br/>
              to anoher video conference ,
            </p>
          </div>
          <img
              alt=""
              class="w-28 h-28"
              src="../assets/circle-button-active.png"
          />
        </div>

        <div class="flex justify-between bg items-center mt-12">
          <div>
            <p class="text-4xl font-semibold mt-5">Chat Dengan Teman</p>
            <p class="text-sm font-medium text-min-gray mt-5">
              have you ever feel to hard move from schooll application <br/>
              to anoher video conference ,
            </p>
          </div>
          <img alt="" class="w-28 h-28" src="../assets/button-circle.png"/>
        </div>
      </div>
      <div></div>
      <div class="col-span-4">
        <img alt="" class="w-57 h-80" src="../assets/woman.png"/>
      </div>
    </div>

    <div class="bg-regal-green w-full h-31"></div>

    <div class="mt-32 px-16">
      <p class="text-regal-green font-bold text-lg">CARA PENGGUNAAN</p>
      <p class="font-semibold text-5xl">
        Kemudahan memang pilihan kesepurnaan adalah <br/>
        keharusan
      </p>
      <p class="font-semibold mt-5 text-2xl text-min-gray">
        have you ever feel to hard move from schooll application to anoher video
        conference have you ever feel <br> to hard move from schooll application to
        anoher video conference application to anoher video conference
      </p>

      <img src="../assets/display.png" class="mt-16" alt="">


    </div>

    <div class="mt-8">
      <HomeFooter/>
    </div>
  </div>
</template>