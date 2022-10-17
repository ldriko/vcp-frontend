<script setup>
import JournalSection from "@/components/JournalSection.vue";
import ConsoleTitle from "@/views/Console/ConsoleTitle";
</script>

<template>
  <console-title>Temukan Jurnal</console-title>

  <div class="">
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

    <div class="bg-gray-green rounded-xl p-4 mt-5">
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
      <div class="m-2">
        <p class="text-2xl font-semibold">
          Pengaruh Kesehatan dan Ilmu Sosial Dalam Percintaan
        </p>
        <p class="text-sm mt-3.5">
          But land-intensive bioenergy often entails substantial carbon
          emissions from land-use change as well <br />
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
  </div>
</template>
