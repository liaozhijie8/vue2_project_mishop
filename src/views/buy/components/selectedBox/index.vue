<template>
  <div class="selected-box">
    <div class="list">
      <div class="left">
        <span>{{ goodsInfo.goods_name }}</span>
        <span>{{ colorData.spec }}</span>
        <span>{{ versionData.spec }}</span>
      </div>
      <div class="right">
        <span>{{ versionData.price }}元</span>
      </div>
    </div>
    <div class="list" v-for="(item, index) in serviceData" :key="index">
      <div class="left">
        <span>{{ item.service }}</span>
      </div>
      <div class="right">
        <span>{{ item.price }}元</span>
      </div>
    </div>
    <div class="totalPrice">
      总计:<span>{{ total }}元</span>
    </div>
  </div>
</template>
<script>
import { priceHandle } from '@/utils/dataHandle'
export default {
  name: 'selected-box',
  props: {
    goodsInfo: {
      type: Object,
      default: function () {
        return {}
      }
    },
    colorData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    versionData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    serviceData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    // 把对象转化为数组
  },
  watch: {
    // $props: {
    //   handler() {
    //     console.log('111')
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  computed: {
    total() {
      return (
        priceHandle(this.$props.serviceData, 'price') +
        this.$props.versionData.price
      )
    }
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
