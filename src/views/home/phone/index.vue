<template>
  <div class="phone-container">
    <productBox :title="title" :sort-data="spanlist" :is-more="true" :is-page="true"></productBox>
  </div>
</template>
<script>
import productBox from '@/components/productBox/index.vue'
export default {
  name: 'phone',
  components: { productBox },
  data() {
    return {
      title: '手机',
      spanlist: [
        { id: 1, sort: '净水器', list: ['净水器', 2, 3, 4, 5, 6, 7, 8] },
        { id: 2, sort: '烟灶', list: ['烟灶', 2, 3, 4, 5, 6, 7, 8] },
        { id: 3, sort: '微波炉', list: [1, 2, 3, 4, 5, 6, 7, 8] }
      ]
    }
  }
}
</script>
<style scoped lang="scss"></style>
