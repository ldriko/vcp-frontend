<script setup>
import AppButton from '@/components/AppButton'
import AppIcon from '@/components/AppIcon'</script>

<template>
  <app-button class="mb-5 flex justify-center gap-2 items-center"
              color="white"
              fit
              @click="() => $router.push({name:'groups'})">
    <app-icon name="arrow-left" width="15"/>
    Kembali
  </app-button>
</template>
