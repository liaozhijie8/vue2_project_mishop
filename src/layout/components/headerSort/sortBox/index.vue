<template>
  <div class="item-children">
    <div class="container">
      <ul v-for="item in productList()" :key="item.id" class="product-box">
        <li class="product" @click="openProduct(item.id)">
          <div class="pro-img">
            <img :src="imgUrl(item.img_url[0])" alt="" />
          </div>
          <div class="pro-name">{{ item.goods_name }}</div>
          <div class="pro-price">{{ item.goods_price }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getUrl } from '@/utils/dataHandle'
import { openNewPage } from '@/utils/routeHandle'
export default {
  name: 'sort-box',
  props: {
    productData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    // 处理图片地址
    imgUrl(val) {
      return getUrl(val)
    },
    // 处理的数组长度
    productList() {
      return this.productData.slice(0, 6)
    },
    // 跳转新窗口
    openProduct(id) {
      openNewPage(`/buy/${id}`)
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.item-children {
  position: absolute;
  left: 0;
  opacity: 1;
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-top: 1px solid #e5e5e5;
  box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
  z-index: 10;
  transition: all 0.5s;
  background-color: #ffffff;
  .container {
    height: 100%;
    @include flex();
    .product-box {
      position: relative;
      .product {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 220px;
        cursor: pointer;

        .pro-img {
          @include height(137px);
          img {
            width: auto;
            height: 111px;
          }
        }
        .pro-name {
          @include height(20px);
          font-size: 14px;
          color: #333;
        }
        .pro-price {
          margin-top: 10px;
          font-size: 14px;
          @include height(20px);
          color: $colorA;
        }
      }
      &:before {
        content: ' ';
        position: absolute;
        top: 28px;
        right: 0;
        border-left: 1px solid $colorF;
        height: 100px;
        width: 1px;
      }
      &:last-child:before {
        display: none;
      }
    }
  }
}
</style>
