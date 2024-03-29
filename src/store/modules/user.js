import { login, register, profile } from '@/api/user'
import { addUserRole } from '@/api/userRole'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import store from '@/store'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {},
    // 用户输入的密码(需要验证)
    confirmPassword: '',
    // 用户输入的验证码
    svgCode: '',
    // 后端获取的验证码
    oSvgCode: '',
    // sid唯一标识符
    sid: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setConfirmPassword(state, payload) {
      state.confirmPassword = payload
    },
    // 用户输入的验证码
    setSvgCode(state, payload) {
      state.svgCode = payload
    },
    // 后端获取的验证码
    setoSvgCode(state, payload) {
      state.oSvgCode = payload
    },
    // 设置本地的sid到vuex中
    setSid(state, payload) {
      state.sid = payload
    },
    /*  退出登录 */
    logout(state) {
      state.token = ''
      state.userInfo = {}
      removeAllItem()
      router.go(0)
    }
  },
  actions: {
    /* 登录接口 */
    getLogin({ dispatch, commit }, payload) {
      const { user_name, password } = payload
      return new Promise((resolve, reject) => {
        login({
          user_name,
          password: md5(password)
        })
          .then((res) => {
            const { token } = res.result
            const message = res.message
            commit('setToken', token)
            dispatch('getProfile')
            router.push(store.getters.loginPath)
            // todo:保存登录时间
            resolve(message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /* 注册接口 */
    getsignin(content, payload) {
      const { user_name, password } = payload
      return new Promise((resolve, reject) => {
        register({
          user_name,
          password: md5(password)
        })
          .then((res) => {
            // 注册完成后添加用户角色账户
            const { id } = res.result
            addUserRole(id)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /* 获取个人信息 */
    async getProfile({ commit }) {
      const { result } = await profile()
      commit('setUserInfo', result)
    }
  }
}
