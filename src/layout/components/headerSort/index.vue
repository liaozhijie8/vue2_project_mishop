<template>
  <div class="headerSort-container">
    <div class="container">
      <!-- logo区域 -->
      <HeaderLogo></HeaderLogo>
      <!-- 分类区域 -->
      <div class="header-menu">
        <ul class="item-menu">
          <li class="nav-category">
            <span v-if="!isDisplay">全部商品分类</span>
            <NavMenu class="set-navMenu"></NavMenu>
          </li>
        </ul>
        <ul class="item-menu" @mouseenter="displayBox" @mouseleave="hideBox">
          <li
            class="item-menu-li"
            v-for="item in sortList"
            :key="item.id"
            :class="isActive(item.id) ? 'active' : ''"
          >
            <span
              @mouseenter="activeEvent(item.id)"
              @mouseleave="deActiveEvent"
              >{{ item.sort_name }}</span
            >
          </li>
          <transition name="slide-fade">
            <SortBOx
              v-if="isDisplayBox"
              :product-data="sortBoxData() || test"
            ></SortBOx>
          </transition>
        </ul>
      </div>
      <!-- 搜索区域 -->
      <div class="header-search">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-search"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLogo from '../headerLogo/index.vue'
import NavMenu from '@/components/navMenu/index.vue'
import SortBOx from './sortBox/index.vue'
import { getSortGoodsList_api } from '@/api/sort'
export default {
  name: 'header-sort',
  components: {
    HeaderLogo,
    NavMenu,
    SortBOx
  },
  data() {
    return {
      // 显示下拉框
      isDisplayBox: false,
      // 是否已经请求数据成功
      isGetId: [],
      productData: {},
      currentId: 0,
      test: [],
      isClick: true,
      input3: ''
    }
  },
  computed: {
    // 判断是否打开全部商品分类
    isDisplay() {
      return this.$route.path === '/shop'
    },
    // 处理显示的类型数量
    sortList() {
      return this.$store.getters.allSortList.slice(0, 7)
    }
  },
  methods: {
    // 显示下拉框
    displayBox() {
      this.isDisplayBox = true
    },
    hideBox() {
      this.isDisplayBox = false
      this.currentId = 0
    },
    // 鼠标进入
    activeEvent(id) {
      this.isClick = true
      const res = this.isGetId.includes(id)
      if (!res) {
        getSortGoodsList_api(id).then((res) => {
          this.isGetId.push(id)
          this.productData[id] = res.result
          this.test = this.productData[id]
          this.currentId = id
        })
      } else {
        this.currentId = id
      }
    },
    // 激活类
    isActive(id) {
      return this.currentId === id
    },
    // 鼠标离开
    deActiveEvent() {
      // this.currentId = 0
    },
    // sortBox数据
    sortBoxData() {
      return this.productData[this.currentId]
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.headerSort-container {
  position: relative;
  background-color: #fff;
  .container {
    height: 100px;
    @include flex();
    .header-menu {
      width: 850px;
      @include height(100px);
      // sortBox过渡
      .slide-fade-enter-active {
        transition: all 0.3s ease;
      }
      .slide-fade-leave-active {
        transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
      }
      .slide-fade-enter {
        transform: translateY(-20px);
        opacity: 1;
      }
      .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
      }
      .item-menu {
        display: inline-block;
        color: #333;
        font-weight: bold;
        font-size: 16px;
        li {
          display: inline-block;
        }
        .nav-category {
          position: relative;
          width: 116px;
          &:hover {
            .set-navMenu {
              visibility: visible;
              opacity: 1;
              height: 450px;
            }
          }
          .set-navMenu {
            position: absolute;
            height: 0;
            opacity: 0;
            left: -67.5px;
            transition: all 0.3s;
            visibility: hidden;
          }
          ::v-deep(.nav-menu) {
            background-color: #fff;
            border: 1px solid red;
            .menu-item {
              .sort-name {
                color: black;
              }
            }
          }
          ::v-deep(.menu-box) {
            top: -1px;
            left: 263px;
          }
        }
        .active {
          color: $colorA;
        }
        span {
          padding: 0 10px;
          cursor: pointer;
        }
      }
    }
    .header-search {
      width: 296px;
      height: 50px;
      ::v-deep(.el-input__inner) {
        height: 50px;
      }
      ::v-deep(.el-input-group__append) {
        &:hover {
          background-color: $colorA;
        }
        .el-icon-search {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
