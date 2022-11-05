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
      <el-form-item prop="svgCode">
        <div class="catptchabox">
          <el-input
            class="svg-input"
            type="text"
            v-model="ruleForm.svgCode"
            autocomplete="off"
            placeholder="请输入验证码"
          ></el-input>
          <div
            class="svg-box"
            v-html="svg"
            title="看不清？点击刷新"
            @click="getSvgCode()"
          ></div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="submitBnt"
          :disabled="is_submit"
          @click="submitForm('ruleForm')"
          >{{ formType === 'login' ? '登录' : '注册' }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  checkAccount,
  validatePass,
  validatePass2,
  validateSvgCode
} from './validate'
import store from '@/store'
import { getSvgCaptcha } from '@/api/user'
import { SID } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
const { v4: uuidv4 } = require('uuid')
export default {
  name: 'login-from-template',
  props: {
    formType: {
      type: String,
      default: 'login'
    }
  },
  data() {
    return {
      ruleForm: {
        user_name: '',
        password: '',
        checkPass: '',
        svgCode: ''
      },
      is_submit: false,
      rules: {
        user_name: [{ validator: checkAccount, trigger: 'blur' }],
        password: [
          { validator: validatePass, trigger: 'blur' },
          {
            message: '必须包含大小写字母和数字的组合，不能使用特殊字符',
            trigger: 'blur',
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,12}$/
          }
        ],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        svgCode: [{ validator: validateSvgCode, trigger: 'blur' }]
      },
      svg: '',
      // 发给后端的唯一标识符
      sid: ''
    }
  },
  methods: {
    // 获取图形验证码
    getSvgCode() {
      getSvgCaptcha().then((res) => {
        this.svg = res.result.svg.data
        // 把验证码信息存起来
        store.commit('user/setoSvgCode', res.result.svg.text)
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('form-event', this.ruleForm)
        }
      })
    },
    // 设置后端验证登录的唯一标识符 (未完成后端操作)
    setSid() {
      if (getItem(SID)) {
        this.sid = getItem(SID)
      } else {
        this.sid = uuidv4()
        setItem(SID, this.sid)
      }
      store.commit('user/setSid', this.sid)
    }
  },
  watch: {
    /* 监听对象变化,为了vuex和外部文件validate校对 */
    'ruleForm.password'(newVal, oldVal) {
      store.commit('user/setConfirmPassword', newVal)
    },
    'ruleForm.svgCode'(newval, oldVal) {
      store.commit('user/setSvgCode', newval)
    }
  },
  mounted() {
    this.getSvgCode()
    this.setSid()
  }
}
</script>
<style scoped lang="scss">
::v-deep(.el-input__inner) {
  height: 60px;
}
.catptchabox {
  display: flex;
  align-items: center;
  .sva-input {
    flex: 1;
  }
  .svg-box {
    width: 150px;
    margin-left: 20px;
    background-color: #fff;
    cursor: pointer;
  }
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
