import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import './styles/global.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
