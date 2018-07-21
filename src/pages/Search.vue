<template>
  <div>
    <h1>Search New Friends</h1>
    <ul id = "ul_searchlist">
      <li v-for="(list, index) in lists" class = "li_searchlist">
        <button class="show-modal" @click="modalIndex = index">
          <span class = "search_avatar"><img :src="list.avtSrc" class="avatar-img" alt="Avatar Image"></span>
          <span class = "search_name">{{ list.name }}</span>
          <span v-for="itemSrc in list.itemSrcs" class = "search_item">
            <img :src="itemSrc.itemImg" class="item-img" alt="Item Image">
          </span>
          <span class = "search_name">{{ list.distance }}</span>
        </button>
        <modal-basic v-if="modalIndex == index" @close="modalIndex = -1">
          <h3 slot="header">{{ list.sex + ','+ list.country }}</h3>
          <div slot="body"/>
          <div slot="footer"/>
        </modal-basic>
      </li>
    </ul>
  </div>
</template>

<style scoped>

  button.show-modal {
  width: 100%;
  background-color: #D3DEF1;
  }

  li.li_searchlist {
    padding: 3%;
    /* width:50%; */
    border-bottom: 1px solid #ccc;
  }

  ul#ul_searchlist {
  list-style:none;
  }

  img.avatar-img {
    padding : 0px;
    height: 80px;
    width: 80px;
    object-fit: contain;
    background: white;
  }

  img.item-img {
    padding-top:10px;
    float:left;
    padding-left:5px;
    height: 50px;
    width: 50px;
    object-fit: contain;
  }

  span.search_avatar {
    float:left;
    padding-right: 5px;
    border-right: 1px solid #ccc;
  }

  span.search_name {
    float:left;
    padding-top:10px;
    padding-right:15px;
    margin-left:10px;
    font-size:3em;
  }

  span.search_distance {
    padding-top:10px;
    float:left;
    width:10%;
    font-size:3em;
    color:red;
  }

  span.search_item {
    margin-left: 100px;
    width:3%;
  }
</style>

<script>
import ModalBasic from '~/components/ModalBasic';
export default {
  components: {
    ModalBasic
  },
  data () {
    return {
      showModal: false,
      modalIndex: -1,
      lists:
          [
            {
              'avtSrc': 'http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png',
              'name': 'Tom',
              'sex': 'Man',
              'country': 'Poland',
              'distance': 'Nearby',
              'itemSrcs':
                [
                  { itemImg: 'https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg', name: 'food' },
                  { itemImg: 'https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png', name: 'sport' },
                  { itemImg: 'https://4.bp.blogspot.com/-bT8YdNC856Q/WZP3lL87D2I/AAAAAAABF_k/daOTZl5hLu4UqGFGvYaDczC1PbSxTxWiwCLcBGAs/s800/manga_genkou.png', name: 'anime' }
                ]
            },
            {
              'avtSrc': 'http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png',
              'name': 'Ulrike',
              'sex': 'Woman',
              'country': 'Germany',
              'distance': 'Far',
              'itemSrcs':
                [
                  { itemImg: 'https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg', name: 'food' },
                  { itemImg: 'https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png', name: 'sport' },
                  { itemImg: 'https://4.bp.blogspot.com/-bT8YdNC856Q/WZP3lL87D2I/AAAAAAABF_k/daOTZl5hLu4UqGFGvYaDczC1PbSxTxWiwCLcBGAs/s800/manga_genkou.png', name: 'anime' }
                ]
            }
          ]
    };
  }
};
</script>
