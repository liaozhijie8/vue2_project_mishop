<template>
  <div class="order-container">
    <div class="header">
      <div class="title">
        <span>我的订单</span><span>请谨防钓鱼链接或诈骗电话，</span
        ><span>了解更多></span>
      </div>
      <div class="sort">
        <div class="left">
          <span
            :class="{ 'sort-active': typeActive === 'all' }"
            @click="changeType('all')"
            >全部有效订单</span
          ><span>|</span
          ><span
            :class="{ 'sort-active': typeActive === 'awiatPay' }"
            @click="changeType('awiatPay')"
            >待支付</span
          ><span>|</span
          ><span
            :class="{ 'sort-active': typeActive === 'awiatAccep' }"
            @click="changeType('awiatAccep')"
            >待收货</span
          ><span>|</span><span>订单回收站</span>
        </div>
        <div class="right">
          <input type="text" placeholder="输入商品名称、订单号" /><button>
            <i class="el-icon-search"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="card-list">
      <OrderCard
        :order-data="item"
        v-for="item in newArray"
        :key="item.id"
      ></OrderCard>
    </div>
    <!-- 分页器 -->
    <div class="pag">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
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
      // 控制选项
      typeActive: 'all',
      orderList: [
        {
          id: 1,
          state: 1,
          content: {
            time: '2022年12月7日 18:00',
            name: '廖志杰',
            orderId: 234243242,
            pay: '在线支付',
            total: 233
          },
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
        },
        {
          id: 2,
          state: 1,
          content: {
            time: '2022年12月7日 18:00',
            name: '廖志杰',
            orderId: 2342434343242,
            pay: '在线支付',
            total: 233
          },
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
        },
        {
          id: 3,
          state: 0,
          content: {
            time: '2022年12月7日 18:00',
            name: '廖志杰',
            orderId: 2342565643242,
            pay: '在线支付',
            total: 233
          },
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
        },
        {
          id: 4,
          state: 2,
          content: {
            time: '2022年12月7日 18:00',
            name: '廖志杰',
            orderId: 243452565643242,
            pay: '在线支付',
            total: 233
          },
          list: [
            {
              id: 234243,
              img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1496649169.18879029.jpg?thumb=1&w=80&h=80',
              name: '米粉卡日租卡',
              type: '1元日租卡',
              price: 80,
              number: 3
            }
          ]
        }
      ],
      // 传给卡片数据
      newArray: []
    }
  },
  mounted() {
    this.newArray = this.orderList
  },
  methods: {
    awaitPayArray(val) {
      return this.orderList.filter((item) => {
        return item.state === val
      })
    },
    changeType(val) {
      this.typeActive = val
      if (val === 'awiatPay') {
        this.newArray = this.awaitPayArray(0)
      } else if (val === 'awiatAccep') {
        this.newArray = this.awaitPayArray(2)
      } else {
        this.newArray = this.orderList
      }
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
        .sort-active {
          color: orange;
        }

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
  .pag {
    text-align: center;
  }
}
</style>
