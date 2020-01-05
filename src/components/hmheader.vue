<template>
  <div class="hmheader">
    <div>
        <slot name="left" ></slot>
    </div>
    <div>{{title}}</div>
    <div>
        <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang='less' scoped>
.hmheader{
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid #ccc;
    div:nth-of-type(1) {
        margin-left: 20px;
    }
}
</style>
