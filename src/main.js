import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { NavBar, Dialog, Swipe, SwipeItem, Lazyload } from 'vant'
import Cui from './components/index'
import './components/index.less'
// import { Footer } from './components/index'

Vue.config.productionTip = false
Vue.use(NavBar)
Vue.use(Dialog)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Cui)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')