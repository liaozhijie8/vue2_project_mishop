<template>
  <div class="pay-container">
    <div class="left">
      <div class="address">
        <div><span>{{addressData.name}}</span><span>{{addressData.phone}}</span></div>
        <div><span>{{addressData.address}}</span><span>修改</span></div>
      </div>
    </div>
    <div class="right">
      <button>返回购物车</button>
      <button>立即下单</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pay-sumbit',
  props: {
    addressData: {
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
.pay-container {
  padding: 20px 30px 0 30px;
  display: flex;
  justify-content: space-between;
  .left {
    .address {
      div {
        &:first-child {
          margin-bottom: 5px;
        }
        span {
          margin-right: 5px;
        }
        &:last-child {
          span {
            &:last-child {
              color: red;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .right {
    button {
      border: none;
      width: 160px;
      height: 38px;
      margin-left: 30px;
      cursor: pointer;
      &:first-child {
        color: $colorC;
        background-color: #fff;
        border: 1px solid $colorF;
      }
      &:last-child {
        background-color: rgb(254, 168, 88);
        color: white;
      }
    }
  }
}
</style>
