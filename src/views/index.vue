<template>
  <div class="index">
      <div class="left">
          <span class="iconfont iconnew"></span>
      </div>
      <div class="center">
          <van-icon name="search" />
          <span>搜索新闻</span>
      </div>
      <div class="right">
          <van-icon name="contact" />
      </div>
  </div>
</template>

<script>
export default {

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
