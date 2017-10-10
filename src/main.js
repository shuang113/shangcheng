import 'amfe-flexible'
import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
fastclick.attach(document.body)

// Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
	loading:require('./common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
