<script setup>
import { inject, ref } from 'vue'
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import AppIcon from '@/components/AppIcon'
import ConsoleSubtitle from '@/views/Console/ConsoleSubtitle'

const axios = inject('$axios')
const axiosBaseURL = axios.defaults.baseURL

const search = ref(null)
const searchQuery = ref(null)
const journals = ref([])
const isLoading = ref(false)

const searchJournals = async () => {
  isLoading.value = true

  const response = await axios.get('/journals/search', {
    params: {
      q: search.value
    }
  }).catch(() => null)

  searchQuery.value = search.value

  if (response) journals.value = response.data

  console.log(response.data)

  isLoading.value = false
}

const clearSearch = () => {
  searchQuery.value = null
  journals.value = []
  search.value = null
}

const showJournal = ({ code }) => {
  window.open(`${axiosBaseURL}/journals/${code}/pdf`)
}

const downloadJournal = ({ code }) => {
  window.open(`${axiosBaseURL}/journals/${code}/pdf?is_download=1`)
}
</script>

<template>
  <console-title>Temukan Jurnal</console-title>
  <console-subtitle>Cari jurnal yang kamu inginkan dengan mengisi pencarian berikut</console-subtitle>

  <div>
    <div class="border border-min-gray mt-9 rounded-xl flex p-1">
      <div class="flex-grow relative">
        <input
            v-model="search"
            class="w-full min-h-full px-5 outline-none"
            placeholder="Masukkan judul jurnal"
            type="text"
            @keydown.enter="searchJournals"
        />
        <app-icon class="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  name="cross"
                  width="15"
                  @click="clearSearch"/>
      </div>
      <button class="bg-regal-green px-14 py-5 rounded-xl text-white" @click="searchJournals">
        Temukan
      </button>
    </div>

    <p v-if="searchQuery !== null" class="my-6 text-2xl">
      Menemukan Hasil Dari <span class="font-bold">“{{ searchQuery }}”</span>
    </p>

    <template v-if="journals.length > 0">
      <div v-for="journal in journals"
           :key="journal.code"
           class="hover:bg-gray-green transition border border-solid hover:border-regal-green rounded-xl p-4 mt-5">
        <div class="flex">
          <p v-for="category in journal.categories" :key="`${journal.code}_${category.id}`"
             class="text-regal-green px-5 py-2 bg-soft-green rounded font-bold m-2">
            {{ category.name }}
          </p>
        </div>
        <div class="m-2">
          <p class="text-2xl font-semibold">{{ journal.title }}</p>
          <p class="text-sm mt-3.5">{{ journal.short_desc }}</p>
        </div>
        <div class="flex gap-4">
          <button class="bg-regal-green text-white text-sm rounded px-6 py-3 items-center flex gap-2 active:scale-95 transition"
                  @click="() => showJournal(journal)">
            <app-icon name="document-text" width="20"/>
            Buka
          </button>
          <button class="bg-regal-green text-white text-sm rounded px-6 py-3 items-center flex gap-2 active:scale-95 transition"
                  @click="() => downloadJournal(journal)">
            <app-icon name="document-download-white" width="20"/>
            Unduh
          </button>
        </div>
      </div>
    </template>
    <div v-else class="text-center mt-20">
      <app-icon class="w-1/2" name="journals-search"/>
    </div>
  </div>
</template>
