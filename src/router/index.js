import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CUIView from '../views/CUIView.vue'
import VantHeader from '../views/VantHeader.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/CUIView',
        name: 'CUIView',
        component: CUIView
    },
    {
        path: '/VantHeader',
        name: 'VantHeader',
        component: VantHeader
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router