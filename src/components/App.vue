<template>
  <div class="container">
    <div>
      <h1>Hello World!</h1>
      <h3>{{ credential.name }}</h3>
      <h3>{{ credential.country }}</h3>
    </div>
  </div>
</template>

<script>

import { addFriend, login } from '~/common/api/uport';
<<<<<<< HEAD
import { writeNewGps , writeNewMessage, dbReadOnce, dbRead, dbWrite, initDB } from '~/common/api/firebase';
=======
import { dbRead, dbReadOnce, dbWrite, initDB, saveImg, writeNewMessage } from '~/common/api/firebase';
>>>>>>> 18db6df79da0b1af97bdd2d6fbc9bf7bd39c1f10
import { initGeoLocation } from '~/common/api/gps';
export default {
  data () {
    return {
      credential: {
        name: '',
        country: ''
      }
    };
  },
<<<<<<< HEAD
  mounted : function (){
    writeNewGps(1, 'user1', 39,41);
    dbRead('test/id');
=======
  mounted () {
    initGeoLocation();
    dbRead('test/id');
    dbReadOnce('test/id');
    dbWrite('test', { id: 1 });
    writeNewMessage(1, 'user1', 'hello');
    dbRead('test/id/1');
    dbWrite('test', { id: 2 });
    // saveImg({'img/1/imgUrl': "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png" });
    dbReadOnce('img/1/imgUrl');
    // saveImg({'img/2/imgUrl': "http://www.kumamotoiccard.jp/wp-content/themes/kumamonic/images/kumamon.png" });
    dbReadOnce('img/2/imgUrl');
>>>>>>> 18db6df79da0b1af97bdd2d6fbc9bf7bd39c1f10
    login().then(credential => {
      if (credential === null) {}
      console.log(credential);
      addFriend().then(() => { });
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
