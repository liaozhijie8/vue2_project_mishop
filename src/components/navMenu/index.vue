<template>
  <div class="nav-menu">
    <ul class="menu-wrap">
      <li class="menu-item" v-for="item in list" :key="item.id">
        <span>{{ item.name }}</span>
        <div class="menu-box">
          <div class="menu-flex">
            <ul class="box-ul" v-for="(item, index) in 4" :key="index">
              <li class="box-li" v-for="(item, index) in 6" :key="index">
                <a href="">
                  <img src="/imgs/item-box-1.png" alt="" />
                  <span>小米cc{{item}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <div class="menu-test"></div>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navMenu',
  data() {
    return {
      list: [
        { id: 1, name: '手机' },
        { id: 2, name: '电脑' },
        { id: 3, name: '路由器' },
        { id: 4, name: '笔记本' },
        { id: 5, name: '冰箱' },
        { id: 6, name: '电视' },
        { id: 7, name: '手机' }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.nav-menu {
  position: relative;
  width: 264px;
  height: 450px;
  z-index: 9;
  background-color: #44454a8a;
  .menu-wrap {
    margin-top: 20px;
    font-size: 14px;
    color: #ffffff;
    &:hover {
      .menu-test {
        width: calc(1226px - 264px);
        opacity: 1;
      }
    }
    .menu-test {
      position: absolute;
      left: 264px;
      top: 0px;
      width: 0;
      opacity: 0;
      height: 450px;
      box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
      background-color: #ffffff;
      z-index: 8;
    }
    .menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background-color: orange;
        .menu-box {
          display: block;
        }
      }
      &:after {
        content: ' ';
        @include bgImg(10px, 15px, '@/assets/imgs/icon-arrow.png');
      }
      .menu-box {
        .menu-flex {
          display: flex;
          justify-content: space-between;
          .box-ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 450px;
            li {
              line-height: 75px;
              height: 75px;
              a {
                display: block;
                padding-left: 20px;
                box-sizing: border-box;
                width: calc((1226px - 264px) / 4);
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
        display: none;
        position: absolute;
        color: black;
        left: 264px;
        top: 0px;
        width: calc(1226px - 264px);
        height: 450px;
        z-index: 9;
      }
    }
  }
}
</style>
