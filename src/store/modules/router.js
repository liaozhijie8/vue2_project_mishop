export default {
  namespaced: true,
  state: () => ({
    from: ''
  }),
  getters: {},
  mutations: {
    setFrom(state, payload) {
      state.from = payload
    }
  },
  actions: {}
}
