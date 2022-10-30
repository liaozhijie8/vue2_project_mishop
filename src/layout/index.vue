<template>
  <div class="layout">
    <NavHeader></NavHeader>
    <router-view></router-view>
    <ServiceBar></ServiceBar>
    <NavFooter></NavFooter>
  </div>
</template>
<script>
import NavHeader from '@/layout/NavHeader.vue'
import NavFooter from '@/layout/NavFooter.vue'
import ServiceBar from '@/layout/ServiceBar.vue'
export default {
  components: {
    NavHeader,
    NavFooter,
    ServiceBar
  },
  name: 'layout',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss"></style>
