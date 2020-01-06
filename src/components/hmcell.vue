<template>
  <div class="hmcell" @click="handlename">
      <div class="left">{{left}}</div>
      <div class="right">{{type==='password'?'********':right}}<span class="iconfont iconjiantou1" ></span>
</div>

  </div>
</template>

<script>
export default {
  props: ['left', 'right', 'type'],
  methods: {
    handlename (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='less'>
.hmcell{
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    > .right{
        font-size: 14px
    }
}
</style>
