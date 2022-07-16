import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("toLow", (val) => {return val.toLowerCase() })

import PanelG from './components/01-Panel copy.vue'
Vue.component("PanelG", PanelG)
new Vue({
  render: h => h(App),
}).$mount('#app')

import 'bootstrap/dist/css/bootstrap.css'