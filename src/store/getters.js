const getters = {
  confirmPassword: (state) => state.user.confirmPassword,
  valiSvgCode: (state) => state.user.svgCode,
  valioSvgCode: (state) => state.user.oSvgCode,
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  getSid: (state) => state.user.sid,
  // 路由信息
  getRouterFrom: (state) => state.router.from,
  loginPath: (state) => {
    if (state.router.from === '/pay') {
      return '/checkout'
    } else {
      return '/'
    }
  },
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
