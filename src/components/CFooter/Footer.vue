<template>
  <div v-if="show" class="footer">
    <div @click="idx = 0" v-show="idx != 0" class="footer-overlay"></div>
    <div v-for="f in FooterList" :key="f.idx" @click="footerClick(f.idx)" class="footer-div" :style="{ width: width + 'vw' }">
      {{ f.name }}
      <div :class="[idx === f.idx ? 'footer-menu-active' : '']" class="footer-menu">
        <div @click="menuClick($event, m)" v-for="m in f.menuList" :key="m.idx" class="footer-menu-div">
          {{ m.name }}
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
      default: () => [],
    },
  },
  data () {
    return {
      idx: 0,
      width: 0,
      show: true,
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
    },
  },
}
</script>

<style lang="less">
@import 'footer.less';
</style>