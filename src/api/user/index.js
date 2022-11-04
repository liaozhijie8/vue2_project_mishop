import request from '@/utils/request'

/* 登录请求 */
export const login = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

/* 注册 */
export const register = (data) => {
  return request({
    url: '/register',
    method: 'POST',
    data
  })
}

export const test = () => {
  return request({
    url: '/test2',
    method: 'GET'
  })
}
/* 获取个人信息 */
export const profile = () => {
  return request({
    url: '/profile',
    method: 'GET'
  })
}
/* 获取图形验证码 */
export const getSvgCaptcha = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}
