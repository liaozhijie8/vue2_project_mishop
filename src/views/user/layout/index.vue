<template>
  <div class="layout-user">
    <NavHeader></NavHeader>
    <appMainVue></appMainVue>
    <ServiceBar></ServiceBar>
    <NavFooter></NavFooter>
  </div>
</template>
<script>
import NavHeader from '@/layout/NavHeader.vue'
import NavFooter from '@/layout/NavFooter.vue'
import ServiceBar from '@/layout/ServiceBar.vue'
import appMainVue from './contentMain.vue'
export default {
  components: {
    NavHeader,
    NavFooter,
    ServiceBar,
    appMainVue
  },
  name: 'layout-user',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss"></style>
