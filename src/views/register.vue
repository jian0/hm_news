<template>
  <div class="login">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
          <hminput
          placeholder="请输入手机号/用户名"
          :rules='/^(\d{5,6})$|^(1\d{10})$/'
          msg='请输入正确的用户名'
          v-model='users.username'
          ></hminput>
          <hminput
          placeholder="请输入密码"
          type="password"
          :rules='/^\S{3,16}$/'
          msg='请输入正确的3-16位密码'
          v-model='users.password'
          ></hminput>
          <hminput
          placeholder="请输入用户名"
          :rules='/[\u4e00-\u9fa5]/gm'
          msg='请输入正确的3-16位用户名'
          v-model='users.nickname'
          ></hminput>
        <!-- <input placeholder="密码" class="input" type="password" /> -->
      </div>
      <p class="tips">
        已有账号？
        <a href="#/login" class>去登录</a>
      </p>
      <hmbutton @click='handleregister'>注册</hmbutton>
    </div>
  </div>
</template>

<script>
import hmbutton from '@/components/hmbutton.vue'
import hminput from '@/components/hminput.vue'
import { register } from '@/apis/user.js'
export default {
  data () {
    return {
      users: {
        username: '',
        password: '',
        nickname: ''
      }
    }
  },
  components: {
    hmbutton, hminput
  },
  methods: {
    async handleregister () {
      let res = await register(this.users)
      console.log(res)
      if (res.data.message === '注册成功') {
        this.$toast.success('注册成功')
        this.$router.push({ name: 'Login' })
      } else {
        this.$toast.fail(res.data.message)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
