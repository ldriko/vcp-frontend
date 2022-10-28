<script setup>
import { defineProps, inject, ref } from 'vue'
import AppButton from "@/components/AppButton";
import AppIcon from "@/components/AppIcon";

const props = defineProps({
  groups: {
    type: Array,
    default: null
  },
  journal: {
    type: Object,
    default: null
  },
  top: {
    type: Boolean,
    default: false
  }
})

const axios = inject('$axios')
const baseURL = process.env.VUE_APP_JOURNAL_REFERENCE_URL

const isOpen = ref(false)
const groups = ref(props.groups ?? [])
const selectedGroup = ref(null)
const text = ref(null)
const isLoading = ref(false)
const journalLinkCopied = ref(false)

const reset = () => {
  text.value = null
  selectedGroup.value = null
}

const setIsOpen = (value) => {
  reset()
  isOpen.value = value
}

const selectGroup = (group) => {
  text.value = null
  selectedGroup.value = group
}

const copyTimeout = ref(null)
const copyJournalURL = () => {
  if (copyTimeout.value) clearTimeout(copyTimeout.value)

  journalLinkCopied.value = true
  navigator.clipboard.writeText(`${ baseURL }/${ props.journal.code }`)

  copyTimeout.value = setTimeout(() => journalLinkCopied.value = false, 1500)
}

const send = async () => {
  if (isLoading.value || !selectedGroup.value) return

  isLoading.value = true

  await axios.post(`/groups/${ selectedGroup.value.id }/chat`, {
    journal_code: props.journal.code,
    text: text.value
  })

  isLoading.value = false
  isOpen.value = false
}
</script>

<template>
  <div class="relative">
    <button class="text-regal-green text-sm rounded px-2 items-center flex gap-2 transition font-bold"
            @click="() => setIsOpen(true)">
      Bagikan
    </button>
    <div v-if="isOpen"
         :class="{'-top-10': !props.top, '-bottom-10': props.top}"
         class="absolute right-0 w-60 bg-white rounded-lg font-medium shadow border border-solid text-black text-left text-sm">
      <div class="py-3 px-4 border-b border-solid relative">
        <div class="font-bold">{{ selectedGroup ? 'Bagikan ke' : 'Pilih group' }}</div>
        <div class="">{{ selectedGroup ? selectedGroup.title : 'yang ingin dibagikan' }}</div>
        <span class="absolute top-0 right-0 text-2xl my-2 mx-3 cursor-pointer"
              @click="() => setIsOpen(false)">&times;</span>
      </div>
      <div :class="{'h-52': !selectedGroup}" class="py-2 px-2 overflow-auto flex flex-col">
        <template v-if="selectedGroup">
          <textarea v-model="text"
                    class="rounded p-2 w-full rounded-lg border border-solid mb-2"
                    placeholder="Pesan yang ingin dicantumkan"
                    rows="5"
          ></textarea>
          <button :class="{'bg-regal-green': !isLoading, 'bg-gray-300': isLoading}"
                  :disabled="isLoading"
                  class="bg-regal-green rounded-lg py-2 w-full font-bold text-white"
                  @click="send">
            Kirim
          </button>
        </template>
        <template v-else>
          <ul class="flex-grow">
            <template v-for="group in props.groups" :key="group.id">
              <li class="hover:bg-gray-100 transition p-2 rounded cursor-pointer"
                  @click="() => selectGroup(group)">
                {{ group.title }}
              </li>
            </template>
          </ul>
          <div class="pt-2 border-t border-solid border-gray-200">
            <app-button :color="journalLinkCopied ? 'white' : 'primary'" class="w-full" @click="copyJournalURL">
              <template v-if="journalLinkCopied">
                <app-icon name="tick-square"/>
                Tersalin!
              </template>
              <template v-else>Salin Link Saja</template>
            </app-button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>