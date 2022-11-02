<template>
  <div class="checkout-container">
    <Header :is-checkout="true"></Header>
    <div class="container">
      <div class="content">
        <addressBox :address-data="addressList"></addressBox>
      </div>
    </div>
    <ServiceBarVue></ServiceBarVue>
    <NavFooterVue></NavFooterVue>
  </div>
</template>
<script>
import NavFooterVue from '@/layout/NavFooter.vue'
import ServiceBarVue from '@/layout/ServiceBar.vue'
import Header from '@/views/pay/components/payHeader/index.vue'
import addressBox from './components/address/index.vue'
export default {
  name: 'checkout',
  components: {
    NavFooterVue,
    ServiceBarVue,
    Header,
    addressBox
  },
  data() {
    return {
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
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.checkout-container {
  .container {
    .content {
      background-color: #fff;
      margin: 30px 0;
    }
  }
}
</style>
