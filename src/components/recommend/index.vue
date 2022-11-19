<template>
  <div class="recommend-box">
    <div class="container">
      <div class="header">
        <p>买购物车中商品的人还买了</p>
      </div>
      <div class="content">
        <ul>
          <li
            v-for="item in getAllGoods"
            :key="item.id"
            @click="openEvent(item.id)"
          >
            <div class="img-box">
              <el-image
                style="width: 100%; height: 100%"
                :src="getUrlData(item.img_url[0])"
                fit="contain"
              ></el-image>
            </div>
            <div class="title">{{ item.goods_name }}</div>
            <div class="price">
              <span>{{ item.goods_price }}</span
              >元
            </div>
            <div class="comment"><span>1.2</span>万人好评</div>
            <!-- 添加购物车 -->
            <div class="add">
              <button @click.stop="triggerTip(item.id)">加入购物车</button>
            </div>
            <div class="tip" :class="{ 'tip-active': isActive(item.id) }">
              成功加入购物车
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getUrl } from '@/utils/dataHandle'
import { openNewPage } from '@/utils/routeHandle'
export default {
  name: 'recommend-box',
  data() {
    return {
      is_chose: ''
    }
  },
  mounted() {
    if (!this.$store.getters.hasGoodsList) {
      this.$store.dispatch('goods/getGoodsList')
    }
  },
  methods: {
    triggerTip(val) {
      this.is_chose = val
      setTimeout(() => {
        this.is_chose = ''
      }, 3000)
    },
    isActive(val) {
      return this.is_chose === val
    },
    getUrlData(val) {
      return getUrl(val)
    },
    // 查看商品详情
    openEvent(id) {
      openNewPage(`/buy/${id}`)
    }
  },
  computed: {
    // 获取所有商品数据
    getAllGoods() {
      return this.$store.state.goods.goodsList
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
* {
  box-sizing: border-box;
}
.recommend-box {
  .container {
    margin-top: 30px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 20px;
      }
      &::after,
      &::before {
        content: ' ';
        border-bottom: 1px solid $colorF;
        height: 1px;
        width: 450px;
      }
    }
    .content {
      margin: 20px 0;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: #fff;
          margin-bottom: 20px;
          width: 230px;
          height: 300px;
          cursor: pointer;
          div {
            margin-bottom: 10px;
          }
          .img-box {
            width: 140px;
            height: 140px;
            margin-bottom: 20px;
          }
          &:hover {
            .add {
              bottom: 25px;
              opacity: 1;
            }
          }
          .add {
            position: absolute;
            transition: all 0.2s;
            bottom: -40px;
            opacity: 0;
            button {
              border: 1px solid red;
              width: 122px;
              height: 30px;
              background-color: #fff;
              font-size: 12px;
              cursor: pointer;
              &:hover {
                background-color: orange;
                color: #fff;
                border: none;
              }
            }
          }
          .tip {
            position: absolute;
            transition: all 0.5s;
            top: -26px;
            opacity: 0;
            padding: 5px;
            width: 100%;
            background-color: rgb(121, 234, 121);
            color: rgb(22, 21, 21);
            text-align: center;
          }
          .tip-active {
            opacity: 1;
            top: 0;
          }
        }
      }
    }
  }
}
</style>
