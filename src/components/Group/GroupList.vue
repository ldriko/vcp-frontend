<script setup>
import GroupListItem from '@/components/Group/GroupListItem'
import { defineProps, inject, onMounted, onUnmounted, ref, watch } from 'vue'
import AppIcon from '@/components/AppIcon'
import AppButton from '@/components/AppButton'

const props = defineProps({
  selected: {
    type: Number,
    default: null
  },
  search: {
    type: String,
    default: null
  }
})

const axios = inject('$axios')

const groups = ref([])
const isLoading = ref(false)
const fetchTimeout = ref(null)
const searchTimeout = ref(null)
const fetched = ref(false)

const fetch = async () => {
  isLoading.value = true

  const response = await axios.get('/groups', {
    params: { q: props.search }
  }).catch(() => null)

  groups.value = response.data ?? []
  isLoading.value = false
  fetchTimeout.value = setTimeout(fetch, 5000)
  fetched.value = true
}

watch(props, () => {
  if (fetchTimeout.value !== null) clearTimeout(fetchTimeout.value)
  if (searchTimeout.value !== null) clearTimeout(searchTimeout.value)
  searchTimeout.value = setTimeout(fetch, 500)
})

onMounted(fetch)
onUnmounted(() => clearTimeout(fetchTimeout.value))
</script>

<template>
  <div>
    <ul v-if="fetched && groups.length > 0" class="space-y-2">
      <group-list-item v-for="group in groups"
                       :key="group.id"
                       :group="group"
                       :is-active="props.selected !== null && group.id === props.selected"
                       @click="$emit('change', group)"/>
    </ul>
    <div v-else-if="fetched && groups.length === 0" class="mt-5 flex flex-col text-center gap-y-4">
      <app-icon class="w-1/2 mx-auto" name="girl"/>
      <div class="text-2xl font-semibold">Sepertinya kamu belum tergabung kedalam sebuah grup</div>
      <div class="flex justify-center gap-4">
        <app-button @click="() => $router.push({ name:'groups-create' })">Buat Grup</app-button>
        <app-button color="secondary" @click="$emit('showJoinGroup')">Masuk Grup</app-button>
      </div>
    </div>
  </div>
</template>
