import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import './assets/tailwind.css'
import dayjs from 'dayjs'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

createApp(App)
  .use(createPinia())
  .use(router)
  .provide('$axios', axios)
  .provide('$dayjs', dayjs)
  .mount('#app')