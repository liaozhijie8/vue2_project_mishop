<template>
  <div class="delivery-container">
    <p>配送方式</p>
    <p>{{wayData}}</p>
  </div>
</template>
<script>
export default {
  name: 'delivery-way',
  props: {
    wayData: {
      type: String,
      default: function () {
        return '包邮'
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
.delivery-container {
  padding: 30px 0;
  border-top: 1px solid $colorF;
  border-bottom: 1px solid $colorF;
  p {
    &:first-child {
      font-size: 16px;
    }
    &:last-child {
      color: red;
    }
    display: inline-block;
    margin-right: 50px;
  }
}
</style>
