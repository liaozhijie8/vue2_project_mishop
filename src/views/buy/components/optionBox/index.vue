<template>
  <div class="init">
    <p class="title">{{data.title}}</p>
    <ul>
      <li v-for="item in data" :key="item._id">{{item.spec}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'option-box',
  props: {
    data: {
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
<style scoped lang="scss">
.init {
  .title {
    margin-bottom: 10px;
    font-size: 14px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: pointer;

    li {
      width: 275px;
      height: 40px;
      margin-bottom: 15px;
      border: 1px solid #000;
      text-align: center;
      line-height: 40px;
      &:hover {
        color: orange;
        border: 1px solid orange;
      }
    }
  }
}
</style>
