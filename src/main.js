import Vue from 'vue'
import App from './App.vue'
import LlButton from './components/button.vue'
Vue.config.productionTip = false
Vue.component(LlButton.name, LlButton)
new Vue({
  render: h => h(App)
}).$mount('#app')
