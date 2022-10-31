<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="topbar-container">
        <div class="container">
          <div class="topbar-menu">
            <a href="javascript:;">小米官网</a>
            <span>|</span>
            <a href="javascript:;">小米商城</a>
            <span>|</span>
            <a href="javascript:;">MIUI</a>
            <span>|</span>
            <a href="javascript:;">loT</a>
            <span>|</span>
            <a href="javascript:;">云服务</a>
            <span>|</span>
            <a href="javascript:;">天星数科</a>
          </div>
          <div class="topbar-user">
            <div class="logined" v-if="isUserInfo">
              <a class="user_name" @mouseenter="is_active_name = true">
                <span class="name">{{
                  $store.getters.userInfo.user_name
                }}</span>
                <i class="el-icon-arrow-down icon"></i>
                <div class="list">
                  <a href="">个人中心</a>
                  <a href="">晒单评价</a>
                  <a href="">我的喜欢</a>
                  <a href="">小米账号</a>
                  <a @click.prevent="$store.commit('user/logout')">退出登录</a>
                  <a href="">我的订单</a>
                </div>
              </a>
              <span>|</span>
              <a href="">消息通知</a>
              <span>|</span>
              <a href="">我的订单</a>
            </div>
            <div class="visiting" v-else>
              <a href="/login">登录</a>
              <span>|</span>
              <a href="/login">注册</a>
            </div>
            <a href="javascript:;" class="cart">
              <i class="el-icon-shopping-cart-2"></i>
              购物车
              <div class="cart_list">
                <p>还没有商品呢，赶紧选购</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <!-- logo区域 -->
        <div class="header-logo">
          <a href="/"></a>
        </div>
        <!-- 分类区域 -->
        <div class="header-menu">
          <ul class="item-menu">
            <li class="nav-category">
              <span v-if="true">全部商品分类</span>
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
            @focus="test"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'nva-header',
  data() {
    return {
      userInfo: {},
      is_active_name: false,
      input3: '',
      menuList: ['小米手机', '红米手机', '路由器', '电视'],
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
  methods: {
    test() {
      console.log(this.getUserInfo)
    }
  },
  computed: {
    getUserInfo() {
      return store.getters.userInfo
    },
    isUserInfo() {
      return store.getters.hasUserInfo
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.header {
  .nav-topbar {
    background-color: $colorB;
    @include height(40px);
    .topbar-container {
      display: flex;
      justify-content: center;
      .container {
        @include flex();
        .topbar-user,
        .topbar-menu {
          a {
            display: inline-block;
            color: #b0b0b0;
            padding: 0 5px;
            &:hover {
              color: #fff;
            }
            i {
              margin: 0 4px;
              font-size: 20px;
              color: #b0b0b0;
            }
          }
        }
        .topbar-user {
          div {
            display: inline-block;
          }
          .logined {
            .user_name {
              position: relative;
              width: 110px;
              text-align: center;
              vertical-align: middle;
              z-index: 11;
              cursor: pointer;
              &:hover {
                color: orange;
                background-color: #fff;
                .list {
                  visibility: visible;
                  height: 200px;
                  opacity: 1;
                }
                .icon {
                  color: orange;
                }
              }
              .icon {
                margin-left: 8px;
                font-size: 12px;
                font-weight: bold;
              }
              .list {
                position: absolute;
                visibility: hidden;
                width: 120px;
                height: 0;
                top: 40px;
                left: 0;
                opacity: 0;
                background-color: #fff;
                transition: all 0.5s;
                box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                a {
                  display: block;
                  color: black;
                  height: 30px;
                  line-height: 30px;
                  &:hover {
                    color: orange;
                    background-color: #e4dede;
                  }
                }
              }
            }
          }
          .cart {
            position: relative;
            display: inline-block;
            background-color: $colorC;
            width: 110px;
            height: 100%;
            text-align: center;
            margin-left: 20px;
            &:hover {
              color: $colorA;
              background-color: #ffffff;
              .cart_list {
                visibility: visible;
                min-height: 80px;
                opacity: 1;
              }
            }
            .cart_list {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              visibility: hidden;
              right: 0;
              width: 316px;
              min-height: 0;
              opacity: 0;
              z-index: 10;
              transition: all 0.5s;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              background-color: #ffffff;
              color: #333;
            }
          }
        }
      }
    }
  }
  .nav-header {
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
            width: 116px;
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
}
</style>
