import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import("../views/LoginPage.vue")
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("../views/RegisterPage.vue")
    },
    {
        path: '/forget-password',
        name: 'forgetPW',
        component: () => import("../views/PasswordResetPage.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;