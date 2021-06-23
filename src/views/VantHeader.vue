<template>
  <div class="container">
    <van-nav-bar title="Vant" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item @click="swipeClick" v-for="(image, index) in images" :key="index">
        <img class="swipe-img" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      images: [
        require('../assets/slidec.jpg'),
        require('../assets/slided.jpg'),
        require('../assets/slidee.jpg'),
      ]
    }
  },
  methods: {
    onClickLeft () {
      this.$router ? this.$router.back() : window.history.back()
    },
    swipeClick () {
      this.$dialog.alert({
        title: '提示',
        message: '轮播图点击'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.swipe {
  height: 43.98vw;
  .swipe-img {
    width: 100%;
  }
}
</style>