<template>
  <div class="shop-container">
    <swiperHome></swiperHome>
    <banner :img-data="bannerData[0]"></banner>
    <phone></phone>
    <wearableDevice></wearableDevice>
    <banner :img-data="bannerData[0]"></banner>
    <appliance></appliance>
  </div>
</template>
<script>
import swiperHome from '@/views/home/swiperBox/index.vue'
import banner from '@/components/banner/index.vue'
import phone from '@/views/home/phone/index.vue'
import appliance from '@/views/home/appliance/index.vue'
import wearableDevice from '@/views/home/wearableDevice/index.vue'

export default {
  name: 'shop',
  components: { swiperHome, banner, phone, appliance, wearableDevice },
  data() {
    return {
      bannerData: [
        { img: '/imgs/banner-1.png', id: 1 },
        { img: '/imgs/banner-1.png', id: 2 }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';

.shop-container {
}
</style>
