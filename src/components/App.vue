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
import { writeNewGps , writeNewMessage, dbReadOnce, dbRead, dbWrite, initDB } from '~/common/api/firebase';
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
  mounted : function (){
    writeNewGps(1, 'user1', 39,41);
    dbRead('test/id');
    login().then(credential => {
      writeNewGps(2, 'Bob', 140, 41, credential.address);
      dbRead('test/id');
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
