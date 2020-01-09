<template>
  <div class="single" v-if="post.type === 1 && post.cover.length <= 2" @click="handleclick">
    <div class="left">
      <p class="content">{{post.title}}</p>
      <p class="info">
        <span>{{post.user.nickname}}</span>
        <span>{{post.comment_length}}跟帖</span>
      </p>
    </div>
    <img :src="post.cover[0].url" alt />

  </div>
  <div class="singlev" v-else-if="post.type === 2" @click="handleclick">
      <p class="content">{{post.title}}</p>
      <div class="imgs">
          <img :src="post.cover[0].url" alt />
          <div class="playv">
              <van-icon name="play"/>
          </div>
      </div>
      <p class="info">
        <span>{{post.user.nickname}}</span>
        <span>{{post.comment_length}}跟帖</span>
      </p>
  </div>
  <div class="singlet" v-else-if="post.type === 1 && post.cover.length >= 3" @click="handleclick">
    <div class="left">
      <p class="content">{{post.title}}</p>
      <div class="imgs">
              <img :src="imgs.url" alt v-for="imgs in post.cover" :key="imgs.id"/>
      </div>
      <p class="info">
        <span>{{post.user.nickname}}</span>
        <span>{{post.comment_length}}跟帖</span>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    handleclick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='less' scoped>
body {
  overflow-x: hidden;
  overflow-y: hidden;
}
.content {
      font-size: 14px;
      padding: 0px 5px;
      line-height: 24px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
      .info {
    font-size: 12px;
    padding-left:5px;
    color: #999;
    margin-bottom: 10px;
    > span:nth-of-type(1) {
      padding-right: 15px;
    }
  }
.single {
  padding: 15px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
  }
  img {
    width: 120/360 * 100vw;
    height: 70/360 * 100vw;
    object-fit: cover;
    padding-right: 5px;
  }
  .imgs {
    display: flex;
    padding: 10px 0 0 0;
    > img {
      flex: 1;
      padding: 0 5px;
      box-sizing: border-box;
      display: block;
    }
  }
  .video {
    width: 100%;
    height: 170/360 * 100vw;
    padding: 10px;
    box-sizing: border-box;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
.singlev {
  border-bottom: 1px solid #ccc;
  .imgs {
    position: relative;
    margin: 10px 0;
    > img {
    width: 100%;
    display: block;
    }
    .playv {
      width: 60*100/360vw;
      height: 60*100/360vw;
      background-color: rgba(255,255,255,0.2);
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      > .van-icon {
        position: absolute;
              font-size: 40*100/360vw;

        right: 15%;
        color: #fff;
        line-height: 60*100/360vw;
      }
    }
  };
}
.singlet {
  .imgs {
    display: flex;
    justify-content: space-between;
      img{
      width: 32.333%;
      margin: 10px 0;
    }
  }
}
</style>
