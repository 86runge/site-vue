<template>
  <div class="login-content">
    <el-form
      :model="loginForm"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户名"
        prop="username"
        :rules="[
          { required: true, message: '用户名不能为空'}
        ]"
      >
        <el-input
          type="username"
          v-model.number="loginForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[
          { required: true, message: '密码不能为空'}
        ]"
      >
        <el-input
          type="password"
          v-model.number="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('loginForm')"
        >登录
        </el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    if (!this.admininfo) {
      this.getAdminInfo()
    }
  },
  computed: {
    ...mapState(['adminInfo'])
  },
  methods: {
    ...mapActions(['getAdminInfo']),
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push('home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  watch: {
    admininfo: function (newValue) {
      if (newValue.id) {
        this.$message({
          type: 'success',
          message: '检测到您之前已经登录过，将自动登录'
        })
        this.$router.push('home')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-content {
    width: 500px;
    margin: 50px auto;
  }
</style>
