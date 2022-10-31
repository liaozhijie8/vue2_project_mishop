<template>
  <div class="selected-box">
    <div class="list" v-for="(item, index) in 3" :key="index">
      <div class="left">
        <span>xiaomi 12S Pro</span>
        <span>8GB + 128GB</span>
        <span>白色</span>
      </div>
      <div class="right">
        <span>4399元</span>
      </div>
    </div>
    <div class="totalPrice">总计:<span>4399元</span></div>
  </div>
</template>
<script>
export default {
  name: 'selected-box',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.selected-box {
  margin-top: 20px;
  background-color: #ede7e7;
  padding: 20px;
  .list {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    .left {
      span {
        margin-right: 5px;
      }
    }
  }
  .totalPrice {
    margin-top: 30px;
    color: red;
    font-size: 20px;
    span {
      margin-left: 10px;
    }
  }
}
</style>
