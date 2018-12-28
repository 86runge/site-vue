<template>
  <div id="header">
    <div class="nav-box">
      <ul class="nav-bar">
        <li class="nav-item">
          <router-link to="/home">home-page</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/good/good-list">good-list</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/good/good-manage">good-manage</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/order/order-list">order-list</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/order/order-manage">order-manage</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-box {
  height: 45px;
  background: #5245c7;
  .nav-bar {
    display: flex;
    justify-content: flex-start;
    .nav-item {
      width: 135px;
      height: 45px;
      display: flex;
      justify-content: center;
      line-height: 45px;
      a {
        color: #fff;
      }
    }
    .nav-item > a:hover,
    .nav-item > a.exact-active {
      background: #2d1cce;
    }
  }
}
</style>
