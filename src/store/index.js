import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import router from './modules/router'
import getters from './getters'
import address from './modules/address'
import sort from './modules/sort'
import goods from './modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 2
  },
  getters,
  modules: {
    user,
    router,
    address,
    sort,
    goods
  }
})
