<template>
  <div class="checkout-container">
    <Header :is-checkout="true"></Header>
    <div class="container">
      <div class="content">
        <addressBox :address-data="addressList"></addressBox>
        <ProductList :product-data="productList"></ProductList>
        <deliveryBox></deliveryBox>
        <PriceDetail @is-showmask="isShowMask"></PriceDetail>
        <SumbitBnt :address-data="addressList[0]"></SumbitBnt>
      </div>
    </div>
    <ServiceBarVue></ServiceBarVue>
    <NavFooterVue></NavFooterVue>
    <!-- 全屏遮罩 -->
    <div class="overlay" v-if="is_showMask"></div>
  </div>
</template>
<script>
import NavFooterVue from '@/layout/NavFooter.vue'
import ServiceBarVue from '@/layout/ServiceBar.vue'
import Header from '@/views/pay/components/payHeader/index.vue'
import addressBox from './components/address/index.vue'
import ProductList from './components/productList/index.vue'
import deliveryBox from './components/delivery/index.vue'
import PriceDetail from './components/priceDetail/index.vue'
import SumbitBnt from './components/paySumbit/index.vue'
export default {
  name: 'checkout',
  components: {
    NavFooterVue,
    ServiceBarVue,
    Header,
    addressBox,
    ProductList,
    deliveryBox,
    PriceDetail,
    SumbitBnt
  },
  data() {
    return {
      is_showMask: false,
      addressList: [
        {
          id: 1,
          name: '廖志杰',
          phone: 12323433222,
          address: '广东佛山市南海区狮山镇佛山科学技术学院(仙溪校区南区)'
        },
        {
          id: 2,
          name: '廖志杰',
          phone: 12323433222,
          address: '广东佛山市南海区狮山镇佛山科学技术学院(仙溪校区南区)'
        },
        {
          id: 3,
          name: '廖志杰',
          phone: 12323433222,
          address: '广东佛山市南海区狮山镇佛山科学技术学院(仙溪校区南区)'
        },
        {
          id: 4,
          name: '廖志杰',
          phone: 12323433222,
          address: '广东佛山市南海区狮山镇佛山科学技术学院(仙溪校区南区)'
        },
        {
          id: 5,
          name: '廖志杰',
          phone: 12323433222,
          address: '广东佛山市南海区狮山镇佛山科学技术学院(仙溪校区南区)'
        },
        {
          id: 6,
          name: '廖志杰',
          phone: 12323433222,
          address: '广东佛山市南海区狮山镇佛山科学技术学院(仙溪校区南区)'
        }
      ],
      productList: [
        {
          id: 1,
          img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656916238.05977286.png?thumb=1&w=30&h=30',
          name: '小米12',
          version: '8GB+128GB',
          color: '红色',
          price: 4999,
          number: 2
        },
        {
          id: 2,
          img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656916238.05977286.png?thumb=1&w=30&h=30',
          name: '小米12',
          version: '8GB+128GB',
          color: '红色',
          price: 499,
          number: 2
        },
        {
          id: 3,
          img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656916238.05977286.png?thumb=1&w=30&h=30',
          name: '小米12',
          version: '8GB+128GB',
          color: '红色',
          price: 4399,
          number: 2
        }
      ]
    }
  },
  methods: {
    isShowMask(val) {
      this.is_showMask = val
    }
  }
}
</script>
<style scoped lang="scss">
.checkout-container {
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .container {
    .content {
      background-color: #fff;
      padding: 20px;
      margin: 30px 0;
    }
  }
}
</style>
