<template>
  <div class="list-container">
    <div class="title">商品及优惠券</div>
    <div class="list">
      <div class="content" v-for="item in productData" :key="item.id">
        <div class="left">
          <div class="photo">
            <img
              :src="item.img"
              alt="商品图片"
            />
          </div>
          <span>{{item.name}}</span>
          <span>{{item.version}}</span>
          <span>{{item.color}}</span>
        </div>
        <div class="mid">
          <span>{{item.price}}</span>
          <i class="el-icon-close"></i>
          <span>{{item.number}}</span>
        </div>
        <div class="right">
          <span>4399元</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-list',
  props: {
    productData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.list-container {
  .title {
    margin: 20px 0;
    font-size: 16px;
  }
  .content {
    display: flex;
    margin: 20px 0;
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      .photo {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      span {
        margin-right: 5px;
      }
    }
    .mid {
      width: 200px;
    }
    .right {
      width: 200px;
      margin-right: 20px;
      text-align: end;
      span {
        color: red;
      }
    }
  }
}
</style>
