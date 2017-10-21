import Vue from 'vue'
import App from './App.vue'
import SushiUI from "./lib/index"

Vue.use(SushiUI)

new Vue({
  el: '#app',
  render: h => h(App)
})