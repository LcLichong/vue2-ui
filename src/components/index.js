import Footer from './CFooter'
var version = '1.0'

function install(Vue) {
    console.log('install for Vue...')
    var components = [Footer]
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

export { install, version, Footer }
export default {
    install: install,
    version: version
}