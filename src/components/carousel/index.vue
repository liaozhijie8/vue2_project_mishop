<template>
  <el-carousel :interval="6000" arrow="always" height="560px">
    <el-carousel-item v-for="item in itemData" :key="item.id">
      <el-image
        style="width: 100%; height: 100%"
        :src="item.url"
        fit="contain"
      ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'carousel-box',
  props: {
    itemData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
// .el-carousel__indicators {
//   width: 300px;
// }
.el-carousel__button {
  background-color: rgb(138, 132, 132);
  height: 3px;
  width: 30px;
}
</style>
