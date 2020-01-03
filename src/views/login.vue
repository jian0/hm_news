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
          :rules='/^(\d{5,6})|^(1\d{10})$/'
          msg='请输入正确的用户名'
          :value='users.username'
          @input="handleinput"
          ></hminput>
          <hminput
          placeholder="请输入密码"
          type="password"
          :rules='/\S{3,16}/'
          msg='请输入正确的3-16位用户名'
          v-model='users.password'
          ></hminput>
        <!-- <input placeholder="密码" class="input" type="password" /> -->
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <hmbutton @input='login'>登录</hmbutton>
    </div>
  </div>
</template>

<script>
import hmbutton from '@/components/hmbutton.vue'
import hminput from '@/components/hminput.vue'
export default {
  data () {
    return {
      users: {
        username: '10086',
        password: '123'
      }
    }
  },
  components: {
    hmbutton, hminput
  },
  methods: {
    login (data) {
      console.log(123)
    },
    handleinput (data) {
      this.users.username = data
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
