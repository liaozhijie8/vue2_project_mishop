<template>
  <div class="footer-container">
    <div class="container">
      <div class="footer-logo">
        <img src="@/assets/imgs/logo-footer.png" alt="" />
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank"
          >河畔一角主页</a
        ><span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank"
          >Vue全栈课程</a
        ><span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank"
          >React全家桶课程</a
        ><span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank"
          >微信支付专项课程（H5+小程序+Node+Mongo）</a
        >
      </div>
      <div class="copyright">
        Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights
        Reserved.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-footer',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.footer-container {
  background-color: $colorB;
  .container {
    color: #b0b0b0;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer-logo {
      margin-bottom: 40px;
      text-align: center;
      img {
        width: 106px;
        height: 74px;
        margin-bottom: 10px;
      }
      p{
        font-size: 12px;
      }
    }
    .footer-link{
      margin-bottom: 20px;
      a{
        color: #b0b0b0;
      }
      span{
        margin: 0 4px;
      }
    }
    .copyright{
      .domain{
        color: $colorA;
      }
    }
  }
}
</style>
