<template>
  <div class="buy-success">
    <div class="container">
      <div class="left">
        <img src="https://c1.mifile.cn/f/i/17/static/success.png" alt="" />
        <div class="tip">
          <div>已成功加入购物车</div>
          <div>Xiaomi Civi 2 8GB+256GB 小白裙</div>
        </div>
      </div>
      <div class="right">
        <button @click="goback">返回上一级</button>
        <button @click="gotoPay">去购物车结算</button>
      </div>
    </div>
    <remommendBox></remommendBox>
  </div>
</template>
<script>
import remommendBox from '@/components/recommend/index.vue'

export default {
  name: 'buy-successtip',
  components: {
    remommendBox
  },
  data() {
    return {}
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    gotoPay() {
      this.$router.push('/pay')
    }
  },
  mounted() {}
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
.buy-success {
  margin-bottom: 20px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-bottom: $colorF solid 1px;
    .left {
      display: flex;
      align-items: center;
      img {
        display: inline-block;
        width: 64px;
        height: 64px;
      }
      .tip {
        margin-left: 20px;
        div {
          &:first-child {
            font-size: 20px;
            margin-bottom: 5px;
          }
          &:last-child {
            color: rgb(142, 136, 136);
          }
        }
      }
    }

    .right {
      button {
        width: 180px;
        height: 40px;
        border: none;
        background-color: none;
        margin-left: 10px;
        cursor: pointer;
        &:first-child {
          border: solid 1px $colorF;
          color: rgb(86, 82, 82);

          &:hover {
            background-color: #fff;
          }
        }
        &:last-child {
          background-color: rgb(238, 80, 80);
          color: #fff;
        }
      }
    }
  }
}
</style>
