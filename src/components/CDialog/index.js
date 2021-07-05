import Vue from 'vue'

function Dialog() {
    this.dialog = null
    this.overlay = null
    this.name = 'Dialog'
}

Dialog.prototype.alert = function(data) {
    if (!this.dialog) {
        let self = this
        this.dialog = new Vue({
            created() {
                this.display = true
                setTimeout(() => {
                    this.opacity = true
                })
            },
            data() {
                return {
                    title: data.title,
                    message: data.message,
                    time: data.time,
                    opacity: false,
                    display: false,
                    num: 0
                }
            },
            watch: {
                display(val) {
                    console.log(this.num)
                    if (this.time && this.num <= 1) {
                        if (val) {
                            setTimeout(() => {
                                this.opacity = !val
                                setTimeout(() => {
                                    this.display = !val
                                }, 1500)
                            }, this.time)
                        }
                    } else {
                        console.log(val)
                        if (val) {
                            this.display = val
                            setTimeout(() => {
                                this.opacity = val
                            }, 1500)
                        } else {
                            this.opacity = val
                            setTimeout(() => {
                                this.display = val
                            }, 1500)
                        }
                    }
                    this.num++
                }
            },
            render(h) {
                return h('div', {
                    'class': ['cs-dialog', `${this.opacity ? 'cs-dialog-show' : 'cs-dialog-hide'}`],
                    'style': {
                        'display': this.display ? 'block' : 'none'
                    }
                }, [
                    h('div', {}, [
                        `标题是:${this.title},内容是:${this.message}`,
                        h('button', {
                            'on': {
                                'click': this.btnClick
                            }
                        }, [
                            '点我关闭'
                        ])
                    ])
                ])
            },
            methods: {
                btnClick() {
                    this.display = false
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
        this.dialog.title = data.title
        this.dialog.message = data.message
        this.dialog.time = data.time
        this.dialog.display = true
    }
}

Dialog.prototype.install = function(Vue) {
    Vue.prototype['$' + this.name] = dialog
}

let dialog = new Dialog()

export default dialog