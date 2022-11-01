<template>
  <div class="comment-box">
    <div class="avatar">
      <img :src="commentData.avatar" alt="用户头像" />
    </div>
    <div class="content">
      <div class="top">
        <div class="left">
          <p>{{ commentData.name }}</p>
          <p>{{ commentData.time }}</p>
        </div>
        <div class="right">
          <p>超爱</p>
        </div>
      </div>
      <div class="comment">
        <p>{{ commentData.comment }}</p>
      </div>
      <div class="postImg">
        <img :src="commentData.photo" alt="晒图" />
      </div>
      <div class="likes">点赞</div>
      <div class="reply">
        <input class="init" type="text" placeholder="回复楼主" />
        <button class="init" style="border-left: none">回复</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment-box',
  props: {
    commentData: {
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
* {
  box-sizing: border-box;
}
.comment-box {
  background-color: #fff;
  position: relative;
  padding: 30px 30px 50px 100px;
  margin-bottom: 10px;
  .avatar {
    position: absolute;
    left: 40px;
    top: 50px;
    height: 47px;
    width: 47px;
  }
  .content {
    div {
      margin-top: 10px;
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .comment {
      p {
        font-size: 14px;
      }
    }
    .postImg {
      width: 400px;
      height: 300px;
      margin: 10px 0;
    }
    .reply {
      display: flex;
      .init {
        height: 45px;
        border: solid 1px rgb(194, 190, 190);
      }
      input {
        flex: 1;
        padding: 10px 0 10px 20px;
      }
      button {
        width: 100px;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
