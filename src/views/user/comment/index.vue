<template>
  <div class="comment-box">
    <div class="title">订单评价</div>
    <div class="content">
      <p>暂时没有符合条件的商品</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment-box',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.comment-box{
  background-color: #fff;
  padding: 40px;
  .title{
    font-size: 20px;
  }
  .content{
    margin-top: 30px;
    text-align: center;
    p{
      font-size: 14px;
      color: rgb(143, 134, 134);
    }
  }
}
</style>
