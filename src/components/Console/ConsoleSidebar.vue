<script setup>
import AppLogo from '@/components/AppLogo'
import ConsoleSidebarMenu from '@/components/Console/ConsoleSidebarMenu'
import ConsoleSidebarMenuItem from '@/components/Console/ConsoleSidebarMenuItem'
</script>

<template>
  <nav class="w-console-sidebar bg-regal-green text-white font-semibold px-3 py-8">
    <app-logo class="mb-10 mx-2" white/>
    <console-sidebar-menu title="Menu">
      <console-sidebar-menu-item icon="home">Beranda</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="document-copy">Temukan Jurnal</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="document-text">Jurnal Saya</console-sidebar-menu-item>
      <console-sidebar-menu-item icon="people">Grup Saya</console-sidebar-menu-item>
    </console-sidebar-menu>
  </nav>
</template>
