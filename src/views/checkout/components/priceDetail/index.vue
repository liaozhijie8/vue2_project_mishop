<template>
  <div class="price-container">
    <div class="header">
      <span>发票</span>
      <span>电子普通发票</span>
      <span>个人</span>
      <span>商品明细</span>
      <span>修改></span>
    </div>
    <div class="content">
      <div class="left">
        <div @click="couponClick('chose')">
          <i class="el-icon-circle-plus-outline"></i
          ><span class="title">使用优惠券</span><span class="tip">无可用</span>
        </div>
        <div @click="couponClick('use')">
          <i class="el-icon-circle-plus-outline"></i
          ><span class="title">使用小米礼品卡</span>
        </div>
      </div>
      <div class="right">
        <div>
          <p>商品件数:</p>
          <p>商品总价:</p>
          <p>活动优惠:</p>
          <p>优惠券折扣:</p>
          <p>运费:</p>
          <p>应付总金额:</p>
        </div>
        <div>
          <p>7元</p>
          <p>8989元</p>
          <p>-0元</p>
          <p>-0元</p>
          <p>0元</p>
          <p><i>9898</i>元</p>
        </div>
      </div>
    </div>
    <!-- 优惠券弹出层 -->
    <couponBox
      @close-event="isDialg"
      :is-active="is_dialog"
      :dialog-type="dialogType"
      class="coupon-box"
      :class="{ 'use-coupon': dialogType === 'use' }"
    ></couponBox>
  </div>
</template>
<script>
import couponBox from '../coupon/index.vue'
export default {
  name: 'price-detail',
  components: {
    couponBox
  },
  data() {
    return {
      is_dialog: false,
      dialogType: ''
    }
  },
  methods: {
    couponClick(val) {
      this.dialogType = val
      this.is_dialog = true
      return this.$emit('is-showmask', true)
    },
    isDialg(val) {
      this.is_dialog = val
      return this.$emit('is-showmask', false)
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
.price-container {
  position: relative;
  border-bottom: 1px solid $colorF;
  .coupon-box {
    position: absolute;
    top: 100px;
    z-index: 99;
  }
  .use-coupon {
    top: 150px;
  }
  .header {
    margin: 30px 0;
    span {
      margin-right: 20px;
      color: red;
      &:first-child {
        font-size: 16px;
        color: black;
        margin-right: 50px;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    .left {
      div {
        margin-top: 20px;
        cursor: pointer;
        &:hover {
          .title {
            color: red;
          }
        }
        i {
          margin: 0 10px;
          font-size: 20px;
          vertical-align: middle;
          font-weight: 800;
          color: red;
        }
        span {
          vertical-align: middle;
        }
        .tip {
          margin-left: 20px;
          color: gray;
        }
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      div {
        text-align: end;
        p {
          margin-bottom: 5px;
        }
        &:first-child {
          margin-right: 10px;
          p {
            &:last-child {
              margin-top: 20px;
            }
          }
        }
        &:last-child {
          color: red;
          p {
            &:last-child {
              margin-top: 20px;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
