<template>
  <div class="init">
    <p class="title">{{ data.title }}</p>
    <ul>
      <li
        v-for="item in data.list"
        :key="item._id"
        :class="{ 'is-active': is_chose === item._id }"
        @click="choseEvent(item)"
      >
        {{ item.spec }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'option-box',
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      is_chose: 1
    }
  },
  methods: {
    choseEvent(val) {
      this.is_chose = val._id
      return this.$emit('chose-value', val)
    }
  },
  mounted() {
    this.$emit('chose-value', this.$props.data.list[0])
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
    .is-active {
      color: orange;
      border: 1px solid orange;
    }
  }
}
</style>
