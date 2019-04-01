// 初始化状态变量
const state = {
  collects: []
}

// 监听状态变化
const getters = {
  renderCollects(state) {
    return state.collects
  }
}

// 定义修改状态的方法
const mutations = {
  pushCollects(state, items) {
    state.collects.push(items)
  }
}

// 触发mutations中的方法
const actions = {
  invokePushItems(context, item) {
    context.commit('pushCollects', item)
  }
}

export default {
  namespaced: true, // //用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
