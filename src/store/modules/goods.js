import { getAllGoods_api } from '@/api/goods'

export default {
  namespaced: true,
  state: () => ({
    goodsList: []
  }),
  mutations: {
    // 处理数据
    setGoodsList(state, payload) {
      state.goodsList = payload
    }
  },
  actions: {
    // 获取商品列表
    getGoodsList({ commit }) {
      getAllGoods_api().then((res) => {
        commit('setGoodsList', res.result.list)
      })
    }
  }
}
