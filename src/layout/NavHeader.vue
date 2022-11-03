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
            <UserDorp></UserDorp>
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
      <HeaderSort></HeaderSort>
    </div>
  </div>
</template>
<script>
import UserDorp from '@/components/userDrop/index.vue'
import HeaderSort from './components/headerSort/index.vue'
export default {
  name: 'nva-header',
  components: {
    UserDorp,
    HeaderSort
  },
  data() {
    return {}
  },
  methods: {}
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
}
</style>
