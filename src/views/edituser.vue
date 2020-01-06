<template>
  <div class="box">
    <hmheader title="编辑资料">
      <span class="iconfont iconjiantou2" slot="left" @click="$router.back()"></span>
    </hmheader>
    <div class="user_img">
      <img :src="userdata.head_img" alt />
      <van-uploader :after-read="afterRead" />
    </div>
    <hmcell left="昵称" :right="userdata.nickname" @click="shownick=!shownick"></hmcell>
    <van-dialog v-model="shownick" title="标题" show-cancel-button @confirm='handlename'>
        <van-field ref="nick" :value="userdata.nickname" required label="昵称" placeholder="请输入昵称" />
    </van-dialog>
    <hmcell left="密码" :right="userdata.password" type='password' @click="showpass=!showpass"></hmcell>
    <van-dialog v-model="showpass" title="标题" show-cancel-button @confirm='handlepass' :beforeClose='beforeClose'>
        <van-field ref="oldpass" required label="旧密码" placeholder="请输入旧密码" />
        <van-field ref="newpass" required label="新密码" placeholder="请输入新密码" />
    </van-dialog>

    <hmcell left="性别" :right="userdata.gender?'男':'女'"></hmcell>
  </div>
</template>

<script>
import hmheader from '@/components/hmheader.vue'
import hmcell from '@/components/hmcell.vue'
import { uploadfile } from '@/apis/upload.js'
import { getUserById, edituserinfo } from '@/apis/user.js'
export default {
  data () {
    return {
      shownick: false,
      showpass: false,
      userdata: {}
    }
  },
  components: {
    hmheader,
    hmcell
  },
  async mounted () {
    // 获取用户数据实现数据渲染
    let res = await getUserById(this.$route.params.id)
    // console.log(res)
    if (res.data.message === '获取成功') {
      this.userdata = res.data.data
      this.userdata.head_img = 'http://127.0.0.1:3000' + this.userdata.head_img
    } else {
      this.$toast.fail('获取用户信息失败')
    }
  },
  methods: {
    async afterRead (file) {
      // 此时可以自行将文件上传至服务器
      let formdata = new FormData()
      formdata.append('file', file.file)
      let res = await uploadfile(formdata)
      if (res.data.message === '文件上传成功') {
        //   先实现预览效果
        // console.log(res)

        this.userdata.head_img = 'http://127.0.0.1:3000' + res.data.data.url
        // 更新数据库
        edituserinfo(this.userdata.id, { head_img: res.data.data.url })
      }
      //   console.log(res)
      console.log(file)
    },
    async handlename () {
    //   console.log(this.$refs.input)
    // 获取组件输入框里面的数据
      let data = this.$refs.nick.$refs.input.value
      console.log(data)
      // 预览修改后的数据
      this.userdata.nickname = data
      // 发请求更新数据库的数据
      let res = await edituserinfo(this.userdata.id, { nickname: data })
      console.log(res)
      if (res.data.message === '修改成功') {
        this.$toast.success('用户名修改成功')
      } else {
        this.$toast.fail('用户名修改失败')
      }
    },
    async handlepass () {
    },
    async beforeClose (action, done) {
      // console.log(action)
      // console.log(done)
      if (action === 'confirm') {
        let oldpass = this.$refs.oldpass.$refs.input.value
        let newpass = this.$refs.newpass.$refs.input.value
        // console.log(oldpass)
        if (oldpass !== this.userdata.password) {
          this.$toast.fail('旧密码输入错误')
          done(false)
        } else if (oldpass === newpass) {
          this.$toast.fail('旧密码和新密码不能相同')
          done(false)
        } else if (newpass.trim().length === 0) {
          this.$toast.fail('新密码不能为空')
          done(false)
        } else {
          let res2 = await edituserinfo(this.userdata.id, { password: newpass })
          this.userdata.password = newpass
          console.log(res2)
          if (res2.data.message === '修改成功') {
            this.$toast.success('修改成功')
            done()
          } else {
            this.$toast.fail('修改失败')
          }
        }
      } else {
        done()
      }
    }
  }
}
</script>

<style lang='less' scoped>
.user_img {
  height: 150px;
  position: relative;
  img {
    width: 90/360 * 100vw;
    height: 90/360 * 100vw;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  /deep/.van-uploader__upload {
    width: 90/360 * 100vw;
    height: 90/360 * 100vw;
    border-radius: 50%;
    opacity: 0;
  }
  /deep/.van-uploader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.hmcell {
  border-bottom: 1px solid #ccc;
}
</style>
