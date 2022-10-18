<script setup>
import ConsoleTitle from "@/views/Console/ConsoleTitle";
</script>

<template>
  <div class="grid grid-cols-6">
    <div class="col-span-3">
      <console-title>Selamat Datang</console-title>
      <p>Sebelum kamu Masuk ke Belajar pastikan daftar dahulu ya</p>
      <div class="flex justify-between">
        <p class="font-bold text-2xl mt-2">Grup Anda</p>
        <p class="text-regal-green underline underline-offset-4 font-bold">
          Selengkapnya
        </p>
      </div>
      <div class="flex items-center mt-2">
        <img src="./../../assets/ig.png" class="gambar" alt="" />
        <div class="ml-2">
          <p class="text-xl font-bold">Kelas Pengantar Sistem Informasi</p>
          <p class="font-normal text-lg mt-1">
            ini adalah deksripsi dari group
          </p>
        </div>
      </div>

      <div class="flex items-center mt-2">
        <img src="./../../assets/ig.png" class="gambar" alt="" />
        <div class="ml-2">
          <p class="text-xl font-bold">Kelas Pengetahuan Bisnis</p>
          <p class="font-normal text-lg mt-1">
            ini adalah deksripsi dari group
          </p>
        </div>
      </div>

      <div class="flex items-center mt-2">
        <img src="./../../assets/ig.png" class="gambar" alt="" />
        <div class="ml-2">
          <p class="text-xl font-bold">Kelas Matematika Komputasi</p>
          <p class="font-normal text-lg mt-1">
            ini adalah deksripsi dari group
          </p>
        </div>
      </div>

      <div class="flex items-center mt-2">
        <img src="./../../assets/ig.png" class="gambar" alt="" />
        <div class="ml-2">
          <p class="text-xl font-bold">Kelas Bahasa Inggris</p>
          <p class="font-normal text-lg mt-1">
            ini adalah deksripsi dari group
          </p>
        </div>
      </div>
    </div>
    <div class="col-span-3 col-start-4 mt-10 ml-12">
      <div
        class="bg-regal-green w-5/6 text-white p-4 rounded-tl-3xl rounded-br-3xl"
      >
        <p class="bg-almost-green w-max p-1 rounded-md">Ilmu sosial</p>
        <p class="mt-4">Oleh : Imam Santoso</p>
        <p class="mt-4 text-2xl font-bold">
          Pengaruh Bahasa Dalam Media Percakapan
        </p>
        <p class="text-sm">
          Dalam Penggunaan Bahasa kita dapat menggunakanya sebgai.hal berikut
          dalam
        </p>
        <button class="mt-12 bg-almost-green px-2 py-1 w-full rounded-md">
          Download
        </button>
      </div>
    </div>
  </div>

  <div class="bg-gray-green  p-2 rounded-xl mt-3">
    <div class="flex justify-between">
      <p class="text-regal-green text-xl font-bold mb-1">Jurnal Anda</p>
      <p class="text-regal-green underline underline-offset-4 font-bold">
        Selengkapnya
      </p>
    </div>
    <!-- batas  -->
    <div class="bg-white rounded-xl w-full">
      <div class="flex">
        <p
          class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2"
        >
          Kesehatan
        </p>
        <p
          class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2"
        >
          Ilmu Sosial
        </p>
      </div>
      <div>
        <div class="">
          <p class="text-2xl font-semibold m-2">
            Pengaruh Kesehatan dan Ilmu Sosial Dalam Percintaan
          </p>
          <p class="text-sm mt-3.5 m-2 py-3">
            But land-intensive bioenergy often entails substantial carbon
            emissions from land-use change as well Managing an effective
            trajectory for land-intensive bioenergy will require an unusual mix
            of policies
          </p>
        </div>
        <!-- disini icon  -->
      </div>
    </div>
    <!-- batas -->
  </div>
</template>

<style>
.gambar {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
</style>
