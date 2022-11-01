<template>
  <div class="comment-detail">
    <div class="container">
      <div class="left">
        <div class="header">
          <div class="title">热门评价</div>
          <div class="chose">
            <input type="checkbox" /><span>只显示带图评价</span>
          </div>
        </div>
        <commentBox v-for="item in commentList" :key="item.id" :comment-data="item.data"></commentBox>
        <button class="loadMore">加载更多</button>
      </div>
      <div class="right">
        <afterSale></afterSale>
      </div>
    </div>
  </div>
</template>
<script>
import commentBox from '../commentBox/index.vue'
import afterSale from '../afterSale/index.vue'
export default {
  name: 'comment-detail',
  components: {
    commentBox,
    afterSale
  },
  data() {
    return {
      commentList: [
        {
          id: 1,
          data: {
            name: '小明',
            avatar:
              'https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/a07832c5-e09b-47ac-9616-5dc47a1c5e4c.jpg',
            time: '2002-10-22',
            comment: '真好用',
            photo: 'https://i1.mifile.cn/a2/1667221099_2467934_s864_1920wh.jpg'
          }
        },
        {
          id: 2,
          data: {
            name: '菜寻鲲',
            avatar:
              'https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/a07832c5-e09b-47ac-9616-5dc47a1c5e4c.jpg',
            time: '2002-10-22',
            comment: '真好用',
            photo: 'https://i1.mifile.cn/a2/1667221099_2467934_s864_1920wh.jpg'
          }
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.comment-detail {
  .container {
    display: flex;
    .left {
      flex: 1;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
        .title {
          font-size: 18px;
        }
        .chose {
          input {
            vertical-align: middle;
          }
          span {
            margin-left: 5px;
            vertical-align: middle;
          }
        }
      }
      .loadMore{
        height: 45px;
        width: 100%;
        background-color: #fff;
        border: none;
        margin-bottom: 30px;
        color: red;
      }
    }
    .right {
      width: 420px;
      margin-top: 64px;
    }
  }
}
</style>
