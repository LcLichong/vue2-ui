<template>
    <div class="home">
        <Header title="首页" height="46px"></Header>
        <Swipe class="swipe" :speed="speed">
            <SwipeItem v-for="(img, key) in images" @click.native="swipeClick(img)" :key="key">
                <img :src="img.url" :key="key" />
            </SwipeItem>
        </Swipe>
        <Footer :FooterList="FooterList" @menuClick="menuClick"></Footer>
    </div>
</template>

<script>
// import { Dialog } from '../components/index'

export default {
    name: 'Home',
    components: {

    },
    data () {
        return {
            FooterList: [
                {
                    idx: 1,
                    name: '底部导航一',
                    menuList: [
                        {
                            name: 'CUI',
                            url: '/CUIView',
                            idx: 'menu1'
                        },
                        {
                            name: 'Vant',
                            url: '/VantHeader',
                            idx: 'menu2'
                        }
                    ]
                },
                {
                    idx: 2,
                    name: '底部导航二',
                    menuList: [
                        {
                            name: '菜单3',
                            url: 'http://www.baidu.com',
                            idx: 'menu3'
                        },
                        {
                            name: '菜单4',
                            url: '',
                            idx: 'menu4'
                        }
                    ]
                },
                {
                    idx: 3,
                    name: '底部导航三',
                    menuList: [
                        {
                            name: '菜单5',
                            url: 'xxxx',
                            idx: 'menu5'
                        },
                        {
                            name: '菜单6',
                            url: '',
                            idx: 'menu6'
                        }
                    ]
                }
            ],
            images: [
                {
                    url: require('../assets/slidec.jpg'),
                    key: 'img1'
                },
                {
                    url: require('../assets/slided.jpg'),
                    key: 'img2'
                },
                {
                    url: require('../assets/slidee.jpg'),
                    key: 'img3'
                }
            ],
            speed: 5000,
            idx: 0
        }
    },
    methods: {
        menuClick (m) {
            if (!m.url) {
                this.$Dialog.alert({
                    title: '提示',
                    message: '敬请期待'
                })
            } else if (m.url.substring(0, 1) === '/') {
                this.$router.push({ path: m.url })
            } else if (m.url.startsWith('http') || m.url.startsWith('https')) {
                window.location.href = m.url
            } else {
                this.$Dialog.alert({
                    title: '提示',
                    message: '链接格式不正确'
                })
            }
        },
        swipeClick (img) {
            this.$Dialog.alert({
                title: '提示',
                message: `轮播图点击,我的key是：${img.key}`
            })
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    height: 100vh;
}
.swipe {
    height: 43.98vw;
}
</style>
