/*
 * @Author: LcLichong 
 * @Date: 2021-07-06 16:02:57 
 * @Last Modified by: LcLichong
 * @Last Modified time: 2021-07-06 16:09:54
 */

import Vue from 'vue'
import { getFnName } from '../utiles'

function Dialog() {}

let cache = Object.create(null)

Dialog.prototype.alert = function(options) {
    let dialog = 'dialog'
    let overlay = 'overlay'
    if (!cache[dialog]) {
        cache[dialog] = new Vue({
            created() {
                this.title = options.title
                this.message = options.message
                this.time = options.time
                this.showDialog()
            },
            data() {
                return {
                    title: options.title,
                    message: options.message,
                    time: options.time,
                    opacity: false,
                    display: false,
                    num: 0,
                    transitionTime: 300
                }
            },
            render(h) {
                return h('div', {
                    class: ['cs-dialog', `${this.opacity ? 'cs-dialog-show' : 'cs-dialog-hide'}`],
                    style: {
                        'display': this.display ? 'block' : 'none'
                    }
                }, [
                    h('div', {
                        'class': 'cs-dialog-title'
                    }, [
                        this.title
                    ]),
                    h('div', {
                        'domProps': {
                            'innerHTML': this.message
                        },
                        'class': 'cs-dialog-content'
                    }, [

                    ]),
                    h('div', {
                        'class': 'cs-dialog-confirm'
                    }, [
                        h('button', {
                            'class': 'cs-dialog-confirm-button',
                            'on': {
                                'click': this.btnClick
                            }
                        }, [
                            '确定'
                        ])
                    ])
                ])
            },
            methods: {
                btnClick() {
                    this.hideDialog()
                },
                showDialog() {
                    if (this.time) {
                        this.display = true
                        setTimeout(() => {
                            this.opacity = true
                        })
                        setTimeout(() => {
                            this.opacity = false
                            setTimeout(() => {
                                this.display = false
                            }, this.transitionTime)
                        }, this.time)
                    } else {
                        this.display = true
                        setTimeout(() => {
                            this.opacity = true
                        })
                    }
                },
                hideDialog() {
                    this.opacity = false
                    setTimeout(() => {
                        this.display = false
                    }, this.transitionTime)
                }
            }
        })
        cache[overlay] = new Vue({
            render(h) {
                return h('div', {
                    'class': ['cs-dialog-overlay', `${cache[dialog].opacity ? 'cs-dialog-overlay-show' : 'cs-dialog-overlay-hide'}`],
                    'style': {
                        'display': cache[dialog].display ? 'block' : 'none'
                    }
                }, [])
            }
        })
        if (document.body) {
            let overlayDom = cache[overlay].$mount().$el
            document.body.appendChild(overlayDom)
            let dialogDom = cache[dialog].$mount().$el
            document.body.appendChild(dialogDom)
        }
    } else {
        cache[dialog].title = options.title
        cache[dialog].message = options.message
        cache[dialog].time = options.time
        cache[dialog].showDialog()
    }
}

Dialog.prototype.install = function(Vue) {
    Vue.prototype['$' + getFnName(Dialog)] = dialog
}


let dialog = new Dialog()

export default dialog