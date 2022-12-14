<script setup>
import { inject, onMounted, ref } from 'vue'
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import ConsoleSubtitle from '@/views/Console/ConsoleSubtitle'
import AppAvatar from '@/components/AppAvatar'
import AppIcon from '@/components/AppIcon'
import { useRouter } from 'vue-router'

const axios = inject('$axios')
const axiosBaseURL = axios.defaults.baseURL
const router = useRouter()

const groups = ref([])
const journals = ref([])

const fetchGroups = async () => {
  const response = await axios.get('/groups', {
    params: { limit: 5 }
  }).catch(() => null)
  groups.value = response?.data ?? []
}

const fetchJournals = async () => {
  const response = await axios.get('/journals', {
    params: { limit: 5, latest: 1 }
  }).catch(() => null)
  journals.value = response?.data ?? []
}

const downloadJournal = (code) => window.open(`${axiosBaseURL}/journals/${code}/pdf?is_download=1`)
const editJournal = (code) => router.push({ name: 'journals-edit', params: { code } })
const openJournal = (code) => router.push({ name: 'journals-show', params: { code } })

onMounted(() => {
  fetchGroups()
  fetchJournals()
})
</script>

<template>
  <div class="grid lg:grid-cols-6 grid-cols-12">
    <div class="lg:col-span-3 sm:col-span-12 lg:m-0 sm:m-2">
      <console-title>Selamat Datang</console-title>
      <console-subtitle>Kamu bisa mengakses beberapa hal dari halaman ini</console-subtitle>
      <div class="flex justify-between items-center">
        <p class="font-bold text-xl">Grup Anda</p>
        <p class="text-regal-green underline underline-offset-4 font-bold cursor-pointer"
           @click="() => $router.push({ name:'groups' })">
          Selengkapnya
        </p>
      </div>
      <hr class="my-4">
      <ul>
        <li v-for="group in groups"
            :key="group.id"
            class="flex items-center gap-4 hover:bg-gray-100 rounded-xl p-2 transition active:scale-95 cursor-pointer overflow-hidden"
            @click="() => $router.push({ name: 'groups' })">
          <app-avatar v-if="group.picture_path"
                      :alt="group.title"
                      :src="`${axiosBaseURL}/groups/${group.id}/picture`"
                      size="w-16 h-16"/>
          <app-avatar v-else size="w-16 h-16"/>
          <div class="flex-grow">
            <p class="font-bold">{{ group.title }}</p>
            <p class="font-normal text-sm mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {{ group.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="lg:col-span-3 sm:col-span-12 lg:col-start-5 lg:m-0 sm:m-2 mt-20">
      <!-- <div class="bg-regal-green text-white rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg shadow-xl shadow-soft-green overflow-hidden">
        <div class="p-6">
          <p class="bg-almost-green w-max p-1 rounded-md">Ilmu sosial</p>
          <p class="mt-4">Oleh : Imam Santoso</p>
          <p class="mt-4 text-2xl font-bold">Pengaruh Bahasa Dalam Media Percakapan</p>
          <p class="text-sm">Dalam Penggunaan Bahasa kita dapat menggunakanya sebagai hal berikut dalam</p>
        </div>
        <div class="bg-almost-green mt-12">
          <button class="bg-almost-green px-2 py-4 w-full font-semibold active:scale-95 transition">
            Download
          </button>
        </div>
      </div> -->
    </div>
  </div>
  <div class="bg-gray-green py-7 px-7 rounded-xl mt-20">
    <div class="flex justify-between align-items mb-3">
      <p class="text-regal-green text-xl font-bold">Jurnal Anda</p>
      <p class="text-regal-green underline underline-offset-4 font-bold cursor-pointer"
         @click="() => $router.push({ name:'journals-manage' })">
        Selengkapnya
      </p>
    </div>
    <ul class="space-y-4">
      <li v-for="journal in journals" :key="journal.id" class="bg-white rounded-xl w-full p-4 lg:flex sm:block">
        <div class="flex-grow">
          <div class="flex gap-4 mb-4 flex-wrap">
            <div v-for="category in journal.categories"
                 :key="category.id"
                 class="text-regal-green px-5 py-2 bg-gray-green rounded font-bold">{{ category.name }}
            </div>
          </div>
          <div>
            <p class="lg:text-2xl sm:text-xl font-semibold mb-2">{{ journal.title }}</p>
            <p class="text-sm">{{ journal.short_desc }}</p>
          </div>
        </div>
        <div class="flex-shrink-0 my-auto">
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
      </li>
    </ul>
  </div>
</template>