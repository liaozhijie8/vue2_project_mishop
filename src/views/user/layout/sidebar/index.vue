<template>
  <div class="sidebar-container">
    <ul>
      <li>订单中心</li>
      <li  @click="$router.push('/user/order')">我的订单</li>
      <li>评价晒单</li>
      <li>话费充值订单</li>
      <li>以旧换新订单</li>
    </ul>
    <ul>
      <li>个人中心</li>
      <li @click="$router.push('/user/portal')">我的个人中心</li>
      <li>消息通知</li>
      <li>购买资格</li>
      <li>现金账户</li>
      <li>小米礼品卡</li>
      <li>现金券</li>
      <li>喜欢的商品</li>
      <li>优惠券</li>
      <li>收货地址</li>
      <li>红包</li>
    </ul>
    <ul>
      <li>售后服务</li>
      <li>服务记录</li>
      <li>申请服务</li>
      <li>领取快递报销</li>
    </ul>
    <ul>
      <li>账户管理</li>
      <li>个人信息</li>
      <li>修改密码</li>
      <li>注销服务</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'sidebar-box',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
.sidebar-container {
  background-color: #fff;
  padding: 40px 0 10px 40px;
  ul {
    margin-bottom: 30px;
    li {
      color:$colorC;
      margin-bottom: 10px;
      cursor: pointer;
      &:first-child {
        cursor: text;
        margin-bottom: 20px;
        font-size: 14px;
        color:$colorB;
      }
    }
  }
}
</style>
