import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from '@/stores/session'

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
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'console-dashboard',
        component: () => import('@/views/Console/DashboardPage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'journals/manage',
        name: 'journals-manage',
        component: () => import('@/views/Console/ConsoleMyJurnalPage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'journals/create',
        name: 'journals-create',
        component: () => import('@/views/Console/Journals/CreatePage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'journals/:code',
        name: 'journals-show',
        component: () => import('@/views/Console/Journals/ShowPage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'journals/:code/edit',
        name: 'journals-edit',
        component: () => import('@/views/Console/Journals/EditPage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'journals/search',
        name: 'journals-search',
        component: () => import('@/views/Console/ConsoleSearchJurnalPage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'journals/create',
        name: 'journals-create',
        component: () => import('@/views/Console/CreateJurnalPage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'groups',
        name: 'groups',
        component: () => import('@/views/Console/Groups/GroupsPage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'groups/create',
        name: 'groups-create',
        component: () => import('@/views/Console/Groups/CreatePage'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'groups/:id/edit',
        name: 'groups-edit',
        component: () => import('@/views/Console/Groups/EditPage'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/journals/search/:type',
    name: 'journals-search-guest',
    component: () => import('@/views/Console/ConsoleSearchJurnalPage')
  },
  {
    path: '/jurnal',
    name: 'jurnal',
    component: () => import('../views/JurnalPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeResolve((to) => {
  const sessionStore = useSessionStore()

  if (to.meta.requiresAuth && !sessionStore.isLoggedIn) return '/'
})

export default router