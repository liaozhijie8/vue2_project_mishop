<template>
  <div class="order-container">
    <div class="header">
      <div class="title">
        <span>我的订单</span><span>请谨防钓鱼链接或诈骗电话，</span
        ><span>了解更多></span>
      </div>
      <div class="sort">
        <div class="left">
          <span>全部有效订单</span><span>|</span><span>待支付</span
          ><span>|</span><span>待收货</span><span>|</span
          ><span>订单回收站</span>
        </div>
        <div class="right">
          <input type="text" placeholder="输入商品名称、订单号" /><button>
            <i class="el-icon-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card-list">
      <OrderCard :order-data="orderList"></OrderCard>
    </div>
  </div>
</template>
<script>
import OrderCard from '../components/orderCard/index.vue'
export default {
  name: 'order-page',
  components: {
    OrderCard
  },
  data() {
    return {
      orderList: [
        {
          id: 1,
          data: {
            state: 1,
            time: '2022年12月7日 18:00',
            name: '廖志杰',
            orderId: 234243242,
            pay: '在线支付',
            total: 233,
            list: [
              {
                id: 234243,
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1496649169.18879029.jpg?thumb=1&w=80&h=80',
                name: '米粉卡日租卡',
                type: '1元日租卡',
                price: 80,
                number: 2
              }
            ]
          }
        },
        {
          id: 2,
          data: {
            state: 0,
            time: '2022年12月7日 18:00',
            name: '廖志杰',
            orderId: 234243242242,
            pay: '在线支付',
            total: 233,
            list: [
              {
                id: 234243,
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1496649169.18879029.jpg?thumb=1&w=80&h=80',
                name: '米粉卡日租卡',
                type: '1元日租卡',
                price: 80,
                number: 2
              }
            ]
          }
        },
        {
          id: 3,
          data: {
            state: 1,
            time: '2022年12月7日 18:00',
            name: '廖志杰',
            orderId: 34243242242,
            pay: '在线支付',
            total: 233,
            list: [
              {
                id: 234243,
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1496649169.18879029.jpg?thumb=1&w=80&h=80',
                name: '米粉卡日租卡',
                type: '1元日租卡',
                price: 80,
                number: 2
              }
            ]
          }
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.order-container {
  background-color: #fff;
  padding: 40px;
  .header {
    .title {
      span {
        &:first-child {
          font-size: 22px;
          padding-right: 10px;
        }
        &:last-child {
          cursor: pointer;
          &:hover {
            color: red;
          }
        }
      }
    }
    .sort {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      .left {
        font-size: 14px;

        span {
          &:nth-child(even) {
            padding: 20px;
            color: rgb(202, 192, 192);
          }
          &:nth-child(odd) {
            cursor: pointer;
          }
        }
      }
      .right {
        input {
          width: 220px;
          height: 40px;
          border: 1px solid rgb(142, 140, 140);
          border-right: 0;
          vertical-align: middle;
          padding: 10px;
          font-size: 12px;
        }
        button {
          height: 40px;
          width: 40px;
          vertical-align: middle;
          background-color: #fff;
          border: 1px solid rgb(142, 140, 140);
        }
      }
    }
  }
}
</style>
