<template>
    <div class="container">
        <Header title="CUI" height="46px" showBack></Header>
        <Swipe class="c-swipe" :speed="speed">
            <SwipeItem v-for="(img, key) in images" :key="key">
                <img :src="img.url" :key="key" />
            </SwipeItem>
        </Swipe>
    </div>
</template>

<script>

export default {
    components: {
    },
    created () {
        this.$Dialog.alert({
            title: '提示',
            message: this.message
        })
    },
    data () {
        return {
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
            message: '你好'
        }
    }
}
</script>

<style lang="less" scoped>
.c-swipe {
    height: 43.98vw;
}
</style>