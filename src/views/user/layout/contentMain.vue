<template>
  <div class="container">
    <div class="content-container">
      <div class="sidebar">
        <SidebarBox></SidebarBox>
      </div>
      <div class="content-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarBox from './sidebar/index.vue'
export default {
  name: 'content-main',
  components: {
    SidebarBox
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.container{
  .content-container{
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    .sidebar{
      width: 230px;
    }
    .content-box{
      width: 980px;;
    }
  }
}
</style>
