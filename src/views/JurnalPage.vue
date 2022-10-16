<script setup>
  import JournalSection from '@/components/JournalSection.vue'
  import HomeFooter from '@/components/Home/HomeFooter.vue'
</script>
<template lang="">
  <div class="grid grid-cols-12 font-quicksand">
    <div class="col-span-6 col-start-2">
      <p class="font-semibold text-4xl mt-20">Temukan Jurnal Kamu Disini</p>

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

      <JournalSection/>
      <JournalSection/>
      <JournalSection/>
      <JournalSection/>

    </div>
    <div></div>
    <div class="col-span-3 mt-20">
      <p>Filter Berdasarkan :</p>

      <div class="border-b border-min-gray my-6"></div>

      <div class="mt-8"></div>
      <div class="mt-8">
        <input type="checkbox" id="2022" name="2022" value="Bike" />
        <label for="2022"> 2022</label><br />
      </div>
      <div class="mt-8">
        <input type="checkbox" id="2021" name="2021" value="Bike" />
        <label for="2021"> 2021</label><br />
      </div>
      <div class="mt-8">
        <input type="checkbox" id="2020" name="2020" value="Bike" />
        <label for="2020"> 2020</label><br />
      </div>
      <div class="mt-8">
        <input type="checkbox" id="2019" name="2019" value="Bike" />
        <label for="2019"> 2019</label><br />
      </div>
      <div class="mt-8">
        <input type="checkbox" id="2018" name="2018" value="Bike" />
        <label for="2018"> 2018</label><br />
      </div>
      <div class="mt-8">
        <input type="checkbox" id="2017" name="2017" value="Bike" />
        <label for="2017"> 2017</label><br />
      </div>

      <div class="border-b border-min-gray my-6"></div>
    </div>
    <div></div>
  </div>
  <div class="mt-4">
  <HomeFooter/>
  </div>
</template>

<style lang=""></style>
