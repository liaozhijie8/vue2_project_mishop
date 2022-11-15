<template>
  <div class="drop-down">
    <div class="logined" v-if="isUserInfo">
      <a class="user_name" @mouseenter="is_active_name = true">
        <span class="name">{{ $store.getters.userInfo.user_name }}</span>
        <i class="el-icon-arrow-down icon"></i>
        <div class="list">
          <a href="/user" target="_blank">个人中心</a>
          <a href="">晒单评价</a>
          <a href="">我的喜欢</a>
          <a href="">小米账号</a>
          <a @click.prevent="$store.commit('user/logout')">退出登录</a>
        </div>
      </a>
      <span>|</span>
      <a href="">消息通知</a>
      <span>|</span>
      <a href="/user/order" target="_blank">我的订单</a>
    </div>
    <div class="visiting" v-else>
      <a
        href=""
        @click.prevent="
          $router.push({ name: 'login', params: { type: 'login' } })
        "
        >登录</a
      >
      <span>|</span>
      <a
        href=""
        @click.prevent="
          $router.push({ name: 'login', params: { type: 'signup' } })
        "
        >注册</a
      >
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'user-drop',
  data() {
    return {}
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
.drop-down {
  div {
    display: inline-block;
  }
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
          height: 160px;
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
}
</style>
