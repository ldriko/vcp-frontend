import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import("../views/LoginPage.vue")
    },
    {
        path: '/',
        name: 'register',
        component: () => import("../views/RegisterPage.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;