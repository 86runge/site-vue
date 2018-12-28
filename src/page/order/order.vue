<template>
  <div id="wrap">
    <headerPage></headerPage>
    <div id="section">
      <h2>这是order页面</h2>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import headerPage from '../../components/common/header'
import footerPage from '../../components/common/footer'
export default {
  components: {
    headerPage,
    footerPage
  }
}
</script>

<style lang="scss" scoped>
</style>
