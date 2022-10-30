import store from '@/store'
export const checkAccount = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('用户名不能为空'))
  } else {
    callback()
  }
}
export const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请次输入密码'))
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
