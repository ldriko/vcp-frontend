<script setup>
import { defineProps } from 'vue'
import AppIcon from '@/components/AppIcon'

const props = defineProps({
  white: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="d-flex font-bold cursor-pointer"
       :class="{'text-white': props.white}"
       @click="$router.push({name:'home'})">
    <app-icon :name="props.white ? 'award-white' : 'award'" width="40" height="40"/>
    Jourid
  </div>
</template>