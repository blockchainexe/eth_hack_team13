<template>
  <div>
    <spinner v-if="loading"/>
  </div>
</template>

<script>
import { login } from '~/common/api/uport';
import Spinner from '~/components/Spinner';
export default {
  components: {
    Spinner
  },
  data () {
    return {
      imgSrc: 'http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png',
      userName: 'User Name',
      itemList: JSON.stringify([{ categoryName: 'Food', itemImg: 'https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg', friendName: 'friend1' }, { categoryName: 'Sports', itemImg: 'https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png', friendName: 'friend2' }]),
      myItemList: JSON.stringify([{ categoryName: 'Anime', itemImg: 'https://4.bp.blogspot.com/-bT8YdNC856Q/WZP3lL87D2I/AAAAAAABF_k/daOTZl5hLu4UqGFGvYaDczC1PbSxTxWiwCLcBGAs/s800/manga_genkou.png', friendName: 'friend1' }]),
      loading: false
    };
  },
  mounted () {
    const monitorModal = setInterval(() => {
      const modal = document.getElementById('uport-qr');
      const qr = modal.getElementsByTagName('img');
      if (qr.length) {
        this.loading = true;
        clearInterval(monitorModal);
      }
    }, 100);
    login().then(credentials => {
      this.loading = false;
      if (credentials === null) {
        this.$router.push({ path: '/register' });
      } else {
        this.$router.push({ path: '/avatar', query: { imgSrc: this.imgSrc, userName: credentials.name, itemList: this.itemList, myItemList: this.myItemList } });
      }
    });
  }
};
</script>
