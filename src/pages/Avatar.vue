<template>
  <div class="container">
    <img id="avatar-img" alt="Avatar Image" :src="imgSrc"/>
    <span id="user-name"> {{userName}} </span>
    <button id="register-friend-btn" @click="registerFriendQR">
      Register Friends
    </button>
    <button id="item-list-btn" @click="showItemModal=true">
      Item List
    </button>
    <button id="friend-list-btn" @click="goToFriendList">
      List of Friends
    </button>
    <modal-basic v-if="showItemModal" @close="showItemModal = false">
      <h3 slot="header">Item List</h3>
      <div slot="body">
        <button @click="showItem='mine'">My Item</button>
        <button @click="showItem='gift'">Giftable Item</button>
        <ul class="categories" v-if="showItem==='mine'">
          <li v-if="category.itemList.length>0" v-for="category in myItemList">
            <span> {{category.categoryName}} </span>
            <ul class="items">
              <li v-for="item in category.itemList">
                <img :src="item.itemImg">
                  {{item.friendName}}
              </li>
            </ul>
          </li>
        </ul>
        <ul class="categories" v-if="showItem==='gift'">
          <li v-if="category.itemList.length>0" v-for="category in itemList">
            <span > {{category.categoryName}} </span>
            <ul class="items">
              <li v-for="item in category.itemList">
                <img :src="item.itemImg">
                  {{item.friendName}}
              </li>
            </ul>
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
import {addFriend} from '~/common/api/uport'
export default {
  data () {
    return {
      imgSrc: "",
      userName: "",
      showItemModal: false,
      itemList: [],
      myItemList: [],
      categoryList: ["Food", "Sports", "Anime"],
      showItem: 'mine'
    };
  },
  created: function () {
    console.log(this.$route.query.itemList);
    this.imgSrc = this.$route.query.imgSrc;
    this.userName = this.$route.query.userName;
    var updateItems = [];
    var that = this;
    console.log(that.$route.query.itemList);
    this.categoryList.forEach(function(val){
      updateItems.push({categoryName:val, itemList:JSON.parse(that.$route.query.itemList)
        .filter(v => v.categoryName === val)
        .map(v => v)});
    })
    this.itemList = [...this.itemList, ...updateItems];
    var updateMyItems = [];
    this.categoryList.forEach(function(val){
      updateMyItems.push({categoryName:val, itemList:JSON.parse(that.$route.query.myItemList)
        .filter(v => v.categoryName === val)
        .map(v => v)});
    })
    this.myItemList = [...this.myItemList, ...updateMyItems];
    console.log(this.myItemList);
  },
  components: {
    ModalBasic
  },
  methods: {
    registerFriendQR: function(){
      addFriend().then();
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
.items li {
  border-bottom: medium solid #f7b399;
}
ul img {
  width: 40px;
}
</style>
