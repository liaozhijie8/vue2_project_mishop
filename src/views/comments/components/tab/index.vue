<template>
  <div class="comment-tab">
    <div class="container">
      <div class="tab-container">
        <p class="title">大家认为</p>
        <ul>
          <li
            class=""
            v-for="item in list"
            :key="item.id"
            :class="{ active: is_active === item.titel }"
            @click="is_active = item.titel"
          >
            {{ item.titel }}<span>({{ item.number }})</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment-tab',
  data() {
    return {
      is_active: '综合',
      list: [
        { id: 1, titel: '综合', number: 222 },
        { id: 2, titel: '价格实惠', number: 2122 },
        { id: 3, titel: '颜值够高', number: 33 },
        { id: 4, titel: '运行稳定', number: 222 },
        { id: 5, titel: '续航出色', number: 222 },
        { id: 6, titel: '拍照一绝', number: 222 },
        { id: 7, titel: '性价比之王', number: 222 },
        { id: 8, titel: '全部', number: 222 }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.comment-tab {
  margin: 30px 0;
  .container {
    .tab-container {
      background-color: #fff;
      padding: 40px;
      .title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      ul {
        height: 80px;
        overflow: hidden;
        overflow-x: hidden;
        white-space: nowrap;
        &:hover {
          overflow-x: auto;
        }
        .active {
          background-color: orange;
        }
        li {
          display: inline-block;
          width: 170px;
          height: 46px;
          margin-right: 22px;
          background-color: rgb(199, 193, 193);
          color: #fff;
          text-align: center;
          line-height: 46px;
          cursor: pointer;
          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
