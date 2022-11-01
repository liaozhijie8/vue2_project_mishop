<template>
  <div class="pay-page">
    <ServiceBarVue></ServiceBarVue>
    <NavFooterVue></NavFooterVue>
  </div>
</template>
<script>
import NavFooterVue from '@/layout/NavFooter.vue'
import ServiceBarVue from '@/layout/ServiceBar.vue'
export default {
  name: 'pay-page',
  components: {
    NavFooterVue,
    ServiceBarVue
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss"></style>
