<template>
  <div class="productDetail-container">
    <navHeader :is-buy="true" is-active="sketch"></navHeader>
    <div class="content">
      <div>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote12prohxf26r/14423.png?x-fds-process=image/resize,q_90,f_webp"
          alt=""
        />
      </div>
      <div class="div2">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote12prohxf26r/14432.png?x-fds-process=image/resize,q_90,f_webp"
          alt=""
        />
      </div>
      <div class="div3">
        <ul>
          <li>热爱生活，热爱拍照</li>
          <li>就从你的新 Note 开始吧！</li>
          <li>旗舰高配的影像系统</li>
          <li>创意十足的特色功能</li>
          <li>11.11 重磅特惠，不容错过</li>
        </ul>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影慢慢回味每一瞬间的精彩</h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致!更能AI
          精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="playBnt" @click="showVideo">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote12prohxf26r/14453.png?x-fds-process=image/resize,q_90,f_webp"
            alt=""
          />
        </div>
        <div class="overlay"></div>
        <div class="video-box" :class="{ slide: is_showVideo }">
          <span class="icon-close" @click="showVideo"></span>
          <video src="/imgs/product/video.mp4" controls="controls" v-if="is_video"></video>
        </div>
      </div>
    </div>
    <!-- 全屏遮罩 -->
    <div class="overlay" v-if="is_showVideo"></div>
  </div>
</template>
<script>
import navHeader from '../buy/components/navHeader/index.vue'
export default {
  name: 'product-detail',
  components: {
    navHeader
  },
  data() {
    return {
      is_showVideo: false,
      is_video: false
    }
  },
  methods: {
    showVideo() {
      this.is_showVideo = !this.is_showVideo
      if (!this.is_showVideo) {
        setTimeout(() => {
          this.is_video = false
        }, 500)
      } else {
        this.is_video = true
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/mixin.scss';
.productDetail-container {
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  overflow-x: hidden;
  .content {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    .div2 {
      margin-top: -75px;
    }
    .div3 {
      background-color: #fff;
      display: flex;
      justify-content: center;
      padding: 50px 0;
      ul {
        text-align: center;
        li {
          font-size: 50px;
          padding: 10px 0;
        }
      }
    }
    .item-video {
      position: relative;
      height: 1200px;
      background: url('https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote12prohxf26r/11043.png?x-fds-process=image/resize,q_90,f_webp')
        no-repeat center;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 30px;
        margin-top: 100px;
      }
      p {
        margin-top: 10px;
        font-size: 20px;
      }
      .playBnt {
        position: absolute;
        top: 50%;
        margin-top: -50px;
        cursor: pointer;
        z-index: 10;
      }
      .overlay {
        position: absolute;
        z-index: 1;
      }
      .video-box {
        position: fixed;
        width: 900px;
        height: 500px;
        z-index: 11;
        top: 50%;
        left: 0;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: all 0.5s;
        &.slide {
          opacity: 1;
          left: 50%;
        }
        .icon-close {
          position: absolute;
          top: 20px;
          right: 20px;
          @include bgImg(20px, 20px, '@/assets/imgs/icon-close.png');
          cursor: pointer;
          z-index: 11;
          border-radius: 20px;
          &:hover {
            background-color: red;
          }
        }
        video {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
