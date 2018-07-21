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
import { writeNewMessage, dbReadOnce, dbRead, dbWrite, initDB } from '~/common/api/firebase';
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
  mounted () {
    initGeoLocation();
    initDB();
    dbRead('test/id');
    dbReadOnce('test/id');
    dbWrite('test', { id: 1 });
    writeNewMessage(1, 'user1', 'hello');
    dbRead('test/id/1');
    dbWrite('test', { id: 2 });
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
