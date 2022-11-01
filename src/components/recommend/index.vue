<template>
  <div class="recommend-box">
    <div class="container">
      <div class="header">
        <p>买购物车中商品的人还买了</p>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in recommendList" :key="item.id">
            <img :src="item.img" alt="商品图片" />
            <div class="title">{{ item.title }}</div>
            <div class="price">
              <span>{{ item.price }}</span
              >元
            </div>
            <div class="comment">
              <span>{{ item.commentNum }}</span
              >万人好评
            </div>
            <!-- 添加购物车 -->
            <div class="add">
              <button @click="triggerTip(item.title)">加入购物车</button>
            </div>
            <div class="tip" :class="{ 'tip-active': isActive(item.title)}">
              成功加入购物车
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommend-box',
  data() {
    return {
      recommendList: [
        {
          id: 1,
          title: '小米数据线',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b0db666bc26e888d3e2a3d18ac536ad.png?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 2,
          title: '米家电动剃须刀',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2de9d5f25140b0ac9aaf15ab6228a030.jpg?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 3,
          title: '红米note',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209221557_a006e9e2738b11144e3e1ebe09e80384.png?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 4,
          title: '黑纱',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f8c7c2c30b4cdcdcc2bd748a8922495.jpg?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 5,
          title: '电动剃须刀',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210272136_5444cd80092a07aecb9af297dae93470.png?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 6,
          title: '耳机',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b0db666bc26e888d3e2a3d18ac536ad.png?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 7,
          title: '马桶',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2de9d5f25140b0ac9aaf15ab6228a030.jpg?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 8,
          title: '铅笔',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209221557_a006e9e2738b11144e3e1ebe09e80384.png?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 9,
          title: '米刀',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f8c7c2c30b4cdcdcc2bd748a8922495.jpg?thumb=1&w=180&h=180&f=webp&q=90'
        },
        {
          id: 10,
          title: '米家电剃须刀',
          price: 111,
          commentNum: 23,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202210272136_5444cd80092a07aecb9af297dae93470.png?thumb=1&w=180&h=180&f=webp&q=90'
        }
      ],
      is_chose: ''
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
          img {
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
