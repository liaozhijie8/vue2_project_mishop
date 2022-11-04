<template>
  <div>
    <formTemplate @form-event="sumbitEvent"></formTemplate>
    <ul class="other">
      <li>忘记密码?</li>
      <li>手机号登录</li>
    </ul>
  </div>
</template>
<script>
import formTemplate from '../components/formTemplate/index.vue'
import { notification } from '@/utils/notification'
import store from '@/store'
export default {
  name: 'login-box',
  components: {
    formTemplate
  },
  data() {
    return {}
  },
  methods: {
    sumbitEvent(val) {
      store
        .dispatch('user/getLogin', val)
        .then((res) => {
          notification(this, '欢迎回来', res, 'success')
        })
        .catch((err) => {
          notification(this, '出错拉', err, 'error')
        })
    }
  }
}
</script>
<style scoped lang="scss">
.other{
  display: flex;
  justify-content: space-between;
  li{
    color: orange;
    cursor: pointer;
  }
}
</style>
