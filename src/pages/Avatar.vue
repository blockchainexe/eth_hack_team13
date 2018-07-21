<template>
  <div class="container">
    <img id="avatar-img" alt="Avatar Image" :src="imgSrc"/>
    <span id="user-name"> {{userName}} </span>
    <button id="register-friend-btn" @click="registerFriendQR">
      友達登録
    </button>
    <button id="item-list-btn" @click="showItemModal=true">
      アイテム
    </button>
    <button id="friend-list-btn" @click="goToFriendList">
      友達一覧
    </button>
    <modal-basic v-if="showItemModal" @close="showItemModal = false">
      <h3 slot="header">Item List</h3>
      <div slot="body">
        <ul>
          <li v-for="item in itemList">
            <img :src="item.itemImg"> <span> {{item.name}} </span>
          </li>
        </ul>
      </div>
      <div slot="footer">
      </div>
    </modal-basic>
  </div>
</template>

<script>
import ModalBasic from '~/components/ModalBasic'
export default {
  data () {
    return {
      imgSrc: "",
      userName: "",
      showItemModal: false,
      itemList: [],
    };
  },
  created: function () {
    this.imgSrc = this.$route.query.imgSrc;
    this.userName = this.$route.query.userName;
    this.itemList = this.$route.query.itemList;
  },
  components: {
    ModalBasic
  },
  methods: {
    registerFriendQR: function(){
    },
    goToFriendList: function(){
      this.$router.push({ path: '/friends-list', query: { friendList: [] }})
    }
  },
};
</script>
<style>
  @import '../assets/styles/base.scss';
</style>
<style lang="css" scoped>
.container{
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
#avatar-img {
  padding: 60px;
  width: 70%;
  max-width: 300px;
}
span {
  padding: 10px;
}
ul {
  list-style-type: none;
  height: 80%;
  overflow: scroll;
  padding: 0;
}
li {
  border-bottom: medium solid #f7b399;
}
ul img {
  width: 40px;
}
</style>
