<template>
  <div class="coupon-container" v-if="centerDialogVisible">
    <div class="usecoupon" v-if="dialogType === 'use'">
      <div class="header">
        <span @click="togTig(true)" :class="{ active: is_display }"
          >已绑定的礼品卡</span
        >
        <span>|</span>
        <span @click="togTig(false)" :class="{ active: !is_display }"
          >输入礼品卡以绑定</span
        >
      </div>
      <div class="coded" v-if="is_display">
        <div class="list">没有发现可用的礼品卡</div>
        <div class="bnt">
          <button @click="closeClick">取消</button>
        </div>
      </div>
      <div class="inputCode" v-else>
        <div>
          <span>密码:</span
          ><input class="code" placeholder="请输入礼品卡密码" />
        </div>
        <div><span>验证码:</span><input placeholder="请输入验证码" /></div>
        <div>
          <span></span>
          <div>
            <button>绑定礼品卡</button><button @click="closeClick">取消</button>
          </div>
        </div>
      </div>
    </div>
    <div class="chose" v-if="dialogType === 'chose'">
      <div class="header">选择优惠券</div>
      <div class="coupon">
        <div class="empty">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/buycheckout/nocoupon-tip.png"
            alt=""
          />
        </div>
        <p>您暂时没有可用的优惠券</p>
      </div>
      <div class="bnt">
        <button @click="closeClick">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'coupon-box',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    dialogType: {
      type: String,
      default: 'use'
    }
  },
  data() {
    return {
      centerDialogVisible: this.$props.isActive,
      is_display: true
    }
  },
  methods: {
    closeClick() {
      this.centerDialogVisible = false
      return this.$emit('close-event', false)
    },
    togTig(val) {
      this.is_display = val
    }
  },
  watch: {
    isActive() {
      if (this.$props.isActive) {
        this.centerDialogVisible = this.$props.isActive
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
* {
  box-sizing: border-box;
}
.coupon-container {
  background-color: #fff;
  width: 660px;
  .usecoupon {
    padding: 20px;
    .header {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      span {
        font-size: 14px;
        color: $colorD;
        cursor: pointer;
      }
      .active {
        color: red;
      }
    }
    .coded {
      .list {
        background-color: $colorE;
        margin: 0 30px;
        padding: 18px 0;
        text-align: center;
      }
      .bnt {
        width: 100%;
        text-align: center;
        button {
          width: 160px;
          height: 40px;
          margin: 20px auto;
          border: 1px solid $colorF;
          cursor: pointer;
          background-color: $colorC;
          color: #fff;
        }
      }
    }

    .inputCode {
      div {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        .code {
          width: 80%;
        }
        span {
          width: 60px;
        }
        input {
          height: 40px;
          padding: 10px;
        }
        button {
          width: 160px;
          height: 40px;
          border: 1px solid $colorF;
          cursor: pointer;
          background-color: $colorC;
          color: #fff;
          margin-right: 10px;
        }
      }
    }
  }
  .chose {
    text-align: center;
    .header {
      color: orange;
      font-size: 14px;
    }
    div {
      margin-top: 20px;
    }
    .coupon {
      .empty {
        width: 90px;
        height: 90px;
        margin: 0 auto;
      }
      p {
        margin-top: 10px;
        color: $colorC;
      }
    }
    .bnt {
      margin-bottom: 30px;
      button {
        width: 160px;
        height: 40px;
        margin: 20px auto;
        border: 1px solid $colorF;
        cursor: pointer;
        background-color: $colorC;
        color: #fff;
      }
    }
  }
}
</style>
