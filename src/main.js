import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { NavBar } from 'vant'

Vue.use(NavBar)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')