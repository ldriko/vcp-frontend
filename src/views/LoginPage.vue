<script setup>
import { Form as VeeForm } from "vee-validate";
import AppLogo from "@/components/AppLogo";
import * as Yup from "yup";
import TittleName from "@/components/TittleName.vue";
import TextField from "@/components/Form/TextField";
import AppButton from "@/components/AppButton";
import { inject, ref } from "vue";
import { useSessionStore } from "@/stores/session";
import router from "@/router";

const axios = inject("$axios");
const sessionStore = useSessionStore();

const schema = Yup.object().shape({
  email: Yup.string().required("Alamat email harus diisi"),
  password: Yup.string().required("Password harus diisi"),
});

const isLoading = ref(false);

const gotoRegister = () => router.push({ name: 'register' })

const submit = async (values) => {
  if (isLoading.value) return;

  isLoading.value = true;

  await axios.get("/../sanctum/csrf-cookie");

  try {
    const { data } = await axios.post("/login", values);

    sessionStore.setUser(data);
    sessionStore.setIsLoggedIn(true);

    await router.push({ name: 'console-dashboard' })
  } catch (e) {
    console.log(e);
  }

  isLoading.value = false;
};
</script>

<template>
  <div class="flex p-5">
    <div class="bg-regal-green h-max pb-10 px-5 w-2/5 rounded-md">
      <div class="p-4">
        <p class="text-white font-bold text-3xl leading-10">
        Ayo Mulai Permudah <br />
        Pekerjan anda dengan <br />
        kami disini.
      </p>

      <p class="text-base text-white">
        Sebelum kamu Masuk ke Belajar pastikan daftar dahulu ya Sebelum kamu <br>
        Masuk ke Belajar pastikan <br>
      </p>
      </div>
      
      <img src="../assets/login-new.png" class="mt-5" alt="" />
    </div>
    <div class="font-quicksand font-medium w-8/12 ml-10 py-3">
      <tittle-name title="Selamat Datang" />
      <div class="mb-5">Masukkan detil akunmu terlebih dahulu</div>
      <vee-form :validation-schema="schema" @submit="submit">
        <text-field
          label="Alamat email"
          name="email"
          placeholder="Masukkan alamat emailmu"
        />
        <text-field
          label="Password"
          name="password"
          placeholder="Masukkan password yang ingin digunakan"
          type="password"
        />
        <div class="mt-10">
          <app-button
            :is-disabled="isLoading"
            :is-loading="isLoading"
            color="primary"
            type="submit"
            >Masuk
          </app-button>
          <span class="mx-5">atau</span>
          <app-button
            :is-disabled="isLoading"
            :is-loading="isLoading"
            color="secondary"
            @click="gotoRegister"
          >
            Buat Akun
          </app-button>
        </div>
      </vee-form>
    </div>
  </div>
</template>
