<template>
  <div class="sumbitBnt">
    <button @click="gotopay">加入购物车</button>
    <button><i class="el-icon-star-off"></i><span>喜欢</span></button>
  </div>
</template>
<script>
export default {
  name: 'sumbit-bnt',
  data() {
    return {}
  },
  methods: {
    gotopay() {
      this.$router.push('/buy/successTip')
    }
  }
}
</script>
<style scoped lang="scss">
.sumbitBnt {
  margin-top: 20px;
  button {
    height: 54px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    vertical-align: middle;
    &:first-child {
      width: 300px;
      background-color: rgb(207, 114, 59);
      color: white;
    }
    &:last-child {
      width: 142px;
      &:hover {
        background-color: #c8c3c3;
      }
      i {
        vertical-align: middle;
        font-size: 20px;
      }
      span {
        margin-left: 8px;
        vertical-align: middle;
      }
    }
  }
}
</style>
