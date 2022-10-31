<template>
  <div class="product-buy">
    <div class="nav-header">
      <div class="container">
        <div class="title">
          <span>小米手机</span>
          <span>xiaomicc9</span>
        </div>
        <div class="detail">
          <ul>
            <li><a href="">概述页</a></li>
            <li><a href="">参数页</a></li>
            <li><a href="">F码通道</a></li>
            <li><a href="">咨询客服</a></li>
            <li><a href="">用户评价</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="swiper-container">
          <div class="box">
            <swiperBase :swiper-data="slideList"></swiperBase>
          </div>
        </div>
        <div class="buy-detail">购买详情</div>
      </div>
    </div>
  </div>
</template>
<script>
import swiperBase from '@/components/swiper/index.vue'
export default {
  name: 'product-buy',
  components: {
    swiperBase
  },
  data() {
    return {
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
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
.product-buy {
  .nav-header {
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 65px;
      .detail {
        li {
          display: inline-block;
          a{
            color: $colorB;
            &:hover{
              color: orange;
            }
          }
          &::after{
            content: '';
            margin: 0 10px;
            border: 1px solid rgb(208, 206, 206);
          }
          &:last-child {
            &::after{
              content: '';
              border: none;
              margin: 0;
            }
          }
        }
      }
    }
  }
  .main {
    padding: 50px;
    background-color: #fff;
    .container {
      display: flex;
      .swiper-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
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
      }
    }
  }
}
</style>
