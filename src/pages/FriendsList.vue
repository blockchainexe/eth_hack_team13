<template>
  <div>
    <h3>List of Friends</h3>
    <ul id = "ul_friendslist">
        <li class = "li_friendslist" v-for="(list, index) in lists">
          <span class = "friends_avatar">{{list.avatar}}</span>
          <span class = "friends_name"><button class="show-modal" @click="modalIndex = index">{{list.name}}</button></span>
          <span class = "friends_item">{{list.item}}</span>
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

  span.friends_avatar {
    float:left;
    width:10%;
  }

  span.friends_name {
    margin-left: 100px;
    width:10%;
  }

  span.friends_item {
    margin-left: 200px;
    width:10%;
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
          {'name' : 'tom','avatar':'avatar1','item':'item1','meet':'Tokyo','date':'7/20'},
          {'name' :'bob','avatar':'avatar2','item':'item2','meet':'Aomori','date':'7/19'}
        ]
      }
    },
    components : {
      ModalBasic
    }
  };
</script>
