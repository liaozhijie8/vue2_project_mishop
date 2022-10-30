<template>
  <div class="wear-container">
    <productBox :title="title" :sort-data="spanlist" :is-page="true"></productBox>
  </div>
</template>
<script>
import productBox from '@/components/productBox/index.vue'
export default {
  name: 'wearable-device',
  components: { productBox },
  data() {
    return {
      title: '智能穿戴',
      spanlist: [
        { id: 1, sort: '热门', list: ['净水器', 2, 3, 4, 5, 6, 7, 8] },
        { id: 2, sort: '穿戴', list: ['烟灶', 2, 3, 4, 5, 6, 7, 8] }
      ]
    }
  }
}
</script>
<style scoped lang="scss"></style>
