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
          :value='users.username'
          @input="handleinput"
          ></hminput>
          <hminput
          placeholder="请输入密码"
          type="password"
          :rules='/^\S{3,16}$/'
          msg='请输入正确的3-16位密码'
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
import { login } from '@/apis/user.js'
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
    async login () {
      // console.log(this.users.username)
      let res = await login(this.users)
      if (res.data.message === '登录成功') {
        // console.log(res)
        // 存储token值到本地
        localStorage.setItem('hm_news_token', res.data.data.token)
        // 存储用户个人信息到本地,并转为字符串
        localStorage.setItem('userinfo', JSON.stringify(res.data.data.user))
        // 跳转到用户中心页面
        this.$router.push({ path: `/usercenter/${res.data.data.user.id}` })
      } else {
        this.$toast.fail('账号或者密码输入有误')
      }
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      // console.log(this.users)
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
