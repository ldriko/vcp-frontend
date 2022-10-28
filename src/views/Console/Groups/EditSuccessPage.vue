<script setup>
import SuccessPage from "@/components/Layouts/SuccessPage";
import AppButton from "@/components/AppButton";
import { useRoute } from "vue-router";
import AppIcon from "@/components/AppIcon";
import { ref } from "vue";

const route = useRoute()
const journalCode = route.params.code
const copied = ref(false)

const copyJournalCode = () => {
  navigator.clipboard.writeText(journalCode)
  copied.value = true
}
</script>

<template>
  <success-page title="Grupmu telah berhasil diperbarui!"
                subtitle="Salin kode grupmu dan berikan kepada temanmu untuk mengundang mereka!"
                redirect-text="Kembali ke Grup Saya"
                @redirect="$router.push({name:'groups'})">
    <div class="flex gap-4 my-8 justify-center">
      <input type="text" class="w-50 border border-solid rounded-xl px-4 font-medium py-3" :value="journalCode" readonly>
      <app-button color="secondary" class="gap-8" @click="copyJournalCode">
        Salin
        <app-icon v-if="copied" name="tick-square-green" class="ml-2"/>
      </app-button>
    </div>
  </success-page>
</template>