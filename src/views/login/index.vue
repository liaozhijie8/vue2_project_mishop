<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user_name">
        <el-input v-model="ruleForm.user_name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <button @click="add">+</button>
  </div>
</template>
<script>
import { checkAccount, validatePass, validatePass2 } from './validate'
import store from '@/store'
import { notification } from '@/utils/notification'
export default {
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
          console.log(this.ruleForm)
          store
            .dispatch('user/getLogin', this.ruleForm)
            .then((res) => {
              notification(this, '欢迎回来', res, 'success')
            })
            .catch((err) => {
              notification(this, '出错拉', err, 'error')
            })
        } else {
          notification(this, '出错拉', '请输入完整信息', 'error')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    add() {
      this.count2++
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
<style scoped lang="scss"></style>
