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
  <div class="min-h-screen">
    <home-navbar/>
    <div class="font-quicksand">
      <div class="flex justify-center">
        <div class="max-w-3xl">
          <p class="text-center font-semibold lg:text-5xl sm:text-2xl sm:mt-16 lg:mt-32 leading-snug">
            Belajar lebih <span class="text-regal-green">mudah</span> dan
            <span class="text-regal-green">menyenangkan</span> di
            <span class="text-regal-green">Jourid</span>
          </p>
          <p class="lg:text-2xl sm:text-lg text-center text-min-gray font-medium mt-8 mb-8">
            Mencari pengetahuan tidak pernah semudah dan secepat ini
          </p>
          <div class="border border-min-gray rounded-xl flex p-1 mx-2">
            <div class="flex-grow relative">
              <input v-model="search"
                     class="lg:w-full sm:w-4/5 min-h-full px-5 outline-none"
                     placeholder="Masukkan judul jurnal"
                     type="text"
                     @keydown.enter="searchJournals"/>
              <app-icon class="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                        name="cross"
                        width="15"
                        @click="clearSearch"/>
            </div>
            <button class="bg-regal-green sm:px-5 lg:px-14 py-5 rounded-xl text-white" @click="searchJournals">
              Temukan
            </button>
          </div>
        </div>
      </div>

      <div class="mx-auto">
        <img src="../assets/diskusi.png" class="lg:px-16 sm:px-6 lg:mt-24 sm:mt-4 mx-auto" alt=""/>
        <p
            id="mengapa_kami"
            class="text-center text-regal-green font-semibold lg:mt-28 sm:mt-14 lg:text-2xl sm:text-xl"
        >
          MENGAPA KAMI
        </p>
        <div class="max-w-3xl mx-auto">
          <div class="font-semibold lg:text-5xl sm:text-2xl text-center mt-5">
            Apasih yang membuat Jourid beda dari yang lain?
          </div>
          <div class="lg:text-2xl sm:text-lg text-center text-min-gray font-medium mt-4 mb-14">
            Kami punya berbagai alasan mengapa kamu harus mulai mencoba Jourid
          </div>
        </div>
        <div class="flex sm:flex-col lg:flex-row text-black justify-center">
          <div class="w-80 h-60  hover:bg-regal-green hover:text-white sm:mx-auto lg:m-2  mt-5 rounded-lg p-3">
            <img src="./../../public/icons/people.svg" alt=""/>
            <p class="mt-2 font-bold">Mudah dalam penggunaan</p>
            <p class="mt-3">
              Kami mempunyai tampilan yang mudah sehingga mulai kaum millenial
              hingga gen Z dapat menggunakan website ini
            </p>
          </div>

          <div class="w-80 h-60  hover:bg-regal-green hover:text-white sm:mx-auto lg:m-2  mt-5 rounded-lg p-3">
            <img src="../assets/ceklis.png" alt=""/>
            <p class="mt-2 font-bold">Solusi Lengkap</p>
            <p class="mt-3">
              kami yakin kami menjadi solusi yang lengkao dalam permasalah tugas
              maupun proyek anda
            </p>
          </div>

          <div class="w-80 h-60  hover:bg-regal-green hover:text-white sm:mx-auto lg:m-2  mt-5 rounded-lg p-3">
            <img src="../assets/wallet.png" alt=""/>
            <p class="mt-2 font-bold">Gratis dalam Segala Fitur</p>
            <p class="mt-3">
              kami mempunyai produk yang gratis dalam setiap fiturnya, kami tidak
              membebankan biaya kepada anda
            </p>
          </div>
        </div>

        <div class="flex sm:flex-col lg:flex-row text-black justify-center">
          <div class="w-80 h-60  hover:bg-regal-green hover:text-white sm:mx-auto lg:m-2  mt-5 rounded-lg p-3">
            <img src="../assets/message-text.png" alt=""/>
            <p class="mt-2 font-bold">Jurnal Dimana mana</p>
            <p class="mt-3">
              kesulitan mencari sumber , namun anda memerlukan sumber yang
              terpercaya anda dapat mencari disini
            </p>
          </div>

          <div class="w-80 h-60  hover:bg-regal-green hover:text-white sm:mx-auto lg:m-2  mt-5 rounded-lg p-3">
            <img src="../assets/messages-2.png" alt=""/>
            <p class="mt-2 font-bold">Grup Belajar</p>
            <p class="mt-3">
              Selain anda dapat jurnal secara gratis anda dapat membut grup untuk
              teman teman anda bergabung disini
            </p>
          </div>
        </div>
      </div>

      <!-- fitur kami  -->
      <div class="grid grid-cols-12 gap-4 mt-36">
        <div></div>
        <div class="lg:col-span-6 sm:col-span-12 lg:m-0 sm:m-3">
          <p class="text-regal-green font-bold text-lg" id="fitur_kami">FITUR KAMI</p>

          <p class="font-semibold lg:text-5xl sm:text-2xl mt-5">
            Kemudahan memang pilihan
            kesepurnaan adalah keharusan
          </p>
          <p class="lg:text-xl sm:text-sm text-min-gray font-medium">
            Kami mempunyai beberapa fitur yang anda dapatkan
            bila mana anda melakukan pendafatran pengguna
          </p>

          <div class="flex justify-between items-center mt-8">
            <div class="border-b  border-litle-gray pb-6">
              <p class="lg:text-4xl sm:text-2xl font-semibold">Buat Jurnal</p>
              <p class="text-sm font-medium text-min-gray mt-5 ">
                Kamu ingin berbagi jurnal kamu dengan orang lain agar orang lain
                juga terbantu oleh jurnalmu, tentu kamu dapt melakukannya.
              </p>
            </div>
            <img src="../assets/circle-button-active.png"
                 class="lg:w-28 lg:h-28 sm:w-16 sm:h-16"
                 alt=""/>
          </div>

          <div class="flex justify-between bg items-center mt-3">
            <div class="border-b  border-litle-gray pb-6">
              <p class="lg:text-4xl sm:text-2xl font-semibold mt-5">Telusuri Jurnal Terkini</p>
              <p class="text-sm font-medium text-min-gray mt-5">
                kamu dapat menelusuri jurnal terkini untuk kepentingan tugas mu
                dan juga kamu dapat membantu orang lain dengan jurnalmu
              </p>
            </div>
            <img
                alt=""
                class="lg:w-28 lg:h-28 sm:w-16 sm:h-16"
                src="../assets/circle-button-active.png"
            />
          </div>

          <div class="flex justify-between bg items-center mt-3">
            <div class="border-b  border-litle-gray pb-6">
              <p class="lg:text-4xl sm:text-2xl font-semibold mt-5">Chat Dengan Teman</p>
              <p class="text-sm font-medium text-min-gray mt-5">
                Anda juga dapat melakukan pertukaran pesan (chat ) dengan
                teman and untuk mempermudah melakukan
              </p>
            </div>
            <img src="../assets/circle-button-active.png" class="lg:w-28 lg:h-28 sm:w-16 sm:h-16" alt=""/>
          </div>
        </div>
        <div></div>
        <div class="col-span-4">
          <img alt="" class="w-57 h-80 sm:hidden lg:block" src="../assets/woman.png"/>
        </div>
      </div>

      <!-- <div class="bg-regal-green w-full h-31"></div> -->

      <div class="mt-32 lg:px-16 sm:px-8">
        <p class="text-regal-green font-bold text-lg" id="cara_penggunaan">CARA PENGGUNAAN</p>
        <p class="font-semibold lg:text-5xl sm:text-2xl">
          Kemudahan memang pilihan kesepurnaan adalah <br/>
          keharusan
        </p>
        <p class="font-semibold mt-5 lg:text-2xl sm:text-md text-min-gray">
          Kamu dapat menggunakan fitur fitur ini dengan mengakses website kami , dan malakukan registrasi akun
          maupun masuk kembali akun yang telah anda buat sebelumnya, semua akses pada kendali anda
        </p>

        <img src="../assets/display.png" class="mt-16" alt="">
      </div>

      <div class="mt-8">
        <HomeFooter/>
      </div>
    </div>
  </div>
</template>