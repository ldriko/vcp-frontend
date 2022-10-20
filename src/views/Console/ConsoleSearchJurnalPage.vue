<script setup>
import { inject, onMounted, reactive, ref } from 'vue'
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import AppIcon from '@/components/AppIcon'
import ConsoleSubtitle from '@/views/Console/ConsoleSubtitle'
import { useRoute, useRouter } from 'vue-router'
import HomeNavbar from '@/components/Home/HomeNavbar'
import { useSessionStore } from '@/stores/session'
import ShareJournalButton from '@/components/Journal/ShareJournalButton'

const axios = inject('$axios')
const axiosBaseURL = axios.defaults.baseURL
const route = useRoute()
const router = useRouter()
const sessionStore = useSessionStore()

const search = ref(route.query.q ?? null)
const searchQuery = ref(route.query.q ?? null)
const journals = ref([])
const categories = ref([])
const isLoading = ref(false)
const filter = reactive({ publishing_years: [], categories: [] })
const publishingYears = ['2022', '2021', '2020', '2019', '2018', '2017']

const fetchCategories = async () => {
  const response = await axios.get('/categories').catch(() => null)
  if (response) categories.value = response.data
}

const searchJournals = async () => {
  if (isLoading.value || !search.value?.length) return

  isLoading.value = true

  const response = await axios.get('/journals/search', {
    params: { q: search.value, ...filter }
  }).catch(() => null)

  searchQuery.value = search.value

  if (response) journals.value = response.data

  isLoading.value = false
}

const clearSearch = () => {
  searchQuery.value = null
  journals.value = []
  search.value = null
}

const showJournal = ({ code }) => {
  if (sessionStore.isLoggedIn) {
    router.push({ name: 'journals-show', params: { code } })
  }
}

const userGroups = ref([])

const fetchGroups = async () => {
  const response = await axios.get('/groups').catch(() => null)
  userGroups.value = response?.data ?? []
}

const downloadJournal = ({ code }) => window.open(`${axiosBaseURL}/journals/${code}/pdf?is_download=1`)

onMounted(() => {
  fetchCategories()
  fetchGroups()
  if (search.value !== null) searchJournals()
})

const type = route.params.type
</script>

<template>
  <home-navbar v-if="type === 'guest'" hide-menu/>
  <div :class="{'lg:px-16 sm:px-4 pb-10': type === 'guest'}">
    <div class="lg:mx-0 sm:mx-4 mt-2">
      <console-title class="mb-2">Temukan Jurnal</console-title>
      <console-subtitle>Cari jurnal yang kamu inginkan dengan mengisi pencarian berikut</console-subtitle>
    </div>
   
    <div class="lg:flex flex-row gap-10 mt-8 mx-4">
      <div class="flex-grow">
        <div class="border border-min-gray rounded-xl flex p-1">
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
          <button class="bg-regal-green lg:px-14 sm:px-2 py-5 rounded-xl text-white" @click="searchJournals">
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
            <div class="flex flex-wrap gap-4">
              <p v-for="category in journal.categories" :key="`${journal.code}_${category.id}`"
                 class="text-regal-green px-4 py-2 text-sm bg-soft-green rounded font-bold">
                {{ category.name }}
              </p>
            </div>
            <div class="my-2 mb-4">
              <p class="text-2xl font-semibold">{{ journal.title }}</p>
              <p class="text-sm mt-1">{{ journal.short_desc }}</p>
            </div>
            <div class="flex gap-4">
              <div class="lg:flex sm:grid">
                <button :class="{'bg-gray-100 text-black': !sessionStore.isLoggedIn, 'bg-regal-green text-white': sessionStore.isLoggedIn}"
                      class="text-sm rounded px-4 m-1 py-2 items-center flex gap-2 active:scale-95 transition"
                      @click="() => showJournal(journal)">
                <app-icon :name="sessionStore.isLoggedIn ? 'document-text' : 'document-text-black'" width="20"/>
                Buka {{ !sessionStore.isLoggedIn ? ' : Masuk terlebih dahulu' : '' }}
              </button>
              <button class="bg-regal-green text-white m-1 text-sm rounded px-4 py-2 items-center flex gap-2 active:scale-95 transition"
                      @click="() => downloadJournal(journal)">
                <app-icon name="document-download-white" width="20"/>
                Unduh
              </button>
              </div>
             
              <share-journal-button :groups="userGroups" :journal="journal" class="ml-auto"/>
            </div>
          </div>
        </template>
        <div v-else class="text-center mt-20">
          <app-icon class="w-1/2" name="journals-search"/>
        </div>
      </div>
      <div class="w-console-sidebar flex-shrink-0 lg:m-0 sm:m-2">
        <p class="font-bold text-xl">Filter Berdasarkan :</p>
        <div class="border-b border-min-gray my-4"></div>
        <p class="font-bold text-xl mb-4">Tahun Penerbitan :</p>
        <ul class="space-y-4 font-medium">
          <li v-for="year in publishingYears" :key="year" class="gap-4 flex items-center">
            <input :id="`publishing_${year}`"
                   v-model="filter.publishing_years"
                   :value="year"
                   class="w-4 h-4 text-regal-green bg-gray-100 rounded border-gray-300"
                   type="checkbox"/>
            <label :for="`publishing_${year}`">{{ year }}</label><br/>
          </li>
        </ul>
        <div class="border-b border-min-gray my-4"></div>
        <p class="font-bold text-xl mb-4">Kategori :</p>
        <ul class="space-y-4 font-medium">
          <li v-for="category in categories" :key="category.id" class="gap-4 flex items-center">
            <input :id="`category_${category.id}`"
                   v-model="filter.categories"
                   :value="category.id"
                   class="w-4 h-4 text-regal-green bg-gray-100 rounded border-gray-300"
                   type="checkbox"/>
            <label :for="`category_${category.id}`">{{ category.name }}</label><br/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
