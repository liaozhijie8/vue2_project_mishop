import axios from 'axios'
import { BASE_URL } from '@/constant'
/* mock.js设置 */
const mock = false
if (mock) {
  require('@/mock/user')
}
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})
/* 请求拦截器 */
service.interceptors.request.use(
  (config) => {
    // if (user.user_token) {
    //   /* 前端判断token是否失效 */
    //   if (isTokenTimeout()) {
    //     // 超时，退出
    //     user.logout('有效期过期,请重新登录')
    //     return Promise.reject(new Error('token失效'))
    //   }
    //   config.headers.Authorization = 'Bearer ' + user.user_token
    // }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
/* 响应拦截器 */
service.interceptors.response.use(
  (res) => {
    const { message, result } = res.data
    const temp = {
      message,
      result
    }
    return temp
  },
  (err) => {
    if (err.response) {
      const { message } = err.response.data
      /* 检测后端token出错处理 */
      // if (code === '10101') {
      //   user.logout('请重新登录')
      // }
      return Promise.reject(message)
    }
    return Promise.reject(err)
  }
)

export default service
