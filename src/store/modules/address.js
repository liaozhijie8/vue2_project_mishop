import { getAddressList } from '@/api/address'

export default {
  namespaced: true,
  state: () => ({
    addressList: [],
    updateList: '',
    is_add: false
  }),
  mutations: {
    setAddressList(state, payload) {
      state.addressList = payload
    },
    // 修改收货地址参数
    updateAddress: (state, id) => {
      const res = state.addressList.filter((item) => {
        return item.id === id
      })
      state.updateList = res
    },
    // 判断是否添加地址
    setIs_add: (state, payload) => {
      state.is_add = payload
    }
  },
  actions: {
    /* 获取地址列表 */
    async getAddress_store({ commit }) {
      const { result } = await getAddressList()
      commit('setAddressList', result.list)
    }
  }
}
