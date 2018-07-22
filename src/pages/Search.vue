<template>
  <div>
    <navbar-top/>
    <div class="container">
      <div id="container-main">
        <div class = "flex-container" v-for="list in lists" @click="showModal(list)">
          <div class = "flex-first-low">
            <div class = "top-left-fig">
              <img id="avatar-img" :src="list.avtSrc" alt="Avatar Image">
            </div>
            <div class = "top-right-attr">
              <div class = "attr-columns">{{ list.username }}</div>
              <div class = "attr-columns">{{ list.country }}</div>
              <div class = "attr-columns">{{ list.distance + " km" }}</div>
              <!--<div @click="startChat(list)">Chat!</div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-basic v-if="isShowModal==true" @close="isShowModal=false">
      <h3 slot="header">Go to chat</h3>
      <div slot="body" @click="startChat">
        <span > Chat!! </span>
      </div>
      <div slot="footer">
      </div>
    </modal-basic>
    <navbar-bottom/>
  </div>
</template>

<script>
import NavbarBottom from '~/components/NavbarBottom';
import NavbarTop from '~/components/NavbarTop';
import { dbReadOnce } from '~/common/api/firebase';
import { initGeoLocation } from '~/common/api/gps';
import { myCredential } from '~/common/api/uport';
import _ from 'lodash';
import ModalBasic from '~/components/ModalBasic'

export default {
  components: {
    NavbarTop,
    NavbarBottom,
    ModalBasic
  },
  data () {
    return {
      lists: [],
      isShowModal: false,
      room: ""
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
          dbReadOnce('img/' + shot.gps[2].character + '/imgUrl')
          .then(src => {
            shot['avtSrc'] = src;
            console.log(shot['avtSrc']);
            this.lists = [...this.lists, ...snapArray];
            _.sortBy(this.lists, 'distance');
          });

          snapArray.push(shot);
        });
        console.log(snapArray);

        console.log(snapshot);
      });
    });
  },
  methods: {
    startChat: function () {
      let item = this.room;
      const addr1 = item.address;
      const addr2 = myCredential.address;
      let p = '';
      if (addr1 < addr2) {
        p = addr1 + addr2;
      } else {
        p = addr2 + addr1;
      }
      this.$router.push({ path: '/chat', query: { room: p } });
    },
    showModal: function (list) {
      this.room = list;
      this.isShowModal = true;
    }
  }
};
</script>

<style>
#container-main {
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  flex-grow: 1;
}

.flex-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  flex-grow: 2;
}

.flex-first-low {
  display: flex;
  flex-direction: row;
  flex-grow: 3;
}

.top-left-fig {
  width: 40%;
  flex-grow: 4;
}

img#avatar-img {
width: 70%;
height: 70%;
object-fit: contain;
}

.top-right-attr {
  width: 60%;
  flex-grow: 4;
  font-size: 1em;
  display:flex;
  flex-direction: column;
}
.attr-columns{
  flex-grow : 5
}

</style>
