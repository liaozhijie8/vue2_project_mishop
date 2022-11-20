<template>
  <div class="nav-menu">
    <ul class="menu-wrap">
      <li
        class="menu-item"
        :class="isActive(item.id) ? 'active' : ''"
        v-for="item in $store.getters.allSortList"
        :key="item.id"
        @mouseenter="activeEvent(item.id)"
        @mouseleave="deActiveEvent()"
      >
        <span class="sort-name">{{ item.sort_name }}</span>
        <DisplayBox
          v-if="isActive(item.id) && isClick"
          :product-data="productDataHandle(item.id) || test"
          @click-event="clickEvent"
        ></DisplayBox>
      </li>
    </ul>
  </div>
</template>
<script>
import { getSortGoodsList_api } from '@/api/sort'
import DisplayBox from './displayBox/index.vue'
export default {
  name: 'navMenu',
  components: { DisplayBox },
  data() {
    return {
      // 是否已经请求数据成功
      isGetId: [],
      productData: {},
      currentId: 0,
      test: [],
      isClick: true
    }
  },
  methods: {
    // 鼠标进入
    activeEvent(id) {
      this.isClick = true
      const res = this.isGetId.includes(id)
      this.currentId = id
      if (!res) {
        getSortGoodsList_api(id).then((res) => {
          this.isGetId.push(id)
          this.productData[id] = res.result
          this.test = this.productData[id]
        })
      }
    },
    // 鼠标离开
    deActiveEvent() {
      this.currentId = 0
    },
    // 鼠标点击了商品
    clickEvent(val) {
      this.isClick = val
    },
    // 激活类
    isActive(id) {
      return this.currentId === id
    },
    // 处理每一个类的商品数据
    productDataHandle(id) {
      return this.productData[id]
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.nav-menu {
  width: 264px;
  height: 450px;
  z-index: 9;
  background-color: #44454a8a;
  .menu-wrap {
    margin-top: 20px;
    font-size: 14px;
    color: #ffffff;
    .active {
      background-color: orange;
    }
    .menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      &:after {
        content: ' ';
        @include bgImg(10px, 15px, '@/assets/imgs/icon-arrow.png');
      }
    }
  }
}
</style>
