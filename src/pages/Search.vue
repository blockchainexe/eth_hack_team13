<template>
  <div id = 'search'>
    <h3>Search New Friends</h3>
    <ul id = "ul_searchlist">
      <li class = "li_searchlist" v-for="(list, index) in lists">
        <button class="show-modal" @click="modalIndex = index">
          <span class = "search_avatar"><img class="avatar-img" alt="Avatar Image" :src="list.avtSrc"/></span>
          <span class = "search_name">{{list.name}}</span>
          <span class = "search_name">{{list.distance}}</span>
          <span class = "search_item" v-for="itemSrc in list.itemSrcs">
            <img class="item-img" alt="Item Image" :src="itemSrc.itemImg"/>
          </span>
        </button>
        <modal-basic v-if="modalIndex == index" @close="modalIndex = -1">
          <h3 slot="header">{{list.sex + ','+ list.country}}</h3>
          <div slot="body">
          </div>
          <div slot="footer"></div>
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
  import {initGeoLocation} from '~/common/api/firebase'

  export default {
    data() {
      return {
        showModal: false,
        modalIndex: -1,
        lists :
          [
            {
              'avtSrc' : "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png",
              'name' : 'Tom',
              'sex':'Man',
              'country':'Poland',
              'distance' : 'Nearby',
              'itemSrcs' :
                [
                  {itemImg: "https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg", name: "food"},
                  {itemImg: "https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png", name: "sport"},
                  {itemImg: "https://4.bp.blogspot.com/-bT8YdNC856Q/WZP3lL87D2I/AAAAAAABF_k/daOTZl5hLu4UqGFGvYaDczC1PbSxTxWiwCLcBGAs/s800/manga_genkou.png", name:"anime"}
                ]
            },
            {
              'avtSrc' : "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png",
              'name' : 'Ulrike',
              'sex':'Woman',
              'country':'Germany',
              'distance' : 'Far',
              'itemSrcs' :
                [
                  {itemImg: "https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg", name: "food"},
                  {itemImg: "https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png", name: "sport"},
                  {itemImg: "https://4.bp.blogspot.com/-bT8YdNC856Q/WZP3lL87D2I/AAAAAAABF_k/daOTZl5hLu4UqGFGvYaDczC1PbSxTxWiwCLcBGAs/s800/manga_genkou.png", name:"anime"}
                ]
            }
          ]
      }
    },
    components : {
      ModalBasic
    },
      mounted : function() {
        const mylongitude = initGeoLocation.longitude;
        const mylatitude = initGeoLocation.latitude;
        const radius = 6371;
    /*
        var gpsRef = firebase.database().ref('posts/' + postId + '/gps');
        gpsRef.on('value', function(snapshot) {
          updateStarCount(postElement, snapshot.val());
        });
        for (let snapshot of shot) { /*ハッシュがいる*/
          shot.distance = Math.PI/180 * radius
            * Math.sqrt(((shot.longitude-mylongitude))**2+((shot.latitude-mylatitude))**2)
        }
  */
      }
  };
</script>
