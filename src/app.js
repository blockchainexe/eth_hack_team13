import 'normalize.css';
import '~/assets/styles/base.scss';
import { initDB, writeNewGps, dbReadOnce } from '~/common/api/firebase';
import { routes } from '~/routes/router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { initGeoLocation } from '~/common/api/gps';
import { myCredential } from '~/common/api/uport';

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

export const updateUserGps = () => {
  if(myCredential!==null){
    initGeoLocation().then(crd => {
      writeNewGps(myCredential.address, myCredential.name, crd.longitude, crd.latitude, myCredential.profile.gender, myCredential.country, myCredential.profile.character);
      dbReadOnce('test/id').then(snapshot => {
        console.log(snapshot);
      });
    })
  } else {
    console.log("need login");
  }
}
setInterval(updateUserGps, 60000);
