<template>
  <div class="pay-header">
    <div class="container">
      <div class="left">
        <HeaderLogo></HeaderLogo>
        <div class="text-box">
          <div class="checkout" v-if="isCheckout">
            <p>确认订单</p>
          </div>
          <div class="payPage" v-else>
            <div class="title"><p>我的购物车</p></div>
            <div class="tip">
              温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <UserDorp></UserDorp>
      </div>
    </div>
  </div>
</template>
<script>
import UserDorp from '@/components/userDrop/index.vue'
import HeaderLogo from '@/layout/components/headerLogo/index.vue'

export default {
  name: 'pay-header',
  props: {
    // 是否处于确认订单状态
    isCheckout: {
      type: Boolean,
      default: false
    }
  },
  components: {
    UserDorp,
    HeaderLogo
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.pay-header {
  background-color: #fff;
  border-bottom: 1px solid orange;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    .left {
      display: flex;
      align-items: center;
      .text-box {
        .checkout{
          margin-left: 30px;
          p{
            font-size: 30px;
          }
        }
        .payPage {
          div {
            display: inline-block;
          }
          .title {
            font-size: 20px;
            margin: 0 10px;
          }
          .tip {
            font-size: 12px;
          }
        }
      }
    }
    .right {
      ::v-deep(.drop-down) {
        a {
          color: gray;
          &:hover {
            color: red;
          }
        }
      }
    }
  }
}
</style>
