import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routers from './router.js'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: routers
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
