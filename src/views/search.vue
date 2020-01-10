<template>
  <div class="search">
    <div class="header">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <van-search
        v-model="key"
        placeholder="请输入搜索关键词"
        shape="round"
      >
      </van-search>
      <div @click="onSearch(key)">搜索</div>
    </div>
    <div class="historyList">
      <h2>历史记录</h2>
      <!-- <a href="javascript:" v-for="(item,index) in keywords" :key="index">{{item}}</a> -->
      <a href="javascript:" v-for="(item,index) in keywords" :key="index">{{item}}</a>
    </div>
    <div class="historyList">
      <h2>搜索结果</h2>
      <router-link :to="`/artiledetail/${article.id}`" v-for="article in searchList" :key="article.id">{{article.title}}</router-link>
    </div>
  </div>
</template>

<script>
import { searchpost } from '@/apis/article.js'
export default {
  data () {
    return {
      key: '',
      searchList: [],
      keywords: []
    }
  },
  mounted () {
    this.keywords = this.getdata()
  },
  methods: {
    async onSearch (key) {
    //   console.log(this.key) // 搜索框的内容
      let res = await searchpost({ keyword: key })
      //   this.keywords.unshift(this.key)
      //   console.log(res)
      if (res.data.data.length > 0) {
        this.searchList = res.data.data
      }
      let keydata = this.getdata()
      //   console.log(keydata)

      let index = keydata.indexOf(key)
      if (index !== -1) {
        keydata.splice(index, 1)
      }
      keydata.unshift(key)
      localStorage.setItem('search_keyword', JSON.stringify(keydata))
    },
    getdata () {
      return JSON.parse(localStorage.getItem('search_keyword') || '[]')
    }
  }
}
</script>

<style lang='less' scoped>
  .header{
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    .van-search{
      flex: 1;
      padding: 5px 12px;
    }
  }
  .historyList{
    padding:10px;
    border-bottom: 1px solid #ccc;
    a {
        overflow: hidden;
        text-overflow:ellipsis; // 省略号
        white-space: nowrap; // 不要换行，一行显示
    }
    h2{
      line-height: 40px;
      font-weight: bold;
    }
    > a {
      display: block;
      text-decoration: underline;
      line-height: 30px;
      color:#666;
    }
  }
</style>
