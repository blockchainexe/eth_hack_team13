import '~/assets/styles/base.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from '~/routes/router';
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  router
});
