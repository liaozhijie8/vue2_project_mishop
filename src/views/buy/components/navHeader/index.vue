<template>
  <div class="nav-header" ref="menu" :class="headerFixed ? 'isFixed' : ''">
    <div class="container">
      <div class="title">
        <span class="name">小米手机</span>
        <span class="other" v-for="(item, index) in 4" :key="index"
          >xiaomicc{{ item }}</span
        >
      </div>
      <div class="detail">
        <ul>
          <li><a href="/detail" :class="{'li-active':isActive==='sketch'}">概述页</a></li>
          <li><a href="" :class="{'li-active':isActive==='parameter'}">参数页</a></li>
          <li><a href="" :class="{'li-active':isActive==='F'}">F码通道</a></li>
          <li><a href="">咨询客服</a></li>
          <li><a href="/comment" :class="{'li-active':isActive==='comment'}">用户评价</a></li>
          <li v-if="isBuy">
            <button class="buyBnt" @click="gotoBuy">立即购买</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import router from '@/router'

export default {
  name: 'nav-header',
  props: {
    // 是否显示购买按钮
    isBuy: {
      type: Boolean,
      default: false
    },
    // 激活哪个按钮
    isActive: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      offsetTop: 0,
      offsetHeight: 0,
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
      // 判断页面的滚动距离是否大于吸顶元素的位置
      this.headerFixed = scrollTop > this.offsetTop - this.offsetHeight
    },
    gotoBuy() {
      router.push('/buy')
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
.isFixed {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
}
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
      .li-active{
        color: orange;
      }
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
        .buyBnt {
          width: 120px;
          height: 30px;
          border: none;
          background-color: $colorA;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
