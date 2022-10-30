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
        <el-button
          type="primary"
          class="submitBnt"
          :disabled="is_submit"
          @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
    <ul class="other">
      <li>忘记密码?</li>
      <li>手机号登录</li>
    </ul>
  </div>
</template>
<script>
import { checkAccount, validatePass, validatePass2 } from './validate'
import store from '@/store'
import { notification } from '@/utils/notification'
export default {
  name: 'login-template',
  data() {
    return {
      ruleForm: {
        user_name: '',
        password: '',
        checkPass: ''
      },
      is_submit: false,
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
            .dispatch('user/getLogin', this.ruleForm)
            .then((res) => {
              notification(this, '欢迎回来', res, 'success')
              this.$router.push('/')
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
.submitBnt {
  width: 100%;
  height: 60px;
}
.other {
  display: flex;
  justify-content: space-between;
  li {
    font-size: 14px;
    color: orange;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
