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
          <li class="item-menu-li" v-for="item in list" :key="item.id">
            <span>{{ item.name }}</span>
            <div class="item-children">
              <div class="container">
                <ul
                  v-for="item in item.product"
                  :key="item.id"
                  class="product-box"
                >
                  <li class="product">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-1.png" alt="" />
                    </div>
                    <div class="pro-name">{{ item.proname }}</div>
                    <div class="pro-price">{{ item.proprice }}</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
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
export default {
  name: 'header-sort',
  components: {
    HeaderLogo,
    NavMenu
  },
  data() {
    return {
      input3: '',
      list: [
        {
          id: '1',
          name: '小米手机',
          product: [
            { id: 1, proname: '小米手机', proprice: 1999 },
            { id: 2, proname: '小米cc9', proprice: 1999 },
            { id: 3, proname: '小米cc9', proprice: 1999 },
            { id: 4, proname: '小米cc9', proprice: 1999 },
            { id: 5, proname: '小米cc9', proprice: 1999 },
            { id: 6, proname: '小米cc9', proprice: 1999 }
          ]
        },
        {
          id: '2',
          name: '红米手机',
          product: [
            { id: 1, proname: '红米手机', proprice: 1999 },
            { id: 2, proname: '小米cc9', proprice: 1999 },
            { id: 3, proname: '小米cc9', proprice: 1999 },
            { id: 4, proname: '小米cc9', proprice: 1999 },
            { id: 5, proname: '小米cc9', proprice: 1999 },
            { id: 6, proname: '小米cc9', proprice: 1999 }
          ]
        },
        {
          id: '3',
          name: '路由器',
          product: [
            { id: 1, proname: '小米cc9', proprice: 1999 },
            { id: 2, proname: '小米cc9', proprice: 1999 },
            { id: 3, proname: '小米cc9', proprice: 1999 },
            { id: 4, proname: '小米cc9', proprice: 1999 },
            { id: 5, proname: '小米cc9', proprice: 1999 },
            { id: 6, proname: '小米cc9', proprice: 1999 }
          ]
        },
        {
          id: '4',
          name: '电视',
          product: [
            { id: 1, proname: '小米cc9', proprice: 1999 },
            { id: 2, proname: '小米cc9', proprice: 1999 },
            { id: 3, proname: '小米cc9', proprice: 1999 },
            { id: 4, proname: '小米cc9', proprice: 1999 },
            { id: 5, proname: '小米cc9', proprice: 1999 },
            { id: 6, proname: '小米cc9', proprice: 1999 }
          ]
        }
      ]
    }
  },
  computed: {
    // 判断是否打开全部商品分类
    isDisplay() {
      return this.$route.path === '/shop'
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
              span {
                color: black;
              }
            }
          }
          ::v-deep(.menu-box) {
            border-left: 1px solid red;
          }
        }
        .item-menu-li {
          &:hover {
            color: $colorA;
            .item-children {
              height: 220px;
              opacity: 1;
            }
          }
        }
        span {
          padding: 0 10px;
          cursor: pointer;
        }
        .item-children {
          position: absolute;
          left: 0;
          opacity: 0;
          width: 100%;
          height: 0;
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
