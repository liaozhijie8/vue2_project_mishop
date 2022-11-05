<template>
  <div class="price-card" ref="menu" :class="headerFixed ? 'isFixed' : ''">
    <div class="container">
      <div class="left">
        <span>继续购物</span>
        <span>|</span>
        <span>已选择<i>7</i>件</span>
      </div>
      <div class="right">
        <span>合计:</span>
        <span>9494</span>
        <span>元</span>
        <button @click="gotoCheckout">去结算</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'price-card',
  data() {
    return {
      headerFixed: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 获取吸顶元素的dom
      const menu = this.$refs.menu
      // 吸顶元素到top的距离
      this.offsetTop = menu.offsetTop
      // 元素自身的高度
      this.offsetHeight = menu.offsetHeight
      // 监听滚动条
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // 获取页面滚动的距离 兼容写法
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // 判断页面的滚动距离是否小于吸底元素的位置
      this.headerFixed = scrollTop < this.offsetTop - this.offsetHeight
    },
    gotoCheckout() {
      this.$router.push({ path: this.redirect || '/checkout' })
    }
  }
}
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.isFixed {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
}
.price-card {
  margin-top: 20px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding-left: 20px;
    .left {
      span {
        &:first-child {
          cursor: pointer;
          &:hover {
            color: red;
          }
        }
        i {
          color: red;
          margin: 0 3px;
        }
        &:nth-child(2) {
          margin: 15px;
        }
      }
    }
    .right {
      span {
        color: red;
        &:nth-child(2) {
          font-size: 30px;
          margin-left: 5px;
        }
      }
      button {
        width: 200px;
        height: 50px;
        border: none;
        margin-left: 40px;
        background-color: rgb(221, 145, 62);
        color: #fff;
        cursor: pointer;
        font-size: 18px;
        &:hover {
          background-color: rgb(228, 157, 81);
        }
      }
    }
  }
}
</style>
