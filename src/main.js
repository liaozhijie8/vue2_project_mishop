import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// 全局css
import '@/assets/scss/index.scss'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// cookie
import VueCookie from 'vue-cookie'
// 导入权限控制模块
import './permission'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
// dayjs时间格式化
import dayjs from 'dayjs'
Vue.prototype.dayjs = dayjs
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)
Vue.config.productionTip = false
Vue.use(ElementUI, VueAxios, axios)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
