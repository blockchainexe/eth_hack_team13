<template>
  <div id = "search">
    <h3>Search New Friends</h3>
    <ul id = "ul_searchlist">
      <li v-for="(list, index) in lists" class = "li_searchlist">
        <button class="show-modal" @click="modalIndex = index">
          <!--          <span class = "search_avatar"><img :src="list.avtSrc" class="avatar-img" alt="Avatar Image"></span> -->
          <span class = "search_name">{{ list.username }}</span>
          <span class = "search_name">{{ list.distance + ' km' }}</span>
          <!--          <span v-for="itemSrc in list.itemSrcs" class = "search_item">
            <img :src="itemSrc.itemImg" class="item-img" alt="Item Image">
          </span>  -->
        </button>
        <modal-basic v-if="modalIndex == index" @close="modalIndex = -1">
          <h3 slot="header">{{ list.sex + ', '+ list.country }}</h3>
          <div slot="body">
            <div @click="startChat(list)">Chat!</div>
          </div>
          <div slot="footer"/>
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
import { dbReadOnce } from '~/common/api/firebase';
import { initGeoLocation } from '~/common/api/gps';
import { myCredential } from '~/common/api/uport';
import ModalBasic from '~/components/ModalBasic';
import _ from 'lodash';
export default {
  components: {
    ModalBasic
  },
  data () {
    return {
      showModal: false,
      modalIndex: -1,
      lists: []
    };
  },
  mounted () {
    initGeoLocation().then(geoLocation => {
      console.log(geoLocation);
      const mylongitude = geoLocation.longitude;
      const mylatitude = geoLocation.latitude;
      console.log(mylatitude);
      const radius = 6371;
      dbReadOnce('test/id').then(snapshot => {
        const snapArray = [];
        Object.keys(snapshot).forEach((key) => {
          const shot = snapshot[key];
          console.log(shot);
          const diffLong = shot.gps[2]['longitude'] - mylongitude;
          const diffLat = shot.gps[2]['latitude'] - mylatitude;
          console.log(diffLong, diffLat);
          shot['distance'] = Math.PI / 180 * radius * Math.sqrt(diffLong ** 2 + diffLat ** 2);
          shot['distance'] = Math.round(shot['distance']);
          shot['latitude'] = shot.gps[2].latitude;
          shot['longitude'] = shot.gps[2].longitude;
          shot['username'] = shot.gps[2].username;
          shot['sex'] = shot.gps[2].sex === 0 ? 'Man' : 'Female';
          shot['country'] = shot.gps[2].country;
          shot['address'] = shot.gps[2].address;

          snapArray.push(shot);
        });
        console.log(snapArray);
        this.lists = [...this.lists, ...snapArray];

        _.sortBy(this.lists, 'distance');
        console.log(snapshot);
      });
    });
  },
  methods: {
    startChat (item) {
      const addr1 = item.address;
      const addr2 = myCredential.address;
      let p = '';
      if (addr1 < addr2) {
        p = addr1 + addr2;
      } else {
        p = addr2 + addr1;
      }
      this.$router.push({ path: '/chat', query: { room: p } });
    }
  }
};
</script>
