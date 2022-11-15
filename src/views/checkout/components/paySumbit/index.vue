<template>
  <div>
    <!-- 弹出修改层 -->
    <AddressDialog :is-visible="is_dialog" @close-event="test"></AddressDialog>
    <div class="pay-container">
      <div class="left">
        <div class="address" v-show="!ishasAddress">
          <div>
            <span>{{ data.consigness }}</span
            ><span>{{ data.phone | phoneFilter }}</span>
          </div>
          <div>
            <span>{{ data.address }}</span
            ><span @click="isDialog()">修改</span>
          </div>
        </div>
      </div>
      <div class="right">
        <button @click="$router.go(-1)">返回购物车</button>
        <button @click="goToPay">立即下单</button>
      </div>
    </div>
  </div>
</template>
<script>
import AddressDialog from '../addressEdit/index.vue'
import store from '@/store'
export default {
  name: 'pay-sumbit',
  components: {
    AddressDialog
  },
  props: {
    addressData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  filters: {
    phoneFilter(val) {
      if (val) {
        const reg = /^(.{3}).*(.{4})$/
        return val.replace(reg, '$1****$2')
      }
    }
  },
  data() {
    return { is_dialog: false, data: {} }
  },
  computed: {
    ishasAddress() {
      return JSON.stringify(this.$props.addressData) === '{}'
    },
    addressChange() {
      return this.$props.addressData
    },
    test11() {
      return store.state.address.addressList
    }
  },
  watch: {
    addressChange() {
      this.data = this.$props.addressData
    },
    test11(val) {
      console.log(val)
      const { id } = this.$props.addressData
      store.commit('address/updateAddress', id)
      this.data = store.state.address.updateList[0]
    }
  },
  methods: {
    goToPay() {
      if (this.ishasAddress) {
        alert('请先选择地址')
      }
    },
    test(val) {
      this.is_dialog = val
    },
    // 弹出修改层
    isDialog() {
      const { id } = this.$props.addressData
      store.commit('address/setIs_add', false)
      store.commit('address/updateAddress', id)
      this.is_dialog = true
    }
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
