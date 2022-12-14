<script setup>
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import ConsoleSubtitle from '@/views/Console/ConsoleSubtitle'
import { Form as VeeForm } from 'vee-validate'
import TextField from '@/components/Form/TextField'
import TextArea from '@/components/Form/TextArea'
import AppButton from '@/components/AppButton'
import ConsoleBackButton from '@/components/Console/ConsoleBackButton'
import JournalCategoriesPicker from '@/components/Journal/JournalCategoriesPicker'
import { inject, onMounted, ref } from 'vue'
import AppIcon from '@/components/AppIcon'
import * as Yup from 'yup'
import { useRoute, useRouter } from 'vue-router'

const axios = inject('$axios')
const dayjs = inject('$dayjs')
const router = useRouter()
const route = useRoute()

const journalCode = route.params.code

const schema = Yup.object().shape({
  title: Yup.string()
      .required('Judul jurnal harus diisi')
      .max(150, 'Judul jurnal tidak bisa lebih dari 150 karakter'),
  author_name: Yup.string()
      .required('Penulis jurnal harus diisi'),
  short_desc: Yup.string()
      .max(250, 'Nama grup tidak bisa lebih dari 250 karakter'),
  publishing_date: Yup.string()
      .required('Tahun penerbitan jurnal harus dipilih')
})

const titleInput = ref(null)
const authorNameInput = ref(null)
const shortDescInput = ref(null)
const publishingDateInput = ref(null)

const fileInput = ref(null)
const file = ref(null)
const categories = ref([])
const isLoading = ref(false)
const termAccepted = ref(false)
const journal = ref(null)

const openFilePicker = () => {
  fileInput.value.dispatchEvent(new MouseEvent('click'))
}

const getJournal = async () => {
  const response = await axios.get(`/journals/${journalCode}`).catch(() => null)

  if (!response) return

  titleInput.value.changeValue(response.data.title)
  authorNameInput.value.changeValue(response.data.author_name)
  shortDescInput.value.changeValue(response.data.short_desc)
  publishingDateInput.value.changeValue(dayjs(response.data.published_at).format('YYYY-MM-DD'))
  categories.value = response.data.categories.map((category) => category.id)
  journal.value = response.data
}

const handleFileChange = () => file.value = fileInput.value.files[0]

const submit = async (values) => {
  if (categories.value.length === 0 || !termAccepted.value) return

  const formData = new FormData()

  for (const key in values) {
    formData.append(key, values[key])
  }

  for (const category of categories.value) {
    formData.append('categories[]', category)
  }

  if (file.value) {
    formData.append('file', file.value)
  }

  formData.append('_method', 'PUT')

  isLoading.value = true

  try {
    await axios.post(`/journals/${journalCode}`, formData)
    await router.push({ name: 'journals-edit-success' })
  } catch (e) {
    isLoading.value = false
  }
}

onMounted(getJournal)
</script>

<template>
  <div class="mx-2">
    <console-back-button/>
  <console-title>Edit Jurnal</console-title>
  <console-subtitle>Ada yang salah dengan jurnalmu?</console-subtitle>
  <vee-form :validation-schema="schema" @submit="submit">
    <text-field ref="titleInput"
                label="Judul Jurnal"
                name="title"
                placeholder="Masukkan judul jurnalmu"/>
    <text-field ref="authorNameInput"
                label="Penulis Jurnal"
                name="author_name"
                placeholder="Masukkan nama penulis jurnal"/>
    <journal-categories-picker v-model="categories" label="Kategori Jurnal"/>
    <text-area ref="shortDescInput"
               label="Secercah Isi Jurnalmu"
               name="short_desc"
               placeholder="Deskripsikan jurnalmu dengan singkat"/>
    <text-field ref="publishingDateInput"
                fit
                label="Tahun Penerbitan Jurnal"
                name="publishing_date"
                placeholder="Masukkan tahun penerbitan jurnalmu"
                type="date"/>
    <label :for="name" class="font-semibold mb-2">Masukkan File Jurnalmu</label>
    <div class="border border-solid rounded-lg p-8 flex justify-center gap-2 mb-4 cursor-pointer transition hover:bg-gray-100"
         @click="openFilePicker">
      <app-icon class="my-auto" name="document-upload"/>
      <div>
        <div v-if="file !== null" class="font-semibold">{{ file.name }}</div>
        <div v-else-if="journal !== null" class="font-semibold">{{ journal.title }}.pdf</div>
        <div v-else class="font-semibold">Upload File Disini</div>
        <div class="text-sm">
          {{
            (journal !== null || file !== null) ? 'Tekan kembali untuk merubah file' : 'File yang diupload harus berupa PDF'
          }}
        </div>
        <input ref="fileInput"
               accept="application/pdf"
               class="absolute opacity-0"
               type="file"
               @change="handleFileChange">
      </div>
    </div>
    <div class="flex gap-4">
      <input v-model="termAccepted"
             class="accent-regal-green w-10 border border-solid border-gray-100 text-sm"
             type="checkbox">
      <div>
        Saya bertanggung jawab penuh atas <span class="text-regal-green font-medium">karya saya pribadi</span>, karena
        karya yang saya upload <span class="text-regal-green font-medium">bukan milik orang lain</span>
      </div>
    </div>
    <div class="flex justify-end">
      <app-button type="submit" class="sm:w-full lg:w-1/5 mt-1">Simpan</app-button>
    </div>
  </vee-form>
  </div>
  
</template>