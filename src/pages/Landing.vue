<template>
  <div>
    hello landing
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal-basic v-if="showModal" @close="showModal = false">
      <h3 slot="header">friend name</h3>
      <div slot="body">detail</div>
      <div slot="footer"></div>
    </modal-basic>
    <button @click="goToAvatar">go to avatar</button>
  </div>
</template>

<script>
import ModalBasic from '~/components/ModalBasic'
import {login} from '~/common/api/uport'
export default {
  data () {
    return {
      showModal: false,
      imgSrc: "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png",
      userName: "User Name",
      itemList: [{itemImg: "item1", name: "name1"}, {itemImg: "item2", name: "name2"}]
    };
  },
  components: {
    ModalBasic
  },
  methods: {
    goToAvatar: function(){
      this.$router.push({ path: '/avatar', query: { imgSrc: this.imgSrc, userName: this.userName, itemList: this.itemList }})
    }
  },
  mounted(){
    login()
    .then(credential=>{

    })
  }
};
</script>
