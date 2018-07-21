<template>
  <div>
    <modal-basic v-if="showModal" @close="showModal = false">
      <h3 slot="header">friend name</h3>
      <div slot="body">detail</div>
      <div slot="footer"/>
    </modal-basic>
  </div>
</template>

<script>
import { login } from '~/common/api/uport';
import ModalBasic from '~/components/ModalBasic';
export default {
  components: {
    ModalBasic
  },
  data () {
    return {
      showModal: false,
      imgSrc: '',
      userName: 'User Name',
      itemList: JSON.stringify([{ categoryName: 'Food', itemImg: 'https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg', friendName: 'friend1' }, { categoryName: 'Sports', itemImg: 'https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png', friendName: 'friend2' }]),
      myItemList: JSON.stringify([{ categoryName: 'Anime', itemImg: 'https://4.bp.blogspot.com/-bT8YdNC856Q/WZP3lL87D2I/AAAAAAABF_k/daOTZl5hLu4UqGFGvYaDczC1PbSxTxWiwCLcBGAs/s800/manga_genkou.png', friendName: 'friend1' }])
    };
  },
  mounted () {
    login().then(credentials => {
      if (credentials === null) {
        this.$router.push({ path: '/register' });
      } else {
        this.$router.push({ path: '/avatar', query: { character: credentials.profile.character, userName: credentials.name, itemList: this.itemList, myItemList: this.myItemList } });
      }
    });
  },
  methods: {
    goToAvatar: function () {
      this.$router.push({ path: '/avatar', query: { character: credentials.profile.character, userName: credentials.name, itemList: this.itemList, myItemList: this.myItemList } });
    }
  }
};
</script>
