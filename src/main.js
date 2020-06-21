import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

Vue.config.productionTip = false;

Vue.use(ElementUI);

window.$store = store;

store.commit('increment');

console.log(store.state.count);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
