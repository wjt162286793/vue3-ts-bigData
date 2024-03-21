import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const dashBoardChildrenList: Array<RouteRecordRaw> = [
    {
        path:'/dashboard/friend',
        name:'friend',
        meta:{
            cname:'好友系统'
        },
        component:()=>import('@/views/friend/index.vue'),
        
    },
    {
        path:'/dashboard/note',
        name:'note',
        meta:{
            cname:'个人笔记'
        },
        component:()=>import('@/views/note/index.vue')
    },
    {
        path:'/dashboard/log',
        name:'log',
        meta:{
            cname:'日志'
        },
        component:()=>import('@/views/log/index.vue')
    },
    {
        path:'/dashboard/game',
        name:'game',
        meta:{
            cname:'小游戏'
        },
        component:()=>import('@/views/game/index.vue')
    },
    {
        path:'/dashboard/news',
        name:'news',
        meta:{
            cname:'新闻'
        },
        component:()=>import('@/views/news/index.vue')
    },
    {
        path:'/dashboard/mySet',
        name:'mySet',
        meta:{
            cname:'个人设置'
        },
        component:()=>import('@/views/mySet/index.vue')
    },
    {
        path:'/dashboard/spaceSet',
        name:'spaceSet',
        meta:{
            cname:'空间设置'
        },
        component:()=>import('@/views/spaceSet/index.vue')
    }
]

const globalRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        meta: {
            cname: '登录页'
        },
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta:{
            cname:'页面'
        },
        redirect:'/dashboard/friend',
        children:[
            {
                path:'/dashboard/friend',
                name:'friend',
                meta:{
                    cname:'好友系统'
                },
                component:()=>import('@/views/friend/index.vue'),
                redirect:'/dashboard/friend/chat',
                children:[
                    {
                        path:'/dashboard/friend/chat',
                        name:'chat',
                        meta:{
                            cname:'聊天系统'
                        },
                        component:()=>import('@/views/friend/chatBox.vue'),
                    },
                    {
                        path:'/dashboard/friend/shop',
                        name:'shop',
                        meta:{
                            cname:'梦商城'
                        },
                        component:()=>import('@/views/friend/shop/index.vue'),
                    },
                    {
                        path:'/dashboard/friend/live',
                        name:'live',
                        meta:{
                            cname:'梦音频'
                        },
                        component:()=>import('@/views/friend/live/index.vue'),
                    },
                    {
                        path:'/dashboard/friend/nearby',
                        name:'nearby',
                        meta:{
                            cname:'附近'
                        },
                        component:()=>import('@/views/friend/nearby/index.vue'),
                    },
                    {
                        path:'/dashboard/gameLog/shop',
                        name:'gameLog',
                        meta:{
                            cname:'游戏日志'
                        },
                        component:()=>import('@/views/friend/gameLog/index.vue'),
                    }
                ]
            },
            {
                path:'/dashboard/note',
                name:'note',
                meta:{
                    cname:'个人笔记'
                },
                component:()=>import('@/views/note/index.vue')
            },
            {
                path:'/dashboard/log',
                name:'log',
                meta:{
                    cname:'日志'
                },
                component:()=>import('@/views/log/index.vue')
            },
            {
                path:'/dashboard/game',
                name:'game',
                meta:{
                    cname:'小游戏'
                },
                component:()=>import('@/views/game/index.vue')
            },
            {
                path:'/dashboard/news',
                name:'news',
                meta:{
                    cname:'新闻'
                },
                component:()=>import('@/views/news/index.vue')
            },
            {
                path:'/dashboard/mySet',
                name:'mySet',
                meta:{
                    cname:'个人设置'
                },
                component:()=>import('@/views/mySet/index.vue')
            },
            {
                path:'/dashboard/spaceSet',
                name:'spaceSet',
                meta:{
                    cname:'空间设置'
                },
                component:()=>import('@/views/spaceSet/index.vue')
            }
        ]
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