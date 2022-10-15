<script setup>
import ConsoleSidebar from '@/components/Console/ConsoleSidebar'
</script>

<template>
  <div class="min-h-screen flex">
    <console-sidebar/>
    <div class="flex-grow p-10">
      <slot/>
    </div>
  </div>
</template>
