<template>
  <div class="service-container">
    <div class="header">
      <p class="title">{{ title }}</p>
      <a href="">了解尊享服务 ></a>
    </div>
    <div
      class="card"
      v-for="item in serviceData"
      :key="item.id"
      @click="choseEvent(item)"
    >
      <div class="option">
        <input type="radio" :name="title" :checked="isChose === item.id" />
      </div>
      <div class="icon">
        <img :src="item.icon" alt="服务图标" />
      </div>
      <div class="main">
        <div class="title">{{ item.service }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="service-option">
          <div class="left">
            <input
              class="init"
              type="checkbox"
              :name="item.service"
              :checked="isChose === item.id"
            />
            <span class="init" style="color: black">我已阅读</span
            ><a href="" class="init">服务条款</a><span class="init">|</span
            ><a href="" class="init">常见问题</a>
          </div>
          <p>{{ item.price }}元</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service-box',
  props: {
    // 标题数据
    title: {
      type: String,
      default: ''
    },
    // 渲染卡片数据
    serviceData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      isChose: 99,
      temp: false
    }
  },
  methods: {
    choseEvent(val) {
      const { id } = val
      const title = this.$props.title
      if (this.isChose === id) {
        // 再次点击取消选择
        this.isChose = !this.isChose
        this.isChose = 99
        this.$emit('chose-service', { title })
      } else {
        // 第一次选择
        this.temp = true
        this.isChose = id
        this.$emit('chose-service', { ...val, title })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.service-container {
  margin-top: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .title {
      font-size: 16px;
    }
    a {
      color: red;
    }
  }
  .card {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #c8c3c3;
    cursor: pointer;
    .option {
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    .icon {
      img {
        width: 50px;
        height: 50px;
        padding-right: 10px;
      }
    }
    .main {
      flex: 1;
      .title {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 600;
      }
      .desc {
        margin-bottom: 10px;
        color: #c8c3c3;
      }
      .service-option {
        display: flex;
        justify-content: space-between;
        .left {
          .init {
            vertical-align: middle;
          }
          a {
            margin-left: 5px;
            color: red;
          }
          span {
            margin: 0 5px;
            color: red;
          }
        }
      }
    }
  }
}
</style>
