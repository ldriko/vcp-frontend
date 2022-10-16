<script setup>
import { defineProps, ref, watch } from 'vue'
import AppIcon from '@/components/AppIcon'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  to: {
    type: String,
    default: null
  }
})

const router = useRouter()
const route = useRoute()
const isActive = ref(route.name === props.to)

const go = () => {
  if (props.to) {
    router.push({ name: props.to })
  }
}

watch(route, () => {
  isActive.value = route.name === props.to
})
</script>

<template>
  <li :class="{'bg-black bg-opacity-10 shadow': isActive}"
      class="flex gap-5 items-center py-4 px-3 rounded-xl transition cursor-pointer hover:bg-black hover:bg-opacity-10"
      @click="go">
    <app-icon :name="props.icon"/>
    <slot/>
  </li>
</template>