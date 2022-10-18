<script setup>
import JournalSection from "@/components/JournalSection.vue";
import ConsoleTitle from "@/views/Console/ConsoleTitle";
</script>

<template>
  <console-title>Temukan Jurnal</console-title>

  <div class="grid grid-cols-2">
    <div>
      <!-- batas -->
      <div class="border border-min-gray mt-9 rounded-xl flex p-1">
        <input
          type="text"
          placeholder="Temukan Jurnal Terbaru disini "
          class="w-full"
        />
        <button class="bg-regal-green px-14 py-5 rounded-xl text-white">
          Temukan
        </button>
      </div>

      <p class="my-6 text-2xl">
      Menemukan Hasil Dari <span class="font-bold">“Jurnal Kesehatan”</span>
    </p>

    <div class="bg-gray-green rounded-xl mt-5 w-30">
      <div class="flex">
        <p class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">Kesehatan </p>
        <p class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">Ilmu Sosial </p>
      </div>
      <div class="">
        <p class="text-2xl font-semibold m-2">
          Pengaruh Kesehatan dan Ilmu Sosial Dalam Percintaan
        </p>
        <p class="text-sm mt-3.5 m-2">
          But land-intensive bioenergy often entails substantial carbon
          emissions from land-use change as well 
          Managing an effective trajectory for land-intensive bioenergy will
          require an unusual mix of policies
        </p>
      </div>

      <div>
        <button class="bg-regal-green text-white m-2 rounded px-5 py-3">
          view jurnal
        </button>
        <button class="bg-regal-green text-white m-2 rounded px-5 py-3">
          Download
        </button>
      </div>
    </div>

      <!-- batas -->
    </div>
    <div class="pl-12">

      <p class="font-bold text-xl">Filter Berdasarkan :</p>

      <div class="border-b border-min-gray p-2"></div>

      <div class="mt-2"></div>
      <p class="font-bold text-xl">Tahun Penerbitan :</p>
      <div class="mt-2">
        <input type="checkbox" id="2022" name="2022" value="Bike" />
        <label for="2022"> 2022</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="2021" name="2021" value="Bike" />
        <label for="2021"> 2021</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="2020" name="2020" value="Bike" />
        <label for="2020"> 2020</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="2019" name="2019" value="Bike" />
        <label for="2019"> 2019</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="2018" name="2018" value="Bike" />
        <label for="2018"> 2018</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="2017" name="2017" value="Bike" />
        <label for="2017"> 2017</label><br />
      </div>

      <div class="border-b border-min-gray mt-4"></div>
      <p class="font-bold text-xl">Kategori :</p>
      <div class="mt-2">
        <input type="checkbox" id="Pendidikan" name="Pendidikan" value="Bike" />
        <label for="Pendidikan"> Pendidikan</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="Hukum dan Keamanan" name="Hukum dan Keamanan" value="Bike" />
        <label for="Hukum dan Keamanan"> Hukum dan Keamanan</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="Ekonomi" name="Ekonomi" value="Bike" />
        <label for="Ekonomi"> Ekonomi</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="Agama " name="Agama " value="Bike" />
        <label for="Agama "> Agama </label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="Sejarah dan Ilmu Sosial" name="Sejarah dan Ilmu Sosial" value="Bike" />
        <label for="Sejarah dan Ilmu Sosial"> Sejarah dan Ilmu Sosial</label><br />
      </div>
      <div class="mt-2">
        <input type="checkbox" id="Kesehatan" name="Kesehatan" value="Bike" />
        <label for="Kesehatan"> Kesehatan</label><br />
      </div>
    </div>

  </div>
</template>
