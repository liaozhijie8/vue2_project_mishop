<template>
  <div class="swiper-box">
    <div class="container">
      <navMenu class="set-navMenu"></navMenu>
      <swiperBase :swiper-data="slideList"></swiperBase>
      <div class="swiper-sub">
        <a href="" v-for="item in adsList" :key="item.id">
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import navMenu from '@/components/navMenu/index.vue'
import swiperBase from '@/components/swiper/index.vue'
export default {
  name: 'swiper-home',
  components: { navMenu, swiperBase },
  data() {
    return {
      // 广告数据
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      slideList: [
        {
          id: '42',
          url: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          url: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          url: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '47',
          url: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '48',
          url: '/imgs/slider/slide-1.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.swiper-box {
  z-index: 1;
  background-color: #fff;
  .container {
    position: relative;
    ::v-deep(.swiper-container) {
      .swiper-button-prev {
        left: 264px;
      }
    }
    .set-navMenu {
      position: absolute;
    }
    .swiper-sub {
      @include flex();
      padding: 20px 0;
      a {
        width: 296px;
        height: 167px;
        transition: all 0.3s;
        &:hover {
          box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); /* 鼠标悬浮时盒子出现的阴影 */
          transform: translate(-2px, -2px); /* 鼠标悬浮时盒子上移10px */
        }
      }
    }
  }
}
</style>
