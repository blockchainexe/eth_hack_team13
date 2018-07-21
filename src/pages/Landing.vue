<template>
  <div>
    hello landing
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal-basic v-if="showModal" @close="showModal = false">
      <h3 slot="header">friend name</h3>
      <div slot="body">detail</div>
      <div slot="footer"></div>
    </modal-basic>
  </div>
</template>

<script>
import ModalBasic from '~/components/ModalBasic'
export default {
  data () {
    return {
      showModal: false
    };
  },
  components: {
    ModalBasic
  }
};
</script>
