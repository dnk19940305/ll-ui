import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.scss'
import './assets/style/reset/index.scss'
import LlButton from './components/button.vue'
import LlDialog from './components/dialog.vue'
import LlInput from './components/input.vue'
import LlSwitch from './components/switch.vue'

Vue.config.productionTip = false
Vue.component(LlButton.name, LlButton)
Vue.component(LlDialog.name, LlDialog)
Vue.component(LlInput.name, LlInput)
Vue.component(LlSwitch.name, LlSwitch)
new Vue({
  render: h => h(App)
}).$mount('#app')
