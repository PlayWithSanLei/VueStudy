import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";

Vue.config.productionTip = false
//配置请求的根路径
axios.defaults.baseURL = 'http://192.168.1.122:8080/'
Vue.prototype.$http = axios
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
