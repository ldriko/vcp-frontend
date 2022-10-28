<script setup>
import {inject, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import AppIcon from '@/components/AppIcon'
import ConsoleBackButton from '@/components/Console/ConsoleBackButton'
import AppButton from '@/components/AppButton'
import ShareJournalButton from "@/components/Journal/ShareJournalButton";

const axios = inject('$axios')
const axiosBaseURL = axios.defaults.baseURL
const dayjs = inject('$dayjs')
const route = useRoute()
const referenceBaseUrl = process.env.VUE_APP_JOURNAL_REFERENCE_URL

const journalCode = route.params.code
const journal = ref(null)
const userGroups = ref([])
const citeJournalTimeout = ref(null)

const getJournal = async () => {
  const response = await axios.get(`/journals/${journalCode}`).catch(() => null)
  journal.value = response?.data
}

const fetchGroups = async () => {
  const response = await axios.get('/groups').catch(() => null)
  userGroups.value = response?.data ?? []
}

const showPdf = () => window.open(`${axiosBaseURL}/journals/${journalCode}/pdf`)
const downloadPdf = () => window.open(`${axiosBaseURL}/journals/${journalCode}/pdf?is_download=1`)
const copyReference = () => {
  const publishYear = dayjs(journal.value.published_at).year()
  const journalLink = `${referenceBaseUrl}/${journalCode}`

  if (citeJournalTimeout.value) clearTimeout(citeJournalTimeout.value)

  navigator.clipboard.writeText(`${journal.value.author_name} (${publishYear}). ${journal.value.title}. ${journalLink}`)

  citeJournalTimeout.value = setTimeout(() => {
    clearTimeout(citeJournalTimeout.value)
    citeJournalTimeout.value = null
  }, 2500)
}

onMounted(() => {
  getJournal()
  fetchGroups()
})
</script>

<template>
  <div class="flex relative mb-20">
    <app-icon class="flex-grow" name="journal-left"/>
    <app-icon class="flex-grow" name="journal-right"/>
    <div class="absolute left-0 bottom-0 translate-y-1/2 bg-regal-green rounded-xl p-5">
      <app-icon name="document-text" width="50"/>
    </div>
    <console-back-button class="absolute left-0 top-0"/>
  </div>
  <template v-if="journal">
    <div class="sm:mx-2 lg:m-0">
      <div class="flex gap-4 mb-6">
        <div v-for="category in journal.categories"
             :key="category.id"
             class="px-3 py-2 bg-soft-green rounded-lg text-regal-green font-semibold">
          {{ category.name }}
        </div>
      </div>
      <div class="text-2xl font-semibold mb-6">{{ journal.title }}</div>
      <div class="lg:flex sm:block gap-8 mb-10">
        <div class="flex items-center mt-2 gap-2">
          <div class="bg-regal-green rounded-lg p-2 flex">
            <app-icon height="20" name="document" width="20"/>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-500">Tanggal Upload</div>
            <div class="font-semibold">{{ dayjs(journal.created_at).format('DD/MM/YYYY') }}</div>
          </div>
        </div>
        <div class="flex items-center mt-2 gap-2">
          <div class="bg-regal-green rounded-lg p-2 flex">
            <app-icon height="20" name="profile-white" width="20"/>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-500">Penulis Jurnal</div>
            <div class="font-semibold">{{ journal.author_name }}</div>
          </div>
        </div>
        <div class="flex items-center mt-2 gap-2">
          <div class="bg-regal-green rounded-lg p-2 flex">
            <app-icon height="20" name="calendar" width="20"/>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-500">Tahun Penerbitan</div>
            <div class="font-semibold">{{ dayjs(journal.published_at).year() }}</div>
          </div>
        </div>
      </div>
      <div class="text-lg font-semibold">Detail Jurnal:</div>
      <p class="text-gray-500 mb-20">{{ journal.short_desc }}</p>
      <div class="lg:flex lg:gap-4 sm:gap-2 lg:items-center">
        <app-button class="px-5" @click="showPdf">
          <app-icon name="document-text"/>
          Buka PDF
        </app-button>
        <app-button class="px-5" @click="downloadPdf">
          <app-icon name="document-download-white"/>
          Unduh Jurnal
        </app-button>
        <div v-if="!citeJournalTimeout" class="text-regal-green font-bold cursor-pointer text-sm" @click="copyReference">
          Kutip
        </div>
        <div v-else class="text-gray-500 font-semibold cursor-pointer text-sm" @click="copyReference">
          Link referensi tersalin!
        </div>
        <share-journal-button :journal="journal" :groups="userGroups" top/>
      </div>
    </div>
  </template>
</template>