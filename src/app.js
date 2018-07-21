import 'normalize.css';
import '~/assets/styles/base.scss';
import { routes } from '~/routes/router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {initDB} from '~/common/api/firebase';
initDB();
Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  router
});
