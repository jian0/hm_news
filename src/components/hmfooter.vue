<template>
  <div class="commentdetail">
    <div class="addcomment" v-show='!isFocus'>
      <input type="text" placeholder="写跟帖" @focus="handlerFocus" />
      <span class="comment" @click="$router.push({path: `/postcomment/${post.id}`})">
        <i class="iconfont iconpinglun-"></i>
        <em>{{post.comment_length}}</em>
      </span>
      <i class="iconfont iconshoucang" @click="handlestar(post.id)" :class="{active:post.has_star}"></i>
      <i class="iconfont iconfenxiang"></i>
    </div>
    <div class="inputcomment" v-show='isFocus'>
        <textarea  ref='commtext' rows="5" ></textarea>
        <div>
            <span @click="sendcontent">发送</span>
            <span @click='handlereply'>取消</span>
        </div>
    </div>
  </div>
</template>

<script>
import { starArticle, sendContent } from '@/apis/article.js'
export default {
  props: ['post', 'obj'],
  data () {
    return {
      isFocus: false
    }
  },
  watch: {
    // 监听obj对象，如果有变化则表示点击了回复按钮，显示评论框
    obj () {
      if (this.obj) {
        this.isFocus = true
      }
    }
  },
  methods: {
    // 发表评论
    async sendcontent () {
      // console.log(this.post.id)
      // console.log(this.obj)
      if (this.$refs.commtext.value.trim().length !== 0) {
        let res = await sendContent(this.post.id, { content: this.$refs.commtext.value,
          parent_id: this.obj ? this.obj.id : null })
        // console.log(res)
        if (res.data.message === '评论发布成功') {
          // 发表成功后关闭输入框
          this.isFocus = false
          // 弹窗
          this.$toast.success(res.data.message)
          // 清空文本域的内容
          this.$refs.commtext.value = ''
          // 红色评论数+1
          this.post.comment_length++
          this.$emit('refresh')
        }
      } else {
        this.$toast.fail('评论内容不能为空')
      }
    },
    //   获取焦点时触发
    handlerFocus () {
      this.isFocus = !this.isFocus
      this.$refs.commtext.focus()
    },
    // 收藏文章
    async handlestar (id) {
      let res = await starArticle(id)
      //   console.log(res)
      //   console.log(this)
      this.post.has_star = !this.post.has_star
      this.$toast.success(res.data.message)
    },
    // 取消按钮事件
    handlereply () {
      this.$emit('cancle')
      this.isFocus = false
    }
  }
}
</script>

<style lang='less' scoped>
.active {
    color: #f00
}
.commentdetail{
    width: 100vw;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0 ;
}
.inputcomment{
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    background-color: #fff;
    align-items: flex-end;
    textarea{
        flex: 3;
        background-color: #eee;
        border:none;
        border-radius: 10px;
        padding: 10px;
    }
    div{
        padding: 20px;
    }
    span {
        display: block;
        flex: 1;
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        background-color: #f00;
        color:#fff;
        text-align: center;
        border-radius: 6px;
        font-size: 13px;
    }
}
.addcomment {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  background-color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  > input {
    flex: 4;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    border: none;
    background-color: #eee;
    padding-left: 20px;
    font-size: 14px;
  }
  i {
    font-size: 20px;
  }
  > span {
    flex: 1;
    position: relative;
    > em {
      position: absolute;
      right: 0;
      top: -5px;
      font-size: 10px;
      background-color: #f00;
      color: #fff;
      border-radius: 5px;
      padding: 3px 5px;
    }
  }
  > i {
    flex: 1;
  }
}
</style>
