<template>
  <div class="login-layout">
    <div class="login-layout_sider">
      <img src="@/assets/imgs/slider/loginSider.png" alt="" />
    </div>
    <div class="login-layout_content">
      <div class="top">
        <div class="logo">
          <img src="@/assets/imgs/mi-logo.png" alt="" />
          <h2 class="title">小米账号</h2>
        </div>
        <ul class="list">
          <li>用户协议</li>
          <li>隐私政策</li>
          <li>帮助中心</li>
          <span>|</span>
          <li>中文(简体)</li>
        </ul>
      </div>
      <div class="main">
        <ul class="chose">
          <li
            @click="chose('login')"
            :class="{ 'li-active': is_active('login') }"
          >
            登录
          </li>
          <li
            @click="chose('signup')"
            :class="{ 'li-active': is_active('signup') }"
          >
            注册
          </li>
        </ul>
        <div class="form">
          <transition mode="out-in">
            <keep-alive>
              <loginForm v-if="choseForm === 'login'"></loginForm>
              <signupForm v-else></signupForm>
            </keep-alive>
          </transition>
        </div>
      </div>
      <div class="copyright">
        小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
      </div>
    </div>
  </div>
</template>
<script>
import loginForm from './loginForm/index.vue'
import signupForm from './signupForm/index.vue'
export default {
  name: 'login',
  components: { loginForm, signupForm },
  data() {
    return {
      choseForm: 'login'
    }
  },
  methods: {
    chose(val) {
      this.choseForm = val
    },
    is_active(val) {
      return this.choseForm === val
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
* {
  box-sizing: border-box;
}
.login-layout {
  display: flex;
  overflow-y: hidden; //删除垂直滚动条
  .login-layout_sider {
    width: 375px;
    height: 100vh;
    background-color: aqua;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-layout_content {
    flex: 1;
    background-color: $colorB;
    color: $colorG;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 80px;
      padding: 0 20px;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: 49px;
          height: 49px;
          background-color: $colorA;
        }
        .title {
          margin-left: 10px;
        }
      }
      .list {
        li {
          display: inline-block;
          margin: 0 10px;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: orange;
          }
        }
      }
    }
    .main {
      width: 450px;
      height: 550px;
      border-radius: 4px;
      background-color: $colorC;
      box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .chose {
        padding-bottom: 10px;
        .li-active {
          border-bottom: 3px solid orange;
        }
        li {
          display: inline-block;
          margin-right: 10px;
          padding: 5px 0;
          font-size: 20px;
          cursor: pointer;
        }
      }
      .form {
        // 进入(显示)开始时效果
        .v-enter {
          opacity: 0;
          transform: translateX(50px);
        }

        // 离开(隐藏)结束时效果
        .v-leave-to {
          opacity: 0;
          transform: translateX(-50px);
        }

        // 进入(显示)和离开(隐藏)过程中效果
        .v-enter-active,
        .v-leave-active {
          transition: all 0.4s;
        }
      }
    }
    .copyright {
      padding: 20px 0;
    }
  }
}
</style>
