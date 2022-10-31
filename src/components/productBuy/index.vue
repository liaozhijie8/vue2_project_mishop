<template>
  <div class="product-buy">
    <NavHeader></NavHeader>
    <div class="main">
      <div class="container">
        <div class="swiper-container">
          <div class="box">
            <swiperBase :swiper-data="slideList"></swiperBase>
          </div>
        </div>
        <div class="buy-detail">
          <textBox></textBox>
          <addressBox></addressBox>
          <div class="option-box">
            <optionBox
              v-for="item in versionData"
              :key="item.id"
              :data="item.list"
            ></optionBox>
            <serviceBox
              v-for="item in serviceData"
              :key="item.id"
              :title="item.title"
              :service-data="item.data"
            ></serviceBox>
          </div>
          <selectedBox></selectedBox>
          <sumbitBnt></sumbitBnt>
          <afterSale></afterSale>
        </div>
      </div>
    </div>
    <footerBOx></footerBOx>
  </div>
</template>
<script>
import swiperBase from '@/components/swiper/index.vue'
import serviceBox from './components/serviceBox/index.vue'
import selectedBox from './components/selectedBox/index.vue'
import textBox from './components/textBox/index.vue'
import NavHeader from './components/navHeader/index.vue'
import optionBox from './components/optionBox/index.vue'
import addressBox from './components/addressBox/index.vue'
import sumbitBnt from './components/sumbitBnt/index.vue'
import afterSale from './components/afterSale/index.vue'
import footerBOx from './components/footerBox/index.vue'
export default {
  name: 'product-buy',
  components: {
    swiperBase,
    serviceBox,
    selectedBox,
    textBox,
    NavHeader,
    optionBox,
    addressBox,
    sumbitBnt,
    afterSale,
    footerBOx
  },
  data() {
    return {
      // 选择版本数据
      versionData: [
        {
          id: 0,
          title: '选择版本',
          list: [
            { _id: 1, spec: '8GB+128GB' },
            { _id: 2, spec: '12GB+128GB' },
            { _id: 3, spec: '8GB+256GB' }
          ]
        },
        {
          id: 123,
          title: '选择颜色',
          list: [
            { _id: 0, spec: '白色' },
            { _id: 2, spec: '金色' },
            { _id: 3, spec: '蓝色' }
          ]
        }
      ],
      slideList: [
        {
          id: '42',
          img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656916238.0629960.png'
        },
        {
          id: '45',
          img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656916238.06123122.png'
        },
        {
          id: '46',
          img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656916238.06123122.png'
        }
      ],
      serviceData: [
        {
          id: 1,
          title: '选择小米提供的尊享服务',
          data: [
            {
              id: 1,
              service: 'MiCare保障服务',
              desc: '享碎屏、延保、换电池、保值换新4大权益',
              price: 749,
              icon: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/79E8B4A5C643271EA2CCA3EA58D460F4.png'
            }
          ]
        },
        {
          id: 2,
          title: '选择小米提供的意外保修服务',
          data: [
            {
              id: 1,
              service: '意外保障服务',
              desc: '1年1次意外损坏 官方原厂 免费维修',
              price: 599,
              icon: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/79E8B4A5C643271EA2CCA3EA58D460F4.png'
            },
            {
              id: 2,
              service: '碎屏保障服务',
              desc: '1年1次碎屏 官方原厂 免费维修',
              price: 174,
              icon: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/79E8B4A5C643271EA2CCA3EA58D460F4.png'
            }
          ]
        },
        {
          id: 3,
          title: '选择小米提供的云空间服务',
          data: [
            {
              id: 1,
              service: '云空间年卡200G',
              desc: '主商品签收后，自动激活至下单帐号',
              price: 208,
              icon: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png'
            },
            {
              id: 2,
              service: '云空间年卡 50G',
              desc: '主商品签收后，自动激活至下单帐号',
              price: 58,
              icon: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png'
            },
            {
              id: 3,
              service: '云空间月卡200G',
              desc: '主商品签收后，自动激活至下单帐号',
              price: 21,
              icon: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png'
            },
            {
              id: 4,
              service: '云空间月卡50G',
              desc: '主商品签收后，自动激活至下单帐号',
              price: 6,
              icon: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1600176481.06844959.png'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
* {
  box-sizing: border-box;
}
.product-buy {
  .main {
    padding: 50px;
    background-color: #fff;
    .container {
      display: flex;
      .swiper-container {
        flex: 1;
        display: flex;
        justify-content: center;
        .box {
          width: 560px;
          height: 560px;
          ::v-deep(.swiper-container) {
            height: 560px;
            .bnt {
              width: 50px;
              height: $swiperBntH;
              &:hover {
                background-color: $colorD;
              }
            }
            .swiper-button-prev {
              position: absolute;
              top: calc((560px - $swiperBntH) / 2);
              left: 0px;
            }
            .swiper-button-next {
              position: absolute;
              top: calc((560px - $swiperBntH) / 2);
              right: 0px;
            }
          }
        }
      }
      .buy-detail {
        flex: 1;
        padding: 0 50px;
        .option-box {
        }
      }
    }
  }
}
</style>
