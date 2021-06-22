<template>
  <div class="home">
    <van-nav-bar title="标题" />
    <van-swipe class="swipe" :autoplay="5000">
      <van-swipe-item
        @click="swipeClick"
        v-for="(image, index) in images"
        :key="index"
      >
        <img class="swipe-img" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <Footer :FooterList="FooterList" @menuClick="menuClick"></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer
  },
  data () {
    return {
      FooterList: [
        {
          idx: 1,
          label: '底部导航一',
          menuList: [
            {
              label: '菜单1',
              url: '',
              idx: 'menu1'
            },
            {
              label: '菜单2',
              url: '',
              idx: 'menu2'
            }
          ]
        },
        {
          idx: 2,
          label: '底部导航二',
          menuList: [
            {
              label: '菜单3',
              url: '',
              idx: 'menu3'
            },
            {
              label: '菜单4',
              url: '',
              idx: 'menu4'
            }
          ]
        },
        {
          idx: 3,
          label: '底部导航三',
          menuList: [
            {
              label: '菜单5',
              url: '',
              idx: 'menu5'
            },
            {
              label: '菜单6',
              url: '',
              idx: 'menu6'
            }
          ]
        },
        {
          idx: 4,
          label: '底部导航四',
          menuList: [
            {
              label: '菜单7',
              url: '',
              idx: 'menu7'
            },
            {
              label: '菜单8',
              url: '',
              idx: 'menu8'
            }
          ]
        }
      ],
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      idx: 0
    }
  },
  methods: {
    menuClick (obj) {
      this.$dialog.alert({
        title: '提示',
        message: `我是${obj.label}`
      })
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
.home {
  height: 100vh;
}

.swipe {
  height: 35vh;
  .swipe-img {
    height: 100%;
  }
}
</style>
