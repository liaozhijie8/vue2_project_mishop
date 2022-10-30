<template>
  <div class="service-container">
    <div class="container">
      <div class="service-list">
        <div class="list">
          <a href=""><i class="el-icon-delete"></i>预约维修服务</a>
        </div>
        <div class="list">
          <a href=""><i class="el-icon-delete"></i>预约维修服务</a>
        </div>
        <div class="list">
          <a href=""><i class="el-icon-delete"></i>预约维修服务</a>
        </div>
        <div class="list">
          <a href=""><i class="el-icon-delete"></i>预约维修服务</a>
        </div>
        <div class="list">
          <a href=""><i class="el-icon-delete"></i>预约维修服务</a>
        </div>
      </div>
      <div class="service-link">
        <dl>
          <dt>选购指南</dt>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
        </dl>
        <dl>
          <dt>选购指南</dt>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
        </dl>
        <dl>
          <dt>选购指南</dt>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
        </dl>
        <dl>
          <dt>选购指南</dt>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
        </dl>
        <dl>
          <dt>选购指南</dt>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
          <dd>手机</dd>
        </dl>
        <div class="hotline">电话166666666</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ServiceBar',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
.service-container {
  background-color: #fff;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .service-list {
      display: flex;
      justify-content: center;
      height: 50px;
      border-bottom: 1px solid $colorF;
      .list {
        position: relative;
        width: 230px;
        text-align: center;
        line-height: 50px;
        a {
          font-size: 16px;
          color: $colorB;
          i {
            margin-right: 5px;
            font-size: 20px;
          }
          &:hover {
            color: $colorA;
          }
        }
        &:before {
          content: ' ';
          position: absolute;
          top: 14px;
          right: 0;
          border-left: 1px solid $colorF;
          height: 20px;
          width: 1px;
        }
        &:last-child:before {
          display: none;
        }
      }
    }
    .service-link {
      display: flex;
      justify-content: center;
      margin: 30px 0;
      dl {
        width: 160px;
        text-align: center;
        dt {
          margin-bottom: 20px;
        }
        dd {
          margin: 0;
          margin-bottom: 10px;
        }
      }
      .hotline {
        width: 250px;
        height: 80px;
        text-align: center;
        border-left: 1px solid $colorF;
      }
    }
  }
}
</style>
