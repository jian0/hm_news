<template>
  <input class="hminput" :value="value" :class="{success:statu,error:!statu}" @input="handleinput" @blur="handleblur">
</template>

<script>
export default {
  data () {
    return {
      statu: true
    }
  },
  props: ['rules', 'msg', 'value'],
  methods: {
    handleinput (event) {
      console.log(event.target.value)
      let value = event.target.value
      if (this.rules && !this.rules.test(value)) {
        this.statu = true
      } else {
        this.statu = false
      }
      this.$emit('input', value)
    },
    handleblur (event) {
      let value = event.target.value
      if (this.rules.test(value)) {
        console.log(123)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.hminput{
    width: 318*100vw/360;
    height: 50px;
    line-height: 50px;
    border: none;
    outline: none;
    border-bottom: 3px solid #000;
    font-size: 25px
}
.success{
    border-bottom-color: greenyellow
}
.error{
    border-bottom-color: red
}
</style>
