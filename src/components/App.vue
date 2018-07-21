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

import { addFriend, attestCredentials, getFriendList, login, myCredential, requestCredentials } from '~/common/api/uport';
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
    login().then(credential => {
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
