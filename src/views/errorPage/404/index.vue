<template>
  <div class="error-container">
    <div>
      <div class="img-box">
        <img
          src="http://s1.mi.com/m/ghd/2016/x0718m03/static/img/404.3ec06ef.jpg"
          alt=""
        />
      </div>
      <div class="tip">
        <h1>咦~页面不见了~</h1>
      </div>
      <div class="go-back" @click="$router.push('/')">
        返回首页
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'error-page',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.error-container {
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div{
    text-align: center;
  }
  .img-box {
    width: 400px;
    height: 400px;
  }
  .tip{
    margin-bottom: 50px;
    h1{
      font-size: 40px;
      font-weight: 400;
    }
  }
  .go-back{
    font-size: 30px;
    font-weight: 400;
    color: rgb(100, 100, 238);
    cursor: pointer;
  }
}
</style>
