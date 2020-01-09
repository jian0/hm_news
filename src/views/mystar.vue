<template>
  <div class="satrList">
      <myheader title='我的收藏'>
          <span slot="left" class="iconfont iconjiantou2" @click="$router.back()"></span>
      </myheader>

<van-swipe-cell v-for="(item,index) in starList" :key="item.id" :before-close="beforeClose" :name='index'>

      <hmarticleblock :post='item' @click="$router.push({path: `/artiledetail/${item.id}`})"></hmarticleblock>

  <template slot="right" >
    <van-button square type="danger" text="取消收藏" />
  </template>
</van-swipe-cell>

</div>

</template>

<script>
import myheader from '@/components/hmheader.vue'
import hmarticleblock from '@/components/hmarticleBlock.vue'
import { getUserStarList } from '@/apis/user.js'
import { starArticle } from '@/apis/article.js'
import { Dialog } from 'vant'
export default {
  data () {
    return {
      starList: []
    }
  },
  components: {
    myheader, hmarticleblock
  },
  async mounted () {
    let res = await getUserStarList()
    console.log(res)
    this.starList = res.data.data
  },
  methods: {
    beforeClose ({ position, instance, name }) {
      switch (position) {
        case 'outside':
          instance.close()
          break
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(async () => {
            let res = await starArticle(this.starList[name].id)
            console.log(res)
            this.starList.splice(name, 1)
            // this.starList.has_star = !this.starList.has_star
            this.$toast.success(res.data.message)
            // instance.close()
          })
          break
      }
    }
  }
}
</script>

<style lang='less' scoped>
.van-button {
  top: 29%
}
</style>
