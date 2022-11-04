<template>
  <div>
    <formTemplate form-type="signup" @form-event="sumbitEvent"></formTemplate>
  </div>
</template>
<script>
import formTemplate from '../components/formTemplate/index.vue'
import store from '@/store'
import { notification } from '@/utils/notification'
export default {
  name: 'signup-box',
  components: {
    formTemplate
  },
  data() {
    return {}
  },
  methods: {
    sumbitEvent(val) {
      store
        .dispatch('user/getsignin', val)
        .then((res) => {
          notification(this, '注册成功', res, 'success')
          store.dispatch('user/getLogin', val)
        })
        .catch((err) => {
          notification(this, '出错拉', err, 'error')
        })
    }
  }
}
</script>
<style scoped lang="scss"></style>
