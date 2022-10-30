import router from './router'
import store from './store'

/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  if (!store.getters.token) {
    if (to.path === '/pay') {
      next('/login')
    }
  }
  if (store.getters.token) {
    if (!store.getters.hasUserInfo) {
      store.dispatch('user/getProfile')
    }
  }
  next()
})
