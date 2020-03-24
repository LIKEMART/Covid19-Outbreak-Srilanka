import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VideoBg from 'vue-videobg';
import axios from 'axios'
import VueAxios from 'vue-axios'
import twitter from 'vue-twitter'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(twitter)


Vue.component('video-bg', VideoBg)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
