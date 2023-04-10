import { createWebHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'

const routes = [
    {
        path: '/mainpage',
        name: 'mainpage',
        component: MainPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router