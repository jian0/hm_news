<template>
  <div class="hmcell">
      <div class="left">{{left}}</div>
      <div class="right">{{right}}<span class="iconfont iconjiantou1"></span>
</div>

  </div>
</template>

<script>
export default {
  props: ['left', 'right']
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
