<template>
  <div class="commList">
    <myheader title="精彩跟帖">
      <span slot="left" class="iconfont iconjiantou2" @click="$router.back()"></span>
    </myheader>
    <div class="item" v-for="item in commList" :key="item.id">
      <div class="head">
        <img src="../assets/logo.png" alt />
        <div>
          <p>{{item.user.nickname}}</p>
          <span>2小时前</span>
        </div>
        <span @click="replycomment(item)">回复1</span>
      </div>
      <commentitem v-if="item.parent" :parent='item.parent'></commentitem>
      <div class="text">{{item.content}}</div>
    </div>
    <hmfooter :post='footer' @refresh='refresh' :obj='replyobj' @cancle='replyobj = null'></hmfooter>
  </div>
</template>

<script>
import myheader from '@/components/hmheader.vue'
import { getCommentList, getarticledetail } from '@/apis/article.js'
import commentitem from '@/components/commentitem.vue'
import hmfooter from '@/components/hmfooter.vue'

export default {
  data () {
    return {
      commList: [],
      footer: [],
      replyobj: null
    }
  },
  components: {
    myheader, commentitem, hmfooter
  },
  async mounted () {
    this.init()
    let res1 = await getarticledetail(this.$route.params.id)
    // console.log(res1)
    this.footer = res1.data.data
  },
  methods: {
    // 获取静态评论资源
    async init () {
      let res = await getCommentList(this.$route.params.id)
      // console.log(res)
      this.commList = res.data.data.length > 0 ? res.data.data : this.commList
      this.commList.map(value => {
        value.user.head_img = 'http://127.0.0.1:3000' + value.user.head_img
        return value
      })
    },
    refresh () {
      this.init()
      // 滚到顶部
      window.scrollTo(0, 0)
    },
    replycomment (item) {
      this.replyobj = item
    }
  }
}
</script>

<style lang='less' scoped>
.commList {
  border-top: 5px solid #ddd;
  padding: 0 15px;
  margin-bottom: 60px;
  .item {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > img {
        width: 50/360 * 100vw;
        height: 50/360 * 100vw;
        display: block;
        border-radius: 50%;
      }
      > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        > span {
          font-size: 12px;
          color: #999;
          line-height: 25px;
        }
      }
      > span {
        color: #999;
        font-size: 13px;
      }
    }
    .text {
      font-size: 14px;
      color: #333;
      padding: 20px 0 10px 0;
    }
  }
}

</style>
