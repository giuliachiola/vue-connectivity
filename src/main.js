// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bus from './bus' // Event bus instance
import VueConnectionListener from 'vue-connection-listener'
Vue.prototype.$bus = bus // Optional (but convenient)
const connectionListener = new VueConnectionListener(bus) // Create instance (injecting our bus)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App),
  created () {
    connectionListener.register()
  },
  destroyed () {
    connectionListener.unregister()
  }
})
