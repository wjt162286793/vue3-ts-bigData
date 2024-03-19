import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const globalRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        meta: {
            cname: '登录页'
        },
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
    },
    {
        path: '/',
        redirect: '/login'
    }
]
const allRoutes: Array<RouteRecordRaw> = [].concat(globalRoutes)

const router = createRouter({
    history: createWebHashHistory(),
    routes: allRoutes
})

export default router