<script setup>
import { inject, ref } from 'vue'
import ConsoleTitle from '@/views/Console/ConsoleTitle'
import ConsoleSubtitle from '@/views/Console/ConsoleSubtitle'
import GroupList from '@/components/Group/GroupList'
import GroupsAction from '@/components/Group/GroupsAction'
import GroupChat from '@/components/Group/GroupChat'
import AppButton from '@/components/AppButton'

const axios = inject('$axios')

const searchValue = ref(null)
const groupCodeInputShowed = ref(false)
const groupCodeInput = ref(null)
const groupCode = ref(null)
const selectedGroup = ref(null)
const isLoading = ref(null)

const selectGroup = (group) => {
  selectedGroup.value = group
}

const showJoinGroup = () => {
  groupCodeInputShowed.value = true
  setTimeout(() => groupCodeInput.value.focus(), 250)
}

const joinGroup = async () => {
  if (isLoading.value) return

  isLoading.value = true

  await axios.post('/groups/join', { code: groupCode.value })
      .then(() => groupCodeInputShowed.value = false)
      .catch(() => null)

  isLoading.value = false
}
</script>

<template>
  <div class="lg:flex sm:block px-4 mt-6 min-h-full max-h-full min-w-full gap-4">
    <div class="lg:w-1/2 sm:w-full flex flex-col">
      <div class="flex items-center">
        <div class="flex-grow">
          <console-title>Grup Saya</console-title>
          <console-subtitle>Semua grup yang anda sudah tergabung</console-subtitle>
        </div>
        <groups-action @show-group="showJoinGroup"/>
      </div>
      <div v-if="groupCodeInputShowed" class=" gap-3 mb-3">
        <input ref="groupCodeInput"
               v-model="groupCode"
               class="border-solid border 12 rounded-lg py-2 px-3 flex-grow"
               placeholder="Masukkan Kode Grup"
               type="text">
        <app-button :is-disabled="isLoading" :is-loading="isLoading" @click="joinGroup">Masuk</app-button>
      </div>
      <input v-model="searchValue"
             class="border-solid border 12 rounded-lg py-2 px-3 w-full mb-3"
             placeholder="Temukan Nama Grup"
             type="text">
      <group-list v-model:search="searchValue"
                  :selected="selectedGroup?.id"
                  class="flex-grow overflow-y-auto"
                  @change="(group) => selectGroup(group)"
                  @show-join-group="showJoinGroup"/>
    </div>
    <group-chat :group="selectedGroup" class="lg:w-1/2 sm:w-full" @close="() => selectGroup(null)"/>
  </div>
</template>