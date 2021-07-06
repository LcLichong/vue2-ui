import Vue from 'vue'

function Dialog() {
    this.dialog = null
    this.overlay = null
    this.name = 'Dialog'
}

Dialog.prototype.alert = function(options) {
    if (!this.dialog) {
        let self = this
        this.dialog = new Vue({
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

        this.overlay = new Vue({
            render(h) {
                return h('div', {
                    'class': ['cs-dialog-overlay', `${self.dialog.opacity ? 'cs-dialog-overlay-show' : 'cs-dialog-overlay-hide'}`],
                    'style': {
                        'display': self.dialog.display ? 'block' : 'none'
                    }
                }, [])
            }
        })

        if (document.body) {
            let overlay = this.overlay.$mount().$el
            document.body.appendChild(overlay)
            let dialog = this.dialog.$mount().$el
            document.body.appendChild(dialog)
        }
    } else {
        this.dialog.title = options.title
        this.dialog.message = options.message
        this.dialog.time = options.time
        this.dialog.showDialog()
    }
}

Dialog.prototype.install = function(Vue) {
    Vue.prototype['$' + this.name] = dialog
}

let dialog = new Dialog()

export default dialog