<script setup>
import { inject, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '@/components/AppIcon'
import ConsoleBackButton from '@/components/Console/ConsoleBackButton'
import AppButton from '@/components/AppButton'

const axios = inject('$axios')
const axiosBaseURL = axios.defaults.baseURL
const dayjs = inject('$dayjs')
const route = useRoute()

const journalCode = route.params.code
const journal = ref(null)

const getJournal = async () => {
  const response = await axios.get(`/journals/${journalCode}`).catch(() => null)
  journal.value = response?.data
}

const showPdf = () => window.open(`${axiosBaseURL}/journals/${journalCode}/pdf`)
const downloadPdf = () => window.open(`${axiosBaseURL}/journals/${journalCode}/pdf?is_download=1`)

onMounted(getJournal)
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
    <div class="flex gap-4 mb-6">
      <div v-for="category in journal.categories"
           :key="category.id"
           class="px-3 py-2 bg-soft-green rounded-lg text-regal-green font-semibold">
        {{ category.name }}
      </div>
    </div>
    <div class="text-2xl font-semibold mb-6">{{ journal.title }}</div>
    <div class="flex gap-8 mb-4">
      <div class="flex items-center gap-2">
        <div class="bg-regal-green rounded-lg p-2 flex">
          <app-icon height="20" name="document" width="20"/>
        </div>
        <div>
          <div class="text-sm font-medium text-gray-500">Tanggal Upload</div>
          <div class="font-semibold">{{ dayjs(journal.created_at).format('DD/MM/YYYY') }}</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="bg-regal-green rounded-lg p-2 flex">
          <app-icon height="20" name="profile" width="20"/>
        </div>
        <div>
          <div class="text-sm font-medium text-gray-500">Penulis Jurnal</div>
          <div class="font-semibold">{{ journal.author_name }}</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="bg-regal-green rounded-lg p-2 flex">
          <app-icon height="20" name="calendar" width="20"/>
        </div>
        <div>
          <div class="text-sm font-medium text-gray-500">Tahun Penerbitan</div>
          <div class="font-semibold">{{ dayjs(journal.published_at).format('YYYY') }}</div>
        </div>
      </div>
    </div>
    <div class="text-lg font-semibold">Detail Jurnal:</div>
    <p class="text-gray-500 mb-8">{{ journal.short_desc }}</p>
    <div class="flex gap-4">
      <app-button class="px-5" @click="showPdf">
        <app-icon name="document-text"/>
        Buka Jurnal
      </app-button>
      <app-button class="px-5" @click="downloadPdf">
        <app-icon name="document-download-white"/>
        Unduh Jurnal
      </app-button>
    </div>
  </template>
</template>