import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
<<<<<<< Updated upstream
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
=======
    path: '/',
    name: 'index',
    component: () => import('../views/IndexPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
>>>>>>> Stashed changes
  },
  {
    path: '/register',
    name: 'register',
<<<<<<< Updated upstream
    component: () => import('@/views/RegisterPage.vue')
=======
    component: () => import('../views/RegisterPage.vue')
>>>>>>> Stashed changes
  },
  {
    path: '/forget-password',
    name: 'forgetPW',
<<<<<<< Updated upstream
    component: () => import('@/views/PasswordResetPage.vue')
=======
    component: () => import('../views/PasswordResetPage.vue')
>>>>>>> Stashed changes
  },
  {
    path: '/pulihkan',
    name: 'pulihkan',
<<<<<<< Updated upstream
    component: () => import('@/views/PulihkanPage.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
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
        path: 'groups',
        name: 'groups',
        component: () => import('@/views/Console/Groups/GroupsPage')
      },
    ]
  }
]
=======
    component: () => import('../views/PulihkanPage.vue')
  },
  {
    path: '/jurnal',
    name: 'jurnal',
    component: () => import('../views/JurnalPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  }
]

>>>>>>> Stashed changes

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router