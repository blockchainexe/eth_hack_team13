import Vue from 'vue';
import App from '~/components/App.vue';
import '~/assets/styles/base.scss';
const app = new Vue({
  el: '#app',
  render: h => h(App)
});
