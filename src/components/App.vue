<template>
  <div class="container">
    <div>
      <h1>Hello World!</h1>
    </div>
  </div>
</template>

<script>
import { uport } from '~/common/api/uport';
export default {
  data () {
    return {};
  },
  mounted () {
    this.requestCredentials();
  },
  methods: {
    requestCredentials () {
      uport.requestCredentials().then((credentials) => {
        console.log(credentials);
      });
    }

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
