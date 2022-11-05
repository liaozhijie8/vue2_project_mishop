const getters = {
  confirmPassword: (state) => state.user.confirmPassword,
  valiSvgCode: (state) => state.user.svgCode,
  valioSvgCode: (state) => state.user.oSvgCode,
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  getSid: (state) => state.user.sid,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
