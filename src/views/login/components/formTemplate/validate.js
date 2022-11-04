import store from '@/store'
export const checkAccount = (rule, value, callback) => {
  if (!value) {
    callback(new Error('用户名不能为空'))
  } else if (value.length > 6) {
    callback(new Error('用户名过长'))
  } else {
    callback()
  }
}
export const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length >= 12 || value.length <= 6) {
    callback(new Error('密码应在6-12位'))
  } else {
    callback()
  }
}
export const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== store.getters.confirmPassword) {
    callback(new Error('密码不一致'))
  } else {
    callback()
  }
}
// 获取图形码
export const validateSvgCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (store.getters.valioSvgCode !== store.getters.valiSvgCode) {
    callback(new Error('验证码不正确'))
  } else {
    callback()
  }
}
