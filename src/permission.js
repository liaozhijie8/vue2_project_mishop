import router from './router'
import store from './store'

/**
 * 路由前置守卫
 */
const whiteList = ['/pay', '/user/portal']
router.beforeEach(async (to, from, next) => {
  // 不存在 token ，不允许访问的页面
  if (!store.getters.token) {
    if (whiteList.indexOf(to.path) > -1) {
      next('/')
    }
  }
  if (store.getters.token) {
    if (!store.getters.hasUserInfo) {
      store.dispatch('user/getProfile')
    }
  }
  /* 每次跳转处于顶部 */
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
