<template>
  <div class="card-container">
    <div
      class="card-box"
      :class="{ 'card-active': !item.data.state }"
      v-for="item in rangerList"
      :key="item.id"
    >
      <div class="order-state" :class="{ 'state-active': !item.data.state }">
        <div class="left">
          <p>{{ item.data.state ? '已收货' : '等待付款' }}</p>
          <p>
            <span>{{ item.data.time }}</span
            ><span>|</span><span>{{ item.data.name }}</span
            ><span>|</span><span>订单号:{{ item.data.orderId }}</span
            ><span>|</span><span>在线支付</span>
          </p>
        </div>
        <div class="right">
          <p>
            <span>{{ item.data.state ? '实付金额' : '应付金额' }}:</span
            ><span>{{ item.data.total }}</span
            ><span>元</span>
          </p>
        </div>
      </div>
      <div class="product-list" v-for="list in item.data.list" :key="list.id">
        <div class="list">
          <div class="img">
            <img :src="list.img" alt="" />
          </div>
          <div class="detail">
            <div class="name">
              <span>{{ list.name }}</span
              ><span>{{ list.type }}</span>
            </div>
            <div class="price">
              <span>{{ list.price }}</span
              ><span>X</span><span>{{ list.number }}</span>
            </div>
          </div>
        </div>
        <div class="action">
          <button>立即付款</button>
          <button>订单详情</button>
          <button>联系客服</button>
        </div>
      </div>
      <!-- 删除按钮 -->
      <i class="el-icon-delete delete-icon"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order-card',
  props: {
    orderData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      rangerList: this.$props.orderData
    }
  },
  methods: {
    /* 筛选出已收货订单 */
    doneArray() {
      return this.$props.orderData.filter((item) => {
        return item.data.state === 1
      })
    },
    // 筛选出待支付订单
    uppayArray() {
      return this.$props.orderData.filter((item) => {
        return item.data.state === 0
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
* {
  box-sizing: border-box;
}
.card-box {
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
    }
  }
}
.card-active {
  border: 1px solid rgba(211, 85, 60, 0.997);
}
</style>
