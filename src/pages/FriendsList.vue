<template>
  <div>
    <h3>List of Friends</h3>
    <ul id = "ul_friendslist">
      <li class = "li_friendslist" v-for="(list, index) in lists">
        <button class="show-modal" @click="modalIndex = index">
          <span class = "friends_avatar"><img class="avatar-img" alt="Avatar Image" :src="list.avtSrc"/></span>
          <span class = "friends_name">{{list.name}}</span>
          <span class = "friends_item" v-for="itemSrc in list.itemSrcs">
            <img class="item-img" alt="Item Image" :src="itemSrc"/>
          </span>
        </button>
        <modal-basic v-if="modalIndex == index" @close="modalIndex = -1">
          <h3 slot="header">{{list.name}}</h3>
          <div slot="body">
            <p>You met him/her in {{list.meet}} at {{list.date}}.</p>
          </div>
          <div slot="footer"></div>
        </modal-basic>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  li.li_friendslist {
    padding: 3%;
    border-bottom: 1px solid #ccc;
  }

  ul#ul_friendslist {
  list-style:none;
  }

  img.avatar-img {
    height: 80px;
    width: 80px;
    object-fit: contain
  }

  img.item-img {
    height: 50px;
    width: 50px;
    object-fit: contain
  }

  span.friends_avatar {
    float:left;
    width: 10%;
  }

  span.friends_name {
    margin-left: 100px;
    width:10%;
    font-size:3em;
  }

  span.friends_item {
    margin-left: 100px;
    width:3%;
  }
</style>

<script>
  import ModalBasic from '~/components/ModalBasic'
  export default {
    data() {
      return {
        showModal: false,
        modalIndex: -1,
        lists :
        [
          {
          'name' : 'tom','item':'item1','meet':'Tokyo','date':'7/20',
          'avtSrc': "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png",
          'itemSrcs':
            [
              "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png",
              "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png"
            ]
          },
          {
          'name' :'bob','item':'item2','meet':'Aomori','date':'7/19',
          'avtSrc': "http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png",
          'itemSrcs': ["http://hanasaka-kidan.com/wp-content/uploads/2016/11/35f2dca61c1d9c731d0c2ed665c2e3e3.png"]
          }
        ]
      }
    },
    components : {
      ModalBasic
    }
  };
</script>
