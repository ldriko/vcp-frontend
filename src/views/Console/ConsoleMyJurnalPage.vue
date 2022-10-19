<script setup>
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import AppButton from '@/components/AppButton'
import ConsoleSubtitle from '@/views/Console/ConsoleSubtitle'
import { inject, onMounted, ref, watch } from 'vue'
import AppIcon from '@/components/AppIcon'
import { useRouter } from 'vue-router'

const axios = inject('$axios')
const axiosBaseURL = axios.defaults.baseURL
const dayjs = inject('$dayjs')
const router = useRouter()

const limit = 6

const selectedCategories = ref([])
const categories = ref([])
const page = ref(1)
const count = ref(0)
const journals = ref([])

const selectCategory = (id) => {
  const index = selectedCategories.value.indexOf(id)

  if (index > -1) selectedCategories.value.splice(index, 1)
  else selectedCategories.value.push(id)
}

const setPage = (value) => {
  const maxPage = Math.ceil(count.value / limit)
  if (page.value + value < 1 || page.value + value > maxPage) return
  page.value += value
}

const fetchCategories = async () => {
  const response = await axios.get('/categories').catch(() => null)
  categories.value = response?.data ?? []
}

const fetchJournals = async () => {
  const response = await axios.get('/journals', {
    params: {
      limit,
      page: page.value,
      latest: 1,
      with_count: 1,
      categories: selectedCategories.value
    }
  }).catch(() => null)
  journals.value = response?.data.result ?? []
  count.value = response?.data.count ?? 0
}

const downloadJournal = (code) => window.open(`${axiosBaseURL}/journals/${code}/pdf?is_download=1`)
const editJournal = (code) => router.push({ name: 'journals-edit', params: { code } })
const openJournal = (code) => router.push({ name: 'journals-show', params: { code } })

watch(page, fetchJournals)
watch(selectedCategories, fetchJournals, { deep: true })

onMounted(() => {
  fetchCategories()
  fetchJournals()
})
</script>

<template>
  <console-title>Jurnal Saya</console-title>
  <console-subtitle>List jurnal yang telah kamu buat dan sebarkan</console-subtitle>
  <div class="flex gap-4">
    <div class="flex-grow flex overflow-x-auto gap-2 pb-2">
      <div v-for="category in categories"
           :key="category.id"
           :class="{
             'text-regal-green bg-soft-green': selectedCategories.indexOf(category.id) > -1,
             'text-gray-500 bg-gray-100': selectedCategories.indexOf(category.id) === -1,
           }"
           class=" px-5 py-2 rounded font-bold w-fit whitespace-nowrap cursor-pointer active:scale-95"
           @click="() => selectCategory(category.id)">
        {{ category.name }}
      </div>
    </div>
    <app-button class="flex-shrink-0" color="primary" @click="() => $router.push({ name: 'journals-create' })">
      Buat Jurnal
    </app-button>
  </div>
  <div class="flex mt-10 flex-wrap">
    <div v-for="journal in journals" :key="journal.code" class="w-full lg:w-1/2 xl:w-1/3 p-5">
      <div class="bg-light-gray rounded-lg p-5">
        <div class="flex gap-2 flex-wrap mb-2">
          <div v-for="category in journal.categories"
               :key="category.id"
               class="text-regal-green px-5 py-2 bg-soft-green rounded font-semibold whitespace-nowrap">
            {{ category.name }}
          </div>
        </div>
        <p class="text-lg font-bold">{{ journal.title }}</p>
        <div class="flex mt-3.5">
          <div>
            <p class="text-sm text-gray-500 font-medium">Tanggal Upload</p>
            <p class="text-base font-semibold">{{ dayjs(journal.created_at).format('DD/MM/YYYY') }}</p>
          </div>
          <div class="pl-2">
            <p class="text-sm text-gray-500 font-medium">Penulis Buku</p>
            <p class="text-base font-semibold">{{ journal.author_name }}</p>
          </div>
        </div>
        <div class="bg-almost-gray mt-3.5 rounded-lg px-3 py-2 text-sm">
          {{ journal.short_desc }}
        </div>
        <div class="flex gap-2 mt-4 justify-end">
          <button class="border border-solid rounded-lg p-2 mx-1 hover:bg-gray-green transition active:scale-95"
                  @click="() => downloadJournal(journal.code)">
            <app-icon class="h-auto" name="document-download-green"/>
          </button>
          <button class="border border-solid rounded-lg p-2 mx-1 hover:bg-gray-green transition active:scale-95"
                  @click="() => editJournal(journal.code)">
            <app-icon class="h-auto" name="edit"/>
          </button>
          <button class="border border-solid rounded-lg p-2 mx-1 hover:bg-gray-green transition active:scale-95"
                  @click="() => openJournal(journal.code)">
            <app-icon class="h-auto" name="eye-green"/>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-4 justify-center items-center mt-4">
    <app-button @click="() => setPage(-1)">Sebelumnya</app-button>
    <div class="font-semibold">{{ page }} / {{ Math.ceil(count / limit) }}</div>
    <app-button @click="() => setPage(1)">Sesudahnya</app-button>
  </div>
</template>
