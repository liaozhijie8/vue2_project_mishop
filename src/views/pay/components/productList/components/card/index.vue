<template>
  <div class="card-box" :class="{ 'is-header': !isTitle }">
    <div class="chose"><input type="checkbox" value="" /><span v-if="isTitle">全选</span></div>
    <div class="col-img">
      <img v-if="!isTitle" :src="cardData.img" alt="" />
    </div>
    <div class="title" :class="{ active: !isTitle }">
      {{ isTitle ? '商品名称' : cardData.title }}
    </div>
    <div class="price" :class="{ active: !isTitle }">
      {{ isTitle ? '单价' : `${cardData.price}元` }}
    </div>
    <div class="number" :class="{ active: !isTitle }">
      <p v-if="isTitle">数量</p>
      <el-input-number
        v-else
        v-model="num"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></el-input-number>
    </div>
    <div class="total" :class="{ active: !isTitle }">小计</div>
    <div class="action">
      <p v-if="isTitle">操作</p>
      <i v-else class="el-icon-close"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    // 是否为标题栏
    isTitle: {
      type: Boolean,
      default: false
    },
    // 渲染数据
    cardData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return { num: 1 }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
* {
  box-sizing: border-box;
}
.card-box {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid $colorF;
  div {
    text-align: center;
  }
  .active {
    font-size: 18px;
  }
  .chose {
    width: 47px;
    text-align: start;
    input,
    span {
      vertical-align: middle;
    }
    span {
      margin-left: 10px;
    }
  }
  .col-img {
    width: 120px;
    padding: 20px;
  }
  .title {
    width: 300px;
    text-align: start;
  }
  .price,
  .total,
  .action {
    width: 170px;
  }
  .number {
    width: 200px;
  }
  .action {
    i {
      font-size: 15px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      text-align: center;
      line-height: 30px;
      border-radius: 30px;
      &:hover {
        background-color: red;
        color: #fff;
        font-weight: 800;
      }
    }
  }
}
.is-header {
  padding: 0 20px;
}
</style>
