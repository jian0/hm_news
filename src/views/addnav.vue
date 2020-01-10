<template>
  <div class="addnav">
    <myheader title='栏目管理'>
        <span slot="left" class="iconfont iconjiantou2" @click="$router.back()"></span>
    </myheader>
    <div class="add">
        <h2>点击删除以下频道</h2>
        <span v-for="(ditem,index) in delnavList" :key="ditem.id" @click="delone(index)">{{ditem.name}}</span>
    </div>
    <div class="add">
        <h2>点击添加以下频道</h2>
        <span v-for="(aitem,index) in addnavList" :key="aitem.id" @click="addone(index)">{{aitem.name}}</span>
    </div>
  </div>
</template>

<script>
import myheader from '@/components/hmheader.vue'
import { getcatelist } from '@/apis/cate.js'
export default {
  data () {
    return {
      delnavList: [],
      addnavList: []
    }
  },
  components: {
    myheader
  },
  async mounted () {
    let deldata = JSON.parse(localStorage.getItem('del_nav_data'))
    let adddata = JSON.parse(localStorage.getItem('add_nav_data'))
    // console.log(deldata)
    if (localStorage.getItem('del_nav_data')) {
      this.addnavList = deldata
    } else {
      let res = await getcatelist()
      console.log(res)
      this.delnavList = res.data.data
      //   如果登录过了，清除前面2条数据，否则清除1条
      if (localStorage.getItem('hm_news_token')) {
        this.delnavList = this.delnavList.splice(2)
      } else {
        this.delnavList = this.delnavList.splice(1)
      }
    }

    if (localStorage.getItem('add_nav_data')) {
      this.delnavList = adddata
    }
  },
  methods: {
    delone (index) {
      // 将移除的选项添加到下面的数组
      this.addnavList.push(this.delnavList[index])

      //   删除点击的那一项
      this.delnavList.splice(index, 1)

      //   本地存储
      localStorage.setItem('del_nav_data', JSON.stringify(this.addnavList))
      localStorage.setItem('add_nav_data', JSON.stringify(this.delnavList))
    },
    addone (index) {
      // 将移除的选项添加到下面的数组
      this.delnavList.push(this.addnavList[index])
      //   删除点击的那一项
      this.addnavList.splice(index, 1)

      //   本地存储
      localStorage.setItem('del_nav_data', JSON.stringify(this.addnavList))
      localStorage.setItem('add_nav_data', JSON.stringify(this.delnavList))
    }
  }
}
</script>

<style lang='less' scoped>
    .add {
        clear: both;
        margin-left: 10px;
        h2 {
            font-weight: bold;
            margin: 30px 0;
        }
        > span{
            float: left;
            border: 1px solid #ccc;
            padding: 10px 20px;
            margin: 5px 10px;
        }
    }
</style>
