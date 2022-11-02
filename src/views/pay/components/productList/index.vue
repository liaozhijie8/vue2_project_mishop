<template>
  <div class="product-list">
    <div class="container">
      <card :is-title="true"></card>
      <card v-for="item in cardList" :key="item.id" :card-data="item"></card>
    </div>
  </div>
</template>
<script>
import card from './components/card/index.vue'
export default {
  name: 'product-list',
  components: {
    card
  },
  data() {
    return {
      cardList: [
        {
          id: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        },
        {
          id: 2,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209261919_8a0fda0b967990c3fe956b2e8b4e6608.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '2999'
        },
        {
          id: 3,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        },
        {
          id: 4,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        },
        {
          id: 5,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209261919_8a0fda0b967990c3fe956b2e8b4e6608.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '2999'
        },
        {
          id: 6,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        },
        {
          id: 7,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        },
        {
          id: 8,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209261919_8a0fda0b967990c3fe956b2e8b4e6608.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '2999'
        },
        {
          id: 9,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        },
        {
          id: 10,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        },
        {
          id: 11,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209261919_8a0fda0b967990c3fe956b2e8b4e6608.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '2999'
        },
        {
          id: 12,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        },
        {
          id: 13,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202206131049_c88201c0d878a8168fd3c8de3bc26c96.png?thumb=1&w=80&h=80&f=webp&q=90',
          title: '米家声波电动牙刷',
          price: '49.9'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.product-list {
  margin-top: 30px;
}
</style>
