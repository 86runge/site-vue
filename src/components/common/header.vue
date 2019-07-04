<template>
  <div id="header">
    <div class="nav-box">
      <div class="nav-box-left">
        <span class="nav-item-btn">欢迎来到网上电子商城</span>
        <div v-if="requireAuth">
          <span class="nav-item-btn">{{username}}</span>
          <span class="nav-item-btn" @click="logout()">退出</span>
        </div>
        <div v-else>
          <span class="nav-item-btn">
            <router-link to="/login">请登录</router-link>
          </span>
          <span class="nav-item-btn">
            <router-link to="/register">免费注册</router-link>
          </span>
        </div>
      </div>
      <div class="nav-box-right">
        <span class="nav-item-btn">
          <router-link to="">会员中心</router-link>
        </span>
        <span class="nav-item-btn">
          <router-link to="">收藏夹</router-link>
        </span>
        <span class="nav-item-btn">
           <router-link to="">购物车</router-link>
        </span>
        <span class="nav-item-btn">
          <router-link to="">联系客服</router-link>
        </span>
        <span class="nav-item-btn">
          <router-link to="">切换主题</router-link>
        </span>
        <span class="nav-item-btn">
          <router-link to="">前往后台</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        requireAuth: false,
        username: '',
      }
    },
    methods: {
      /**
       * 退出登录
       */
      logout () {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-box {
    width: 1200px;
    margin: 0 auto;
    height: 45px;
    display: flex;
    justify-content: space-between;

    .nav-box-left, .nav-box-right {
      display: flex;
      justify-content: flex-start;
      line-height: 30px;

      .nav-item-btn {
        display: inline-block;
      }
    }

    .nav-box-left .nav-item-btn {
      margin-right: 7px;
    }

    .nav-box-right .nav-item-btn {
      margin-left: 7px;
    }
  }
</style>
