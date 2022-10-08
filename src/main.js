import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/tailwind.css'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost/v1/'

createApp(App)
  .use(router)
  .provide('$axios', axios)
  .mount('#app')