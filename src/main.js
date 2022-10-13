import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import './assets/tailwind.css'

const pinia = createPinia()

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/v1/'

createApp(App)
  .use(pinia)
  .use(router)
  .provide('$axios', axios)
  .mount('#app')