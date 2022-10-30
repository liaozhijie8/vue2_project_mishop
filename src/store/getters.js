const getters = {
  confirmPassword: (state) => state.user.confirmPassword,
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
