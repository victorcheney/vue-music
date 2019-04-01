const state = {
  showFooter: true
}

const getters = {
  isShow(state) {
    return state.showFooter
  }
}

const mutations = {
  show(state) {
    state.showFooter = true
  }
}

const actions = {
  showFooter(context) {
    context.commit('show')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
