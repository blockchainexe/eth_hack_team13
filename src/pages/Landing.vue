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
      itemList: [{itemImg: "https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg", name: "食べ物"}, {itemImg: "https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png", name: "スポーツ"}, {itemImg: "https://4.bp.blogspot.com/-bT8YdNC856Q/WZP3lL87D2I/AAAAAAABF_k/daOTZl5hLu4UqGFGvYaDczC1PbSxTxWiwCLcBGAs/s800/manga_genkou.png", name:"漫画・アニメ"}]
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
    login().then(credentials=>{
      this.$router.push({ path: '/avatar', query: { imgSrc: this.imgSrc, userName: credentials.name, itemList: this.itemList }})
    });
  }
};
</script>
