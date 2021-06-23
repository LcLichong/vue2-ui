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
import Header from '../components/CHeader/Header.vue'
import Swipe from '../components/CSwipe/Swipe.vue'
import SwipeItem from '../components/CSwipeItem/SwipeItem.vue'

export default {
  components: {
    Header,
    Swipe,
    SwipeItem
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
      speed: 5000
    }
  }
}
</script>

<style lang="less" scoped>
.c-swipe {
  height: 43.98vw;
}
</style>