<template>
  <div class="personal">
    <router-link :to="`/edituser/${userdata.id}`">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src="userdata.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{userdata.nickname}}
          </div>
          <div class="time">{{userdata.create_date | datefilter}}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <hmcell left='我的关注' right='关注的用户' @click="$router.push({name:'Myfollow'})"></hmcell>
    <hmcell left='我的跟帖' right='跟帖/回复'></hmcell>
    <hmcell left='我的收藏' right='文章/视频' @click="$router.push({name:'Mystar'})"></hmcell>
    <hmcell left='设置'></hmcell>
    <hmbutton class="btn" @click="exit">退出</hmbutton>
  </div>
</template>

<script>
import { getUserById } from '@/apis/user.js'
import hmcell from '@/components/hmcell.vue'
import hmbutton from '@/components/hmbutton.vue'
import { datefilter } from '@/filters/datefilter.js'
export default {
  components: {
    hmcell, hmbutton
  },
  filters: {
    datefilter
  },
  data () {
    return {
      userdata: {}
    }
  },
  async mounted () {
    // console.log(this.$route.params) // 1
    let res = await getUserById(this.$route.params.id)
    console.log(res)
    if (res.data.message === '获取成功') {
      this.userdata = res.data.data
      this.userdata.head_img = 'http://localhost:3000' + res.data.data.head_img
    }
  },
  methods: {
    exit () {
      // console.log(123)
      this.$router.push({ name: 'Index' })
      localStorage.removeItem('hm_news_token')
    }
  }
}
</script>

<style lang='less' scoped>
.personal{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
}
a{
    color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
.btn{
  background-color: #f00;
  margin: 20px auto
}
</style>
