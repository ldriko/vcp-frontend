import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterPage.vue')
  },
  {
    path: '/forget-password',
    name: 'forgetPW',
    component: () => import('@/views/PasswordResetPage.vue')
  },
  {
    path: '/pulihkan',
    name: 'pulihkan',
    component: () => import('@/views/PulihkanPage.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/jurnal',
    name: 'jurnalPage',
    component: () => import('@/views/JurnalPage.vue')
  },
  {
    path: '/console',
    name: 'console',
    component: () => import('@/views/Console/ConsolePage'),
    children: [
      {
        path: 'dashboard',
        name: 'console-dashboard',
        component: () => import('@/views/Console/DashboardPage')
      },
      {
        path: 'create-jurnal',
        name: 'create-jurnal',
        component: () => import('@/views/Console/CreateJurnalPage.vue')
      }
]},
 
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router