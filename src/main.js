import Vue from 'vue'
import VueiClient from '@supermap/vue-iclient-mapboxgl';
import App from './App.vue'

Vue.use(VueiClient, {themes: 'light'});
VueiClient.setTheme({theme: 'light'});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app');
