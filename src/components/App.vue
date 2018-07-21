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
import { dbWrite, initDB } from '~/common/api/firebase';
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
    dbWrite('test', { id: 1 });
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
