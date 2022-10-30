<template>
  <div class="banner">
    <div class="container">
      <a :href="`product/${imgData.id}`">
        <img v-lazy="imgData.img" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'banner',
  props: {
    imgData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/base.scss';
.banner {
  margin: 20px 0;
  .container {
    a {
      display: block;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
