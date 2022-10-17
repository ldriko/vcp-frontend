<script setup>
import HomeNavbar from '@/components/Home/HomeNavbar'
import HomeFooter from '@/components/Home/HomeFooter.vue'</script>

<template>
  <home-navbar/>
  <div class="font-quicksand">
    <p class="text-center font-semibold text-5xl mt-32">
      Jourid lebih mudah dan <br/>
      <span class="text-regal-green">menyenangkan</span> dengan
      <span class="text-regal-green"> Education</span>
    </p>
    <p class="text-2xl text-center text-min-gray font-medium mt-9">
      have you ever feel to hard move from schooll application <br />
      to anoher video conference ,
    </p>
    <div class="border border-min-gray mt-9 rounded-xl flex p-1 mx-96">
      <input
        type="text"
        placeholder="Temukan Jurnal Terbaru disini "
        class="w-full"
      />
      <button class="bg-regal-green px-14 py-5 rounded-xl text-white">
        Temukan
      </button>
    </div>

    <div class="">
      <img src="../assets/diskusi.png" class="px-16 mt-24" alt="" />
      <p class="text-center text-regal-green font-semibold mt-28 text-2xl">
        MENGAPA KAMI
      </p>
      <p class="font-semibold text-5xl text-center mt-5">
        Kita mempunyai beberapa <br />
        poin penting bagi kami
      </p>
      <p class="text-2xl text-center text-min-gray font-medium mt-9">
        have you ever feel to hard move from schooll application <br />
        to anoher video conference ,
      </p>
      <div class="flex text-white justify-center">
        <div class="w-80 h-60 bg-regal-green mr-5">
          <img src="../assets/people.png" alt="" />
          <p>Mudah dalam penggunaan</p>
          <p>
            Mudah Dalam Penggunaan ave you ever feel to hard move from schooll
            application to anoher video conference ,
          </p>
        </div>

        <div class="w-80 h-60 bg-regal-green mr-5">
          <img src="../assets/people.png" alt="" />
          <p>Mudah dalam penggunaan</p>
          <p>
            Mudah Dalam Penggunaan ave you ever feel to hard move from schooll
            application to anoher video conference ,
          </p>
        </div>

        <div class="w-80 h-60 bg-regal-green">
          <img src="../assets/people.png" alt="" />
          <p>Mudah dalam penggunaan</p>
          <p>
            Mudah Dalam Penggunaan ave you ever feel to hard move from schooll
            application to anoher video conference ,
          </p>
        </div>
      </div>

      <div class="flex text-white justify-center">
        <div class="w-80 h-60 bg-regal-green mr-5">
          <img src="../assets/people.png" alt="" />
          <p>Mudah dalam penggunaan</p>
          <p>
            Mudah Dalam Penggunaan ave you ever feel to hard move from schooll
            application to anoher video conference ,
          </p>
        </div>

        <div class="w-80 h-60 bg-regal-green mr-5">
          <img src="../assets/people.png" alt="" />
          <p>Mudah dalam penggunaan</p>
          <p>
            Mudah Dalam Penggunaan ave you ever feel to hard move from schooll
            application to anoher video conference ,
          </p>
        </div>
      </div>
    </div>

    <!-- fitur kami  -->
    <div class="grid grid-cols-12 gap-4 mt-36">
      <div></div>
      <div class="col-span-6">
        <p class="text-regal-green font-bold text-lg">FITUR KAMI</p>

        <p class="font-semibold text-5xl mt-5">
          Kemudahan memang pilihan <br />
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
              have you ever feel to hard move from schooll application <br />
              to anoher video conference ,
            </p>
          </div>
          <img src="../assets/button-circle.png" class="w-28 h-28" alt="" />
        </div>

        <div class="flex justify-between bg items-center mt-12">
          <div>
            <p class="text-4xl font-semibold mt-5">Telusuri Jurnal Terkini</p>
            <p class="text-sm font-medium text-min-gray mt-5">
              have you ever feel to hard move from schooll application <br />
              to anoher video conference ,
            </p>
          </div>
          <img
            src="../assets/circle-button-active.png"
            class="w-28 h-28"
            alt=""
          />
        </div>

        <div class="flex justify-between bg items-center mt-12">
          <div>
            <p class="text-4xl font-semibold mt-5">Chat Dengan Teman</p>
            <p class="text-sm font-medium text-min-gray mt-5">
              have you ever feel to hard move from schooll application <br />
              to anoher video conference ,
            </p>
          </div>
          <img src="../assets/button-circle.png" class="w-28 h-28" alt="" />
        </div>
      </div>
      <div></div>
      <div class="col-span-4">
        <img src="../assets/woman.png" class="w-57 h-80" alt="" />
      </div>
    </div>

    <div class="bg-regal-green w-full h-31"></div>

    <div class="mt-32 px-16">
      <p class="text-regal-green font-bold text-lg">CARA PENGGUNAAN</p>
      <p class="font-semibold text-5xl">
        Kemudahan memang pilihan kesepurnaan adalah <br />
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