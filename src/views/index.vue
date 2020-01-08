<template>
<div class="header">
  <div class="index">
      <div class="left">
          <span class="iconfont iconnew"></span>
      </div>
      <div class="center" @click="$router.push({name:'Search'})">
          <van-icon name="search" />
          <span>搜索新闻</span>
      </div>
      <div class="right" @click="$router.push({path:`/usercenter/${id}`})">
          <van-icon name="contact" />
      </div>
  </div>
    <div class="nav">
      <van-tabs v-model="active" sticky swipeable>
        <van-tab :title="cate.name" v-for="cate in castList" :key='cate.id'>
        </van-tab>
      </van-tabs>
    </div>
</div>
</template>

<script>
import { getcatelist } from '@/apis/cate.js'
export default {
  data () {
    return {
      id: '',
      active: localStorage.getItem('hm_news_token') ? 1 : 0,
      castList: []
    }
  },
  async mounted () {
    //   先拿到用户id
    this.id = JSON.parse(localStorage.getItem('userinfo')).id
    // 获取所有栏目
    let res = await getcatelist()
    console.log(res)
    // 把数据存储在数组里面
    this.castList = res.data.data
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
.index{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    background-color: #f00;
    color: #fff;
    .left{
        .iconnew{
        font-size: 60px;
        padding: 0 10px;
        }
    }
    .center{
        height: 40px;
        font-size: 18px;
        flex:1;
        border-radius: 20px;
        margin-top: 5px;
        line-height: 40px;
        text-align: center;
        background-color: rgba(255,255,255,.5);
    }
    .right{
        font-size: 28px;
        padding: 0 20px
    }
}
</style>
