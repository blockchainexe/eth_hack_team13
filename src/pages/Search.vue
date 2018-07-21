<template>
  <div id = "search">
    <h3>Search New Friends</h3>
    <ul id = "ul_searchlist">
      <li v-for="(list, index) in lists" class = "li_searchlist">
        <button class="show-modal" @click="modalIndex = index">
          <span class = "search_avatar"><img :src="list.avtSrc" class="avatar-img" alt="Avatar Image"></span>
          <span class = "search_name">{{ list.name }}</span>
          <span class = "search_name">{{ list.distance }}</span>
          <span v-for="itemSrc in list.itemSrcs" class = "search_item">
            <img :src="itemSrc.itemImg" class="item-img" alt="Item Image">
          </span>
        </button>
        <modal-basic v-if="modalIndex == index" @close="modalIndex = -1">
<<<<<<< HEAD
          <h3 slot="header">{{list.sex +','+ list.age +','+ list.country}}</h3>
          <div slot="body">{{list.profile}}</div>
          <div slot="footer"></div>
=======
          <h3 slot="header">{{ list.sex + ','+ list.country }}</h3>
          <div slot="body"/>
          <div slot="footer"/>
>>>>>>> 96d94db9ba09fca3a573fd90f81f75a241f2cc5e
        </modal-basic>
      </li>
    </ul>
  </div>
</template>

<style scoped>

div#search{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

  button.show-modal {
  background-color: #D3DEF1;
  }

  li.li_searchlist {
    padding: 3%;
    border-bottom: 1px solid #ccc;
  }

  ul#ul_searchlist {
    list-style:none;
  }

  img.avatar-img {
    padding : 0px;
    height: 60px;
    width: 60px;
    object-fit: contain;
    background: white;
  }

  img.item-img {
    padding-top:10px;
    float:left;
    padding-left:5px;
    height: 40px;
    width: 40px;
    object-fit: contain;
  }

  span.search_avatar {
    float:left;
    padding-right: 5px;
    border-right: 1px solid #ccc;
  }

  span.search_name {
    display:block;
    float:left;
    padding-top:10px;
    padding-right:15px;
    margin-left:10px;
    font-size:1em;
  }

  span.search_distance {
    display:block;
    float:left;
    padding-top:10px;
    float:left;
    width:10%;
    font-size:1em;
    color:red;
  }

  span.search_item {
    margin-left: 100px;
    width:3%;
  }
</style>

<script>
  import ModalBasic from '~/components/ModalBasic'
  import {initGeoLocation} from '~/common/api/gps'
  import {dbRead} from '~/common/api/firebase'

  export default {
    data() {
      return {
        showModal: false,
        modalIndex: -1,
        lists : []
/*
          [
            {
              'avtSrc' : "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png",
              'itemSrcs' :
                [
                  { itemImg: 'https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg', name: 'food' },
                  { itemImg: 'https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png', name: 'sport' },
                  { itemImg: 'https://4.bp.blogspot.com/-bT8YdNC856Q/WZP3lL87D2I/AAAAAAABF_k/daOTZl5hLu4UqGFGvYaDczC1PbSxTxWiwCLcBGAs/s800/manga_genkou.png', name: 'anime' }
                ]
            }
          ]
*/
      }
    },
    components : {
      ModalBasic
    },
      mounted : function() {
        const mylongitude = initGeoLocation.longitude;
        const mylatitude = initGeoLocation.latitude;
        const radius = 6371;
    /*距離を計算
        var gpsRef = firebase.database().ref('/gps');
        gpsRef.on('value', function(snapshot) {
          updateStarCount(postElement, snapshot.val());
        });
        for (let snapshot of shot) {
          const key =Object.key(shot);
          let shot.key.distance = Math.PI/180 * radius
            * Math.sqrt(((shot.key.longitude-mylongitude))**2+((shot.key.latitude-mylatitude))**2);
          shot.key.distance = round(shot.key.distance);
        }
        this.lists = [...this.lists, ...snapshot];
        _.sortBy(lists, 'distance');
  */
      }
  };
</script>
