import { getSortList_api } from '@/api/sort'

export default {
  namespaced: true,
  state: () => ({
    allSortList: []
  }),
  mutations: {
    // 把分类数据存入state
    setAllSortList(state, list) {
      state.allSortList = list
    }
  },
  actions: {
    // 获取所有分类
    getSortList({ commit }) {
      getSortList_api().then((res) => {
        commit('setAllSortList', res.result)
      })
    }
  }
}
