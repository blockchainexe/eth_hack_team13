<template>
  <div>
    <h3>Search New Friends</h3>
    <ul id = "ul_searchlist">
      <li class = "li_searchlist" v-for="(list, index) in lists">
        <button class="show-modal" @click="modalIndex = index">
          <span class = "friends_avatar"><img class="avatar-img" alt="Avatar Image" :src="list.avtSrc"/></span>
          <span class = "friends_name">{{list.name}}</span>
          <span class = "friends_name">{{list.distance}}</span>
          <span class = "friends_item" v-for="itemSrc in list.itemSrcs">
            <img class="item-img" alt="Item Image" :src="itemSrc.itemImg"/>
          </span>
        </button>
        <modal-basic v-if="modalIndex == index" @close="modalIndex = -1">
          <h3 slot="header">{{list.name}}</h3>
          <div slot="body">
          </div>
          <div slot="footer"></div>
        </modal-basic>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  li.li_searchlist {
    padding: 3%;
    border-bottom: 1px solid #ccc;
  }

  ul#ul_searchlist {
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
    margin-left: 50px;
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
        lists :[]
      }
    },
    components : {
      ModalBasic
    }
  };
</script>
