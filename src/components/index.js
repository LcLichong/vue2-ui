import Footer from './CFooter'
import Swipe from './CSwipe'
import SwipeItem from './CSwipeItem'
import Header from './CHeader'
import Dialog from './CDialog'
const version = '1.0'

function install(Vue) {
    console.log('install for Vue...')
    let components = [Footer, Swipe, SwipeItem, Header, Dialog]
    components.forEach(function(item) {
        if (item.install) {
            Vue.use(item)
        } else if (item.name) {
            Vue.component(item.name, item)
        }
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    // 引用vue.js时，调用install
    console.log('install for window.Vue...')
    install(window.Vue)
}

export { install, version, Footer, Swipe, SwipeItem, Header, Dialog }
export default {
    install: install,
    version: version
}