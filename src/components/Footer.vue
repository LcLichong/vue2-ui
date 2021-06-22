<template>
  <div v-if="show" class="footer">
    <div @click="idx = 0" v-show="idx != 0" class="footer-overlay"></div>
    <div
      v-for="f in FooterList"
      :key="f.idx"
      @click="footerClick(f.idx)"
      class="footer-div"
      :style="{ width: width + 'vw' }"
    >
      {{ f.label }}
      <div
        :class="[idx === f.idx ? 'footer-menu-active' : '']"
        class="footer-menu"
      >
        <div
          @click="menuClick($event, m)"
          v-for="m in f.menuList"
          :key="m.idx"
          class="footer-menu-div"
        >
          {{ m.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  created () {
    if (this.FooterList.length > 4) {
      console.error('Supports up to four bottom navigations')
      this.show = false
    } else {
      this.width = 100 / this.FooterList.length
    }
  },
  mounted () {

  },
  props: {
    FooterList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      idx: 0,
      width: 0,
      show: true
    }
  },
  methods: {
    footerClick (idx) {
      this.idx = idx === this.idx ? 0 : idx
    },
    menuClick (e, obj) {
      e = window.event || e
      if (e.stopPropagation) {
        e.stopPropagation() // IE下阻止事件冒泡
      } else if (e.cancelBubble) {
        e.cancelBubble = true // 其他浏览器阻止事件冒泡
      }
      this.$emit('menuClick', obj)
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 2px 12px #d6d6d6;
  background-color: #fff;
  .footer-div {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    .footer-menu {
      position: absolute;
      bottom: 0;
      width: 100%;
      visibility: hidden;
      opacity: 0;
      transition: transform 0.3s, -webkit-transform 0.3s;
      transition-duration: 0.2s;
      z-index: -1;
      .footer-menu-div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 7vh;
        background-color: #d6d6d6;
        border-bottom: 1px solid #fff;
        box-sizing: border-box;
      }
    }
    .footer-menu-active {
      visibility: visible;
      opacity: 1;
      transition-timing-function: ease-in;
      transform: translate3d(0, -7vh, 0);
    }
  }
  .footer-div:not(:first-child):not(:last-child):before {
    content: "";
    position: absolute;
    right: 0px;
    display: inline-block;
    width: 1px;
    height: 60%;
    background-color: rgb(175, 174, 174);
  }
  .footer-overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 93vh;
    position: fixed;
    z-index: -2;
  }
}
</style>