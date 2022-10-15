<script setup>
import { defineProps } from 'vue'
import AppIcon from '@/components/AppIcon'
import { useRouter } from 'vue-router'

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

const go = () => {
  if (props.to) {
    router.push({ name: props.to })
  }
}
</script>

<template>
  <li class="flex gap-5 items-center p-3 rounded-xl transition cursor-pointer hover:bg-black hover:bg-opacity-10"
      @click="go">
    <app-icon :name="props.icon"/>
    <slot/>
  </li>
</template>