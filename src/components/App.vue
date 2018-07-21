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
    // requestCredentials().then(res => {
    //   console.log('c1', res);
    //   setTimeout(() => {
    //     requestCredentials().then(res => {
    //       console.log('c2', res);
    //     });
    //   }, 1000);
    // });
    login().then(credential => {
      console.log(credential);
      addFriend().then(() => { });
    });

    // requestCredentials({ requested: ['name', 'country'], verified: ['friend'] }).then(credential => {
    //   this.credential.name = credential.name;
    //   this.credential.country = credential.country;
    //   console.log(credential);
    //   console.log(getFriendList(credential));
    //   attestCredentials(credential, '0x02').then(res => {});
    // });
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
