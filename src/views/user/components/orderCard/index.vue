<template>
  <div class="card-container" :class="{ 'card-active': !orderData.state }">
    <div class="order-state" :class="{ 'state-active': !orderData.state }">
      <div class="left">
        <p v-if="orderData.state===1">已收货</p>
        <p v-else-if="orderData.state===2" class="awaitAccep">待收货</p>
        <p v-else class="awaitPay">等待付款</p>
        <p>
          <span>{{ orderData.content.time }}</span
          ><span>|</span><span>{{ orderData.content.name }}</span
          ><span>|</span><span>订单号:{{ orderData.content.orderId }}</span
          ><span>|</span><span>在线支付</span>
        </p>
      </div>
      <div class="right">
        <p>
          <span>{{ orderData.state ? '实付金额' : '应付金额' }}:</span
          ><span>{{ orderData.content.total }}</span
          ><span>元</span>
        </p>
      </div>
    </div>
    <div class="product-list">
      <div class="list" v-for="item in orderData.list" :key="item.id">
        <div class="img">
          <img :src="item.img" alt="" />
        </div>
        <div class="detail">
          <div class="name">
            <span>{{ item.name }}</span
            ><span>{{ item.type }}</span>
          </div>
          <div class="price">
            <span>{{ item.price }}</span
            ><span>X</span><span>{{ item.number }}</span>
          </div>
        </div>
      </div>
      <div class="action">
        <button class="pay" v-if="orderData.state===0">立即付款</button>
        <button>订单详情</button>
        <button v-if="orderData.state">申请售后</button>
        <button>联系客服</button>
      </div>
    </div>
    <!-- 删除按钮 -->
    <i class="el-icon-delete delete-icon"></i>
  </div>
</template>
<script>
export default {
  name: 'order-card',
  props: {
    orderData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
* {
  box-sizing: border-box;
}
.card-container {
  position: relative;
  border: 1px solid rgb(170, 167, 167);
  margin-bottom: 20px;
  &:hover {
    .delete-icon {
      opacity: 1;
    }
  }
  .delete-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 16px;
    color: $colorD;
    opacity: 0;
    cursor: pointer;
  }
  .order-state {
    border-bottom: 1px solid rgb(170, 167, 167);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .left {
      .awaitPay{
        color: red;
      }
      .awaitAccep{
        color: red;
      }
      p {
        &:first-child {
          font-size: 16px;
          margin-bottom: 10px;
        }
        &:last-child {
          span {
            color: $colorD;
            &:nth-child(even) {
              padding: 0 5px;
              color: $colorE;
            }
          }
        }
      }
    }
    .right {
      align-self: flex-end;
      p {
        span {
          &:nth-child(2) {
            font-size: 24px;
            padding: 0 5px;
          }
        }
      }
    }
  }
  .state-active {
    background-color: rgba(225, 185, 152, 0.342);
    border-bottom: 1px solid rgba(225, 185, 152, 0.342);
  }
  .product-list {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    .list {
      display: flex;
      align-items: center;
      .img {
        width: 80px;
        height: 80px;
      }
      .detail {
        padding-left: 20px;
        div {
          span {
            padding-right: 5px;
          }
        }
        .price {
          margin-top: 10px;
        }
      }
    }
    .action {
      button {
        display: block;
        margin-bottom: 10px;
        width: 120px;
        height: 28px;
        font-size: 12px;
        background-color: $colorG;
        border: 1px solid $colorD;
        color: $colorC;
        cursor: pointer;
      }
      .pay{
        background-color: red;
        color: white;
        border: 0;
      }
    }
  }
}
.card-active {
  border: 1px solid rgba(211, 85, 60, 0.997);
}
</style>
