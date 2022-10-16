<script setup>
import TittleName from "@/components/TittleName.vue";
import TextField from "@/components/Form/TextField";
import { Form as VeeForm } from "vee-validate";
import AppButton from "@/components/AppButton";
import * as Yup from "yup";
import { inject, ref } from "vue";

import router from "@/router";

const axios = inject("$axios");

const schema = Yup.object().shape({
  title: Yup.string().required("judul harus diisi"),
  short_desc: Yup.string().required("penulis harus diisi"),
});

const isLoading = ref(false);

const myFile = ref(null);

const submit = async (values) => {
  // console.log("tes");
  if (isLoading.value) return;
  const formData = new FormData();
  formData.append("title", values.title);
  formData.append("short_desc", values.short_desc);
  formData.append("file", myFile.value.files[0]);
  formData.append("categories[]", 1);
  isLoading.value = true;

  try {
    await axios.post("/journals", FormData);
    await router.push("/myJournal");
  } catch (e) {
    console.log(e);
  }

  isLoading.value = false;
}
</script>

<template>
  <TittleName title="Tambahkan Jurnal Baru" />
  <p>Sebelum kamu Masuk ke Belajar pastikan daftar dahulu ya</p>

  <vee-form :validation-schema="schema" @submit="submit">
    <text-field
      label="Judul Jurnal Kamu"
      name="title"
      placeholder="Masukkan judul Jurnal kamu"
    />

    <text-field
      label="Secercah isi jurnal kamu"
      name="short_desc"
      placeholder="Masukkan judul Jurnal kamu"
    />

    <input type="file" ref="myFile" />

    <app-button
      color="primary"
      type="submit"
      >Simpan</app-button
    >
  </vee-form>
</template>
