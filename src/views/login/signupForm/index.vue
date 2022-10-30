<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="user_name">
        <el-input
          v-model="ruleForm.user_name"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="submitBnt" @click="submitForm('ruleForm')"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { checkAccount, validatePass, validatePass2 } from './validate'
import store from '@/store'
import { notification } from '@/utils/notification'
export default {
  name: 'signup-template',
  data() {
    return {
      ruleForm: {
        user_name: '',
        password: '',
        checkPass: ''
      },
      count2: '',
      rules: {
        user_name: [{ validator: checkAccount, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          store
            .dispatch('user/getsignin', this.ruleForm)
            .then((res) => {
              notification(this, '注册成功', res, 'success')
            })
            .catch((err) => {
              notification(this, '出错拉', err, 'error')
            })
        }
      })
    }
  },
  watch: {
    /* 监听对象变化,输入框密码校对 */
    'ruleForm.password'(newVal, oldVal) {
      store.commit('user/setConfirmPassword', newVal)
    }
  }
}
</script>
<style scoped lang="scss">
::v-deep(.el-input__inner) {
  height: 60px;
}
.submitBnt{
  width: 100%;
  height: 60px;
}
</style>
