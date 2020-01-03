<template>
  <div class="hmbutton" @click="handleinput">
      <span :class='icon'></span>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['icon'],
  methods: {
    handleinput (event) {
      // console.log(event)
      this.$emit('input', event)
    }
  }
}
</script>

<style lang='less' scoped>
.hmbutton{
    width: 318*100vw/360;
    height: 50px;
    border: none;
    outline: none;
    background-color: #f00;
    border-bottom: 1px solid #fff;
    border-radius: 25px;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
}
</style>
