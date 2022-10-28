<script setup>
import ConsoleTitle from "@/views/Console/ConsoleTitle";
import { useSessionStore } from "@/stores/session";
import { inject, onMounted, ref } from "vue";
import AppIcon from "@/components/AppIcon";
import AppButton from "@/components/AppButton";
import { useRouter } from "vue-router";

const session = useSessionStore()
const router = useRouter()
const axios = inject('$axios')
const dayjs = inject('$dayjs')
const baseUrl = axios.defaults.baseURL
const journals = ref([])
const journalsCount = ref(null)
const page = ref(1)

const fetchJournals = async () => {
  const response = await axios.get('/journals', {
    params: {
      limit: 6,
      page: page.value,
      latest: 1,
      with_count: 1
    }
  }).catch(() => null)

  journals.value = response?.data.result ?? []
  journalsCount.value = response?.data.count ?? 0
}

const editProfile = () => router.push({ name: 'profile-edit' })

onMounted(fetchJournals)
</script>

<template>
  <console-title>Profil</console-title>
  <hr class="my-8">
  <div class="flex gap-4 mb-20">
    <img v-if="session.user.picture_path" :src="`${baseUrl}/user/picture`" :alt="session.user.name"
         class="w-40 h-40 object-cover border border-solid border-gray-100 rounded-full">
    <div v-else class="w-40 h-40 bg-gray-200 object-cover rounded-full flex justify-center items-center">
      <app-icon name="profile" width="50"/>
    </div>
    <div class="p-5 font-medium">
      <div class="text-3xl font-semibold mb-2">{{ session.user.name }}</div>
      <div class="text-gray-500 flex items-center gap-2 mb-4">
        <app-icon name="document-text-black"/>
        {{ journalsCount ? `Telah mempublish ${ journalsCount } jurnal` : 'Belum mempublish sebuah jurnal' }}
      </div>
      <app-button color="secondary" @click="editProfile">Edit Profil</app-button>
    </div>
  </div>
  <div class="text-2xl font-bold mb-4">Jurnal Saya</div>
  <div class="flex flex-wrap gap-5">
    <div v-for="journal in journals" :key="journal.code" class="w-full lg:w-1/2 xl:w-1/3">
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
        <!--          <div class="flex gap-2 mt-4 justify-end">-->
        <!--            <button class="border border-solid rounded-lg p-2 mx-1 hover:bg-gray-green transition active:scale-95"-->
        <!--                    @click="() => downloadJournal(journal.code)">-->
        <!--              <app-icon class="h-auto" name="document-download-green"/>-->
        <!--            </button>-->
        <!--            <button class="border border-solid rounded-lg p-2 mx-1 hover:bg-gray-green transition active:scale-95"-->
        <!--                    @click="() => editJournal(journal.code)">-->
        <!--              <app-icon class="h-auto" name="edit"/>-->
        <!--            </button>-->
        <!--            <button class="border border-solid rounded-lg p-2 mx-1 hover:bg-gray-green transition active:scale-95"-->
        <!--                    @click="() => openJournal(journal.code)">-->
        <!--              <app-icon class="h-auto" name="eye-green"/>-->
        <!--            </button>-->
        <!--          </div>-->
      </div>
    </div>
  </div>
</template>
