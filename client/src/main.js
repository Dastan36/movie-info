import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store/store'
import $http from './utils/http'
import cookie from 'vue-cookie'
Vue.config.productionTip = false

// 将axios挂载到prototype上，在pages组件中可以直接使用this.$http访问
Vue.prototype.$http = $http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(cookie)
