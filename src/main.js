import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

import 'common/stylus/index.styl'

// 处理300ms延时
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  render: h => h(App)
})
