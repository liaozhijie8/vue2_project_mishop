<template>
  <div class="address-container">
    <AddressBox :is-user="true"></AddressBox>
  </div>
</template>
<script>
import AddressBox from '@/views/checkout/components/address/index.vue'
export default {
  name: 'address-user',
  components: { AddressBox },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.address-container{
  background-color: #fff;
  padding: 20px;
}
</style>
