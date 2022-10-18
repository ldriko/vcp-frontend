import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

export const useSessionStore = defineStore('session', () => {
  const userJson = localStorage.getItem('user')
  const user = ref(userJson ? JSON.parse(userJson) : null)
  const isLoggedIn = ref(localStorage.getItem('isLoggedIn') ?? false)

  const setUser = (data) => {
    user.value = data

    if (data) {
      localStorage.setItem('user', JSON.stringify(data))
    }
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

  const clear = () => {
    isLoggedIn.value = true
    user.value = null
    localStorage.clear()
  }

  return { user, isLoggedIn, getUser, setUser, setIsLoggedIn, clear }
})