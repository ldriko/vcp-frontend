import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

export const useSessionStore = defineStore('session', () => {
  const user = ref(JSON.parse(localStorage.getItem('user') ?? ''))
  const isLoggedIn = ref(localStorage.getItem('isLoggedIn') ?? false)

  const setUser = (data) => {
    user.value = data
    localStorage.setItem('user', JSON.stringify(data))
  }

  const getUser = async () => {
    const axios = inject('$axios')
    const response = await axios.get('/user').catch(() => null)

    setUser(response?.data)
    setIsLoggedIn(!!response?.data)
  }

  const setIsLoggedIn = (value) => {
    isLoggedIn.value = value
    localStorage.setItem('isLoggedIn', value)
  }

  return { user, isLoggedIn, getUser, setUser, setIsLoggedIn }
})