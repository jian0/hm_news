<template>
  <div class="comment">
      <commentitem v-if="parent.parent" :parent='parent.parent' @replything='replycomment'></commentitem>
      <div class="top">
          <span>{{parent.user.nickname}}</span>
          <!-- 子传父 -->
          <span @click="replycomment(parent)">回复</span>
      </div>
      <div class="bottom">
          <span>{{parent.content}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'commentitem',
  props: ['parent'],
  methods: {
    replycomment (parent) {
    //   console.log(parent)
      this.$emit('replything', parent)
    }
  }
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
