import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

export const useSessionStore = defineStore('session', () => {
  const user = ref(null)
  const isLoggedIn = ref(false)

  const setUser = (data) => {
    user.value = data
  }

  const getUser = async () => {
    const axios = inject('$axios')
    const response = await axios.get('/user').catch(() => null)

    setUser(response?.data)
    setIsLoggedIn(!!response?.data)
  }

  const setIsLoggedIn = (value) => isLoggedIn.value = value

  return { user, isLoggedIn, getUser, setUser, setIsLoggedIn }
})