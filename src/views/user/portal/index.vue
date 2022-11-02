<template>
  <div class="user-contaienr">
    <div class="profile">
      <div class="left">
        <div class="avatar">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/p01QQpxshUZL/QpmKwLBzkbqYjk.jpg"
            alt="用户头像"
          />
        </div>
        <div>
          <div class="name">廖志杰</div>
          <div class="sayHi">你好</div>
          <div class="dite">修改个人信息 ></div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li>账户安全:<span>较高</span></li>
          <li>绑定手机:<span>18318630940</span></li>
          <li>绑定邮箱:<span>238478484@qq.com</span></li>
        </ul>
      </div>
    </div>
    <div class="order">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-box',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
* {
  box-sizing: border-box;
}
.user-contaienr {
  background-color: #fff;
  padding: 30px;
  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
    border-bottom: 1px solid $colorF;
    .left {
      display: flex;
      align-items: center;
      .avatar {
        width: 160px;
        height: 160px;
        padding: 2px;
        margin-right: 15px;
        border: 1px solid #000;
        border-radius: 50%;
        img {
          border-radius: 50%;
        }
      }
      .name {
        font-size: 20px;
        font-weight: 500;
      }
      .sayHi {
        margin-top: 5px;
        color: $colorD;
      }
      .dite {
        color: red;
        cursor: pointer;
        margin-top: 10px;
      }
    }
    .right {
      margin-right: 100px;
      ul {
        li {
          margin-bottom: 10px;
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
