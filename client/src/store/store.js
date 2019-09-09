/**
 * Created by zhangyan on 17/11/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

// import * as state from './state'
// import * as getters from './getters'
// import * as actions from './actions'
// import * as mutations from './mutations'

/**
 * 引入业务页面模块
 */
import Login from './modules/login/index'
import Main from './modules/main/index'

/**
 * 使用vuex
 */
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    Login,
    Main
  },
  state: {
    name: ''
  },
  mutations: {
    setName ({ dispatch, commit, state, rootState }, name) {
      state.name = name
    }
  },
  strict: debug
})
