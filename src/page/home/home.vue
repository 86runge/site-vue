<template>
  <div id="wrap">
    <headerPage></headerPage>
    <div id="section">
      <div class="top-news">
        <img
          src="../../assets/images/common/top_hots.jpg"
          alt=""
        >
      </div>
      <div class="content-box">
        <div class="search-box">
          <div class="logo-content">
            <img
              src="../../assets/images/goods/2.jpg"
              alt=""
            >
          </div>
          <div class="search-content">
            <el-form
              ref="form"
              :model="form"
            >
              <el-form-item>
                <el-input
                  class="search-input"
                  v-model="form.serrchName"
                  placeholder="请输入搜索内容"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="crats-content">
            <img
              src="../../assets/images/goods/1.jpg"
              alt=""
            >
          </div>
        </div>
        <div class="classify-box"></div>
        <div class="hot-box">
          <div class="hot-new"></div>
          <div class="hot-goood"></div>
        </div>
        <div class="category-good">
          <div class="category-good-item"></div>
          <div class="category-good-nav"></div>
        </div>
        <div class="statement-box"></div>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
// 导入公共组件
import headerPage from '../../components/common/header'
import footerPage from '../../components/common/footer'

export default {
  components: {
    headerPage,
    footerPage
  },
  data () {
    return {
      form: {
        serrchName: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-news {
  img {
    width: 100%;
  }
}
.content-box {
  width: 1200px;
  flex: 1;
  margin: 0 auto;
  .search-box {
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo-content {
      width: 200px;
      display: flex;
      justify-content: center;
      img {
        height: 100px;
      }
    }
    .search-content {
      width: 800px;
      .search-input {
        width: 800px;
      }
    }
    .crats-content {
      width: 200px;
      display: flex;
      justify-content: center;
      img {
        height: 100px;
      }
    }
  }
}
</style>
