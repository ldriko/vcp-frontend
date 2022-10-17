<script setup>
import ConsoleSidebar from '@/components/Console/ConsoleSidebar'</script>

<template>
  <div class="min-h-screen flex">
    <console-sidebar/>
    <div class="flex-grow min-h-screen max-h-screen p-10 overflow-auto">
      <slot/>
    </div>
  </div>
</template>
