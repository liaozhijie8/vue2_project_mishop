<template>
  <div class="comment-container">
    <navHeader is-active="comment" :is-buy="true"></navHeader>
    <commentTab></commentTab>
    <commentDetail></commentDetail>
  </div>
</template>
<script>
import navHeader from '../buy/components/navHeader/index.vue'
import commentTab from './components/tab/index.vue'
import commentDetail from './components/detail/index.vue'
export default {
  name: 'comment',
  components: {
    navHeader,
    commentTab,
    commentDetail
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.comment-container{

}
</style>
