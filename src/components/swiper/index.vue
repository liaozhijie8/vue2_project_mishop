<template>
  <swiper v-bind:options="swiperOption">
    <swiper-slide v-for="(item, index) in swiperData" v-bind:key="index">
      <a :href="'/product/' + item.id"><img v-bind:src="item.img" /></a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev bnt" slot="button-prev"></div>
    <div class="swiper-button-next bnt" slot="button-next"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'swiper-template',
  props: {
    // 轮播的数据
    swiperData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        loop: true,
        effect: 'fade',
        cubeEffect: {
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.swiper-container {
  position: relative;
  height: $swiperH;
  .bnt {
    width: 50px;
    height: $swiperBntH;
    &:hover {
      background-color: $colorD;
    }
  }
  .swiper-button-prev {
    position: absolute;
    top: calc(($swiperH - $swiperBntH) / 2);
    left: 0px;
  }
  .swiper-button-next {
    position: absolute;
    top: calc(($swiperH - $swiperBntH) / 2);
    right: 0px;
  }
}
</style>
