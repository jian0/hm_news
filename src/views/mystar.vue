<template>
  <div class="satrList">
      <myheader title='我的收藏'>
          <span slot="left" class="iconfont iconjiantou2" @click="$router.back()"></span>
      </myheader>
      <hmarticleblock v-for="item in starList" :key="item.id" :post='item' @click="$router.push({path: `/artiledetail/${item.id}`})"></hmarticleblock>
</div>

</template>

<script>
import myheader from '@/components/hmheader.vue'
import hmarticleblock from '@/components/hmarticleBlock.vue'
import { getUserStarList } from '@/apis/user.js'
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
  }
}
</script>

<style>

</style>
