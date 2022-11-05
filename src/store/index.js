import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import router from './modules/router'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 2
  },
  getters,
  modules: {
    user,
    router
  }
})
