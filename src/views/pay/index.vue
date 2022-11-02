<template>
  <div class="pay-page">
    <Header></Header>
    <ProductList></ProductList>
    <PriceCard></PriceCard>
    <Recommend></Recommend>
    <ServiceBarVue></ServiceBarVue>
    <NavFooterVue></NavFooterVue>
  </div>
</template>
<script>
import NavFooterVue from '@/layout/NavFooter.vue'
import ServiceBarVue from '@/layout/ServiceBar.vue'
import Header from './components/payHeader/index.vue'
import Recommend from '@/components/recommend/index.vue'
import ProductList from './components/productList/index.vue'
import PriceCard from './components/priceCard/index.vue'
export default {
  name: 'pay-page',
  components: {
    NavFooterVue,
    ServiceBarVue,
    Header,
    Recommend,
    ProductList,
    PriceCard
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss"></style>
