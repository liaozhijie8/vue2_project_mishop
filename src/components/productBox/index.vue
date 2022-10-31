<template>
  <div class="product-container">
    <div class="container">
      <div class="product-box">
        <div class="header">
          <h2 class="title">{{ title }}</h2>
          <div class="more">
            <ul class="isMore list" v-if="isMore">
              <li>查看更多</li>
              <li><i class="el-icon-arrow-right"></i></li>
            </ul>
            <ul class="list" v-else>
              <li
                @mouseenter="test(item.sort)"
                :class="{ 'list-active': classtest(item.sort) }"
                v-for="item in sortData"
                :key="item.id"
              >
                {{ item.sort }}
              </li>
            </ul>
          </div>
        </div>
        <div class="main">
          <div class="row">
            <div class="span4">
              <ul v-if="isPage">
                <li class="span4-item" @click="goBuy">
                  <img
                    v-lazy="
                      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/059f14c9ba134897be7db7a7286f1bb5.jpg?thumb=1&w=234&h=614&f=webp&q=90'
                    "
                    alt=""
                  />
                </li>
              </ul>
              <ul v-else>
                <li>上</li>
                <li>下</li>
              </ul>
            </div>
            <div class="span16">
              <div v-for="item in sortData" :key="item.id">
                <ul v-if="display_list === item.sort">
                  <li v-for="(list, index) in item.list" :key="index">
                    <img
                      v-lazy="
                        'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210262033_ef39fca0e37395d07682124770fd3ad9.png?thumb=1&w=200&h=200&f=webp&q=90'
                      "
                      alt=""
                    />
                    <h3 class="title">Redmi Note 12 5G</h3>
                    <p class="desc">
                      三星 OLED 护眼屏｜骁龙 5G 芯 | 5000mAh 电量
                    </p>
                    <p class="price">
                      <span class="num">1199</span>元<span>起</span>
                      <del><span class="num">2399</span>元</del>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from '@/router'

export default {
  name: 'product-box',
  props: {
    // 是否开启左边分页
    isPage: {
      type: Boolean,
      default: false
    },
    // 接收的渲染数据
    sortData: {
      type: Array,
      requrired: true
    },
    // 标题栏
    title: {
      type: String,
      requrired: true
    },
    // 是否显示查看更多
    isMore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      display_list: this.$props.sortData[0].sort
    }
  },
  methods: {
    test(val) {
      this.display_list = val
    },
    classtest(val) {
      return this.display_list === val
    },
    goBuy() {
      router.push('/shop/buy')
    }
  },
  computed: {}
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.product-container {
  .container {
    .product-box {
      display: flex;
      flex-direction: column;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .title {
          font-size: 22px;
          font-weight: 200;
        }
        .more {
          .isMore {
            &:hover {
              color: orange;
            }
          }
          .list {
            font-size: 16px;
            .list-active {
              color: orange;
              border-bottom: 2px solid orange;
            }
            li {
              display: inline-block;
              box-sizing: border-box;
              padding-left: 20px;
              padding: 10px;
              cursor: pointer;
            }
          }
        }
      }
      .main {
        .row {
          display: flex;
          justify-content: space-between;
          li {
            width: 234px;
            height: 300px;
            background-color: #fff;
            box-sizing: border-box;
            margin-bottom: 14px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); /* 鼠标悬浮时盒子出现的阴影 */
              transform: translate(-2px, -2px); /* 鼠标悬浮时盒子上移10px */
            }
          }
          .span4 {
            .span4-item {
              height: 614px;
            }
          }
          .span16 {
            margin-left: 14px;
            ul {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              li {
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                  width: 160px;
                  height: 160px;
                }
                .title {
                  margin-top: 20px;
                }
                .desc {
                  width: 210px;
                  margin: 10px 0;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  font-size: 12px;
                  color: #b0b0b0;
                  text-align: center;
                }
                .price {
                  margin-top: 20px;
                  color: #ff6700;
                  del {
                    margin-left: 10px;
                    color: #b0b0b0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
