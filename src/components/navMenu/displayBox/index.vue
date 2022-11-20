<template>
  <div class="menu-box">
    <div class="menu-flex">
      <ul class="box-ul">
        <li class="box-li" v-for="item in productData" :key="item.id">
          <a href="" @click.prevent="goToBuy(item.id)">
            <img alt="" :src="urlData(item.img_url[0])" />
            <span class="product-name">{{ item.goods_name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getUrl } from '@/utils/dataHandle'
export default {
  name: 'display-box',
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
    urlData(val) {
      return getUrl(val)
    },
    // 跳转路由
    goToBuy(id) {
      this.$router.push(`/buy/${id}`)
      this.$emit('click-event', false)
    }
  },
  mounted() {
    // console.log(this.productData)
  }
}
</script>
<style scoped lang="scss">
.menu-box {
  position: absolute;
  background-color: #fff;
  border: 1px solid rgb(176, 172, 172);
  border-left: none;
  left: 264px;
  top: 0px;
  width: calc(1226px - 264px);
  height: 450px;
  z-index: 9;
  .menu-flex {
    display: flex;
    justify-content: space-between;
    .box-ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      height: 450px;
      li {
        line-height: 75px;
        height: calc(450px / 6);
        width: calc((1226px - 270px) / 4);

        a {
          display: block;
          padding-left: 20px;
          font-weight: 400;
          .product-name {
            color: black;
            font-weight: 400;
          }
          &:hover {
            .product-name {
              color: orange;
            }
          }

          img {
            width: 42px;
            height: 35px;
            vertical-align: middle;
            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>
