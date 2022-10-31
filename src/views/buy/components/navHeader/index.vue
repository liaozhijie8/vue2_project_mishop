<template>
  <div class="nav-header">
    <div class="container">
      <div class="title">
        <span class="name">小米手机</span>
        <span class="other" v-for="(item, index) in 4" :key="index"
          >xiaomicc{{ item }}</span
        >
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
</template>
<script>
export default {
  name: 'nav-header',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
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
    .title {
      span {
        &::after {
          content: '';
          margin: 0 10px;
          border-left: 2px solid $colorF;
        }
        &:last-child {
          &::after {
            border: none;
            margin: 0;
          }
        }
      }

      .name {
        font-size: 16px;
        font-weight: 600;
      }
      .other {
        cursor: pointer;
        &:hover {
          color: orange;
        }
      }
    }
    .detail {
      li {
        display: inline-block;
        a {
          color: $colorB;
          &:hover {
            color: orange;
          }
        }
        &::after {
          content: '';
          margin: 0 10px;
          border: 1px solid rgb(208, 206, 206);
        }
        &:last-child {
          &::after {
            content: '';
            border: none;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
