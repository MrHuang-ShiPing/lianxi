import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'
import 'swiper/css/swiper.css'
import './mock/mockServer'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
/* eslint-disable no-unused-vars*/ 
