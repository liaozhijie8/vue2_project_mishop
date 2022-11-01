<template>
  <div class="after-sale">
    <div class="data">
      <p><span>469</span>人购买后满意</p>
    </div>
    <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="98"
      status="success"
      :format="format"
    ></el-progress>
  </div>
</template>
<script>
export default {
  name: 'after-sale',
  data() {
    return {}
  },
  methods: {
    format(percentage) {
      return '满意度:' + percentage
    }
  }
}
</script>
<style scoped lang="scss">
.after-sale {
  margin-left: 20px;
  background-color: #fff;
  padding: 20px;
  .data {
    p {
      color: rgb(202, 198, 198);
      padding: 20px 0;
      span {
        font-size: 40px;
        color: red;
      }
    }
  }
  ::v-deep(.el-progress-bar__outer),
  ::v-deep(.el-progress-bar__inner) {
    border-radius: inherit;
    text-align: center;
  }
}
</style>
