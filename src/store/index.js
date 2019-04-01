import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import state from './state'
// import mutations from './mutations'
// import createLogger from 'vuex/dist/logger'

// 模块化
import collection from './modules/collection'
import footerStatus from './modules/footerStatus'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// 要设置的全局访问的state对象 this.$store.state.showFooter
const state = {
  showFooter: true,
  changableNum: 0
}

// 实时监听state值的变化 this.$store.getters.isShowFotter
const getters = {
  isShowFotter(state) {
    return state.showFooter
  },
  getChangedNub(state) {
    return state.changableNum
  }
}

// 定义修改状态的方法  this.$store.commit('show')
const mutations = {
  show(state) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showFooter = true
  },
  hide(state) {
    state.showFooter = false
  },
  setNum(state, num) {
    state.changableNum += num
  }
}

// actions可以包含任何异步操作 this.$store.dispatch('hideFooter')
const actions = {
  showFooter(context) { // 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('show')
  },
  hideFooter(context) {
    context.commit('hide')
  },
  getNum(context, num) {
    context.commit('setNum', num)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  // plugins: debug ? [createLogger()] : []

  // 模块化
  modules: {
    collection,
    footerStatus
  }
})
