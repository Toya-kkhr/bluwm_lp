import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(
  VueGtag,
  {
    config: { id: 'G-971ZL6G3E9' }
  },
)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
