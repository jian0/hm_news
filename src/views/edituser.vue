<template>
  <div class="box">
      <hmheader title="编辑资料">
        <span class="iconfont iconjiantou2" slot='left' ></span>
      </hmheader>
    <div class="user_img">
        <img :src="userdata.head_img" alt="">
        <van-uploader :after-read="afterRead" />
    </div>
    <hmcell left='昵称' :right='userdata.nickname'></hmcell>
    <hmcell left='密码' :right="show?userdata.password:'*******'"></hmcell>
    <hmcell left='性别' :right="userdata.gender?'男':'女'"></hmcell>
    <!-- <van-field v-model="value" required label="昵称" placeholder="请输入昵称" /> -->
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
      show: false,
      userdata: {}
    }
  },
  components: {
    hmheader, hmcell
  },
  async mounted () {
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
        this.userdata.head_img = 'http://127.0.0.1:3000' + res.data.data.url
        // 更新数据库
        edituserinfo(this.userdata.id, { head_img: res.data.data.url })
      }
      //   console.log(res)
      console.log(file)
    }
  }
}
</script>

<style lang='less' scoped>
.user_img{
    height: 150px;
    position: relative;
    img{
        width: 90/360*100vw;
        height: 90/360*100vw;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%)
    }
    /deep/.van-uploader__upload{
        width: 90/360*100vw;
        height: 90/360*100vw;
        border-radius: 50%;
        opacity: 0;
    }
    /deep/.van-uploader{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%)
    }
}
.hmcell{
    border-bottom: 1px solid #ccc;
}
</style>
