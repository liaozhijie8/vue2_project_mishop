<template>
  <div class="text-box">
    <h2>{{ data.goods_name }}</h2>
    <p class="sale-desc">
      <span class="onSale"
        >「10月20日20点-11月11日，全版本限时优惠300元!24期免息；延保/碎屏保5折；10月直播间下单赠保护壳」</span
      >
      骁龙8+ 旗舰处理器 | 徕卡光学镜头 | 徕卡原生双画质 | 徕卡水印、大师镜头包 |
      全场景疾速抓拍 | 5000万三主摄 | 小米自研澎湃P1芯片 | 120W小米澎湃秒充 |
      4600mAh大电量 | 2K AMOLED屏
    </p>
    <p class="price">
      <span>{{ priceData }}<span>元</span></span>
      <span><del>4699 元</del></span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'text-box',
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    },
    priceData: {
      type: Number
    }
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.$props.data)
  }
}
</script>
<style scoped lang="scss">
.text-box {
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
  .sale-desc {
    margin-top: 10px;
    color: rgb(167, 163, 163);
    .onSale {
      color: red;
    }
  }
  .price {
    margin-top: 20px;
    span {
      margin-left: 5px;
      &:first-child {
        color: red;
        font-size: 16px;
      }
      &:last-child {
        color: gray;
      }
    }
    del {
      margin-left: 5px;
    }
  }
}
</style>
