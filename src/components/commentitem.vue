<template>
  <div class="comment">
      <commentitem v-if="parent.parent" :parent='parent.parent'></commentitem>
      <div class="top">
          <span>{{parent.user.nickname}}</span>
          <span>回复</span>
      </div>
      <div class="bottom">
          <span>{{parent.content}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'commentitem',
  props: ['parent']
}
</script>

<style lang='less' scoped>
    .comment {
        padding: 5px;
        border: 1px solid #ccc;
        .top {
            display: flex;
            justify-content: space-between;
        }
        .bottom {
            line-height: 50px;
        }
    }
</style>
