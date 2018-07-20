import '~/assets/styles/base.scss';
import App from '~/components/App.vue';
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  render: h => h(App)
});
