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
          <!-- 上拉加载 -->
            <van-list
                v-model="cate.loading"
                :finished="cate.finished"
                finished-text="没有更多了"
                @load="onLoad"
                :offset= "10"
                :immediate-check='false'>
            <!-- 下拉刷新 -->
            <van-pull-refresh
                  v-model="cate.isLoading"
                  success-text="刷新成功"
                  @refresh="onRefresh">
                <hmarticleblock v-for="item in cate.postList" :key="item.id" :post='item'></hmarticleblock>
            </van-pull-refresh>
            </van-list>
        </van-tab>
      </van-tabs>
    </div>
</div>
</template>

<script>
import { getcatelist } from '@/apis/cate.js'
import { getarticlelist } from '@/apis/article.js'
import hmarticleblock from '@/components/hmarticleBlock.vue'
export default {
  data () {
    return {
      id: '',
      active: localStorage.getItem('hm_news_token') ? 1 : 0,
      castList: []
    }
  },
  components: {
    hmarticleblock
  },
  watch: {
    active () {
      //    当新闻数据条数为0的时候，加载数据
      if (this.castList[this.active].postList.length === 0) {
        this.init()
      }
    //   console.log(this.active)
    }
  },
  async mounted () {
    //   先拿到用户id
    this.id = JSON.parse(localStorage.getItem('userinfo') || '{}').id
    // 获取所有栏目
    let res = await getcatelist()
    // console.log(res)
    // 把数据存储在数组里面
    this.castList = res.data.data

    // 进行数据改造
    this.castList = this.castList.map(arr => {
      return {
        ...arr,
        pageIndex: 1, // 当前所在页
        pageSize: 5, // 当前栏目显示的条数
        postList: [], // 当前栏目的新闻列表数据
        loading: false, // 当前栏目的加载状态
        finished: false, // 当前栏目是否加载完毕
        isLoading: false // 当前栏目是否在刷新

      }
    })
    // console.log(this.castList)
    this.init()
  },
  methods: {
    //   上拉加载
    onLoad () {
      // this.castList[this.active].finished = true
      if (this.castList[this.active].isLoading === false) {
        this.castList[this.active].pageIndex++
        setTimeout(() => {
          this.init()
        }, 1000)
      }
    },
    // 下拉刷新
    onRefresh () {
      this.castList[this.active].pageIndex = 1
      this.castList[this.active].postList.length = 0
      setTimeout(() => {
        this.init()
      }, 1000)
      this.castList[this.active].finished = false
    },
    //   获取新闻数据
    async init () {
      let id = this.castList[this.active].id
      let res = await getarticlelist({
        pageIndex: this.castList[this.active].pageIndex,
        pageSize: this.castList[this.active].pageSize,
        category: id
      })
      if (this.castList[this.active].loading) {
        this.castList[this.active].loading = false
      }
      if (this.castList[this.active].isLoading) {
        this.castList[this.active].isLoading = false
      }
      // 当加载的数据条数小于每页展示的数据条数时
      if (res.data.data.length < this.castList[this.active].pageSize) {
        // 结束加载
        this.castList[this.active].finished = true
      }
      // console.log(id)
      console.log(res)
      this.castList[this.active].postList.push(...res.data.data)
    }
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
