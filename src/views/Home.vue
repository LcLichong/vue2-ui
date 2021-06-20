<template>
  <div class="home">
    <van-nav-bar title="标题" left-text="返回" left-arrow />

    <div class="footer">
      <div class="footer-menu">底部导航1</div>
      <div class="footer-menu">底部导航2</div>
      <div class="footer-menu">底部导航3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
}
.footer {
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  .footer-menu {
    position: relative;
    width: 33.3vw;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-menu:not(:first-child):before {
    content: "";
    position: absolute;
    left: 0px;
    display: inline-block;
    width: 1px;
    height: 100%;
    background-color: rgb(175, 174, 174);
  }
}
</style>
