<script setup>
import ConsoleTitle from "@/views/Console/ConsoleTitle";
import AppButton from "@/components/AppButton";
</script>

<template>
  <console-title>Jurnal Saya</console-title>
  <div class="font-quicksand">
    <div class="flex justify-between">
    <p>Sebelum kamu Masuk ke Belajar pastikan daftar dahulu ya</p>

    <app-button color="primary"><router-link to="create">Buat Jurnal</router-link>  </app-button>
  </div>
  <div class="flex">
    <p class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">
      Semua Jurnal
    </p>
    <p class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">
      Ilmu Sosial
    </p>
    <p class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">
      Teknologi
    </p>
    <p class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">
      Ilmu Komunikasi
    </p>
    <p class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">
      Kesehatan
    </p>
    <p class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">
      IT
    </p>
  </div>
  <div class="flex mt-10">
    <!-- ini kotak  -->
    <div class="bg-light-gray p-5 m-2">
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
      <p class="text-lg font-bold">
        Penggunaan Media Praaksara Dalam <br />
        pengembangan teknologi
      </p>
      <div class="flex mt-3.5">
        <div >
          <p class="text-base font-medium">Tanggal Upload</p>
          <p class="text-base font-semibold">22 November 2022</p>
        </div>
        <div class="pl-2">
          <p class="text-base font-medium">Penulis Buku</p>
          <p class="text-base font-semibold">DRS. Sarasswati ST.MT</p>
        </div>
      </div>
      <p class="bg-almost-gray mt-3.5">
        “But land-intensive bioenergy often entails substantial <br />
        carbon emissions from land-use change as well .
      </p>
    </div>
    <!-- ini kotak  -->
    <div class="bg-light-gray p-5 m-2">
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
      <p class="text-lg font-bold">
        Penggunaan Media Praaksara Dalam <br />
        pengembangan teknologi
      </p>
      <div class="flex mt-3.5">
        <div >
          <p class="text-base font-medium">Tanggal Upload</p>
          <p class="text-base font-semibold">22 November 2022</p>
        </div>
        <div class="pl-2">
          <p class="text-base font-medium">Penulis Buku</p>
          <p class="text-base font-semibold">DRS. Sarasswati ST.MT</p>
        </div>
      </div>
      <p class="bg-almost-gray mt-3.5">
        “But land-intensive bioenergy often entails substantial <br />
        carbon emissions from land-use change as well .
      </p>
    </div>
  </div>
  </div>

</template>
