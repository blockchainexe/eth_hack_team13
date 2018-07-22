<template>
  <div class="container">
    <img id="avatar-img" :src="imgSrc" alt="Avatar Image">
    <h2 id="user-name"> {{ userName }} </h2>
    <button id="search-btn" @click="goToSearch">
      Search New Friends
    </button>
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
        <button @click="showItem='mine'">My Items</button>
        <button @click="showItem='gift'">Giftable Items</button>
        <ul v-if="showItem==='mine'" class="categories">
          <li v-for="category in myItemList" v-if="category.itemList.length > 0">
            <span> {{ category.categoryName }} </span>
            <ul class="items">
              <li v-for="item in category.itemList">
                <img :src="item.itemImg">
                {{ item.friendName }}
              </li>
            </ul>
          </li>
        </ul>
        <ul v-if="showItem==='gift'" class="categories">
          <li v-for="category in itemList" v-if="category.itemList.length>0">
            <span > {{ category.categoryName }} </span>
            <ul class="items">
              <li v-for="item in category.itemList">
                <img :src="item.itemImg">
                {{ item.friendName }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div slot="footer"/>
    </modal-basic>
    <modal-basic v-if="showChooseItemModal" @close="showChooseItemModal = false">
      <h3 slot="header">Choose Item</h3>
      <div slot="body">
        <div v-for="option in ItemOptions">
          <input v-model="selectItem" type="radio" :value="option.id"><img :src="option.imgSrc"/>
        </div>
      </div>
      <div slot="footer">
        <button @click="requestAddItem">選択</button>
      </div>
    </modal-basic>
  </div>
</template>

<script>
import { addFriend, addItem } from '~/common/api/uport';
import { dbReadOnce } from '~/common/api/firebase';
import ModalBasic from '~/components/ModalBasic';
export default {
  components: {
    ModalBasic
  },
  data () {
    return {
      imgSrc: '',
      userName: '',
      showItemModal: false,
      itemList: [],
      myItemList: [],
      categoryList: ['food', 'sport', 'anime'],
      showItem: 'mine',
      ItemOptions: [],
      showChooseItemModal: false,
      itemDict: {food:[{id: 1, imgUrl: ""}, {id: 2, imgUrl: ""}, {id: 3, imgUrl: ""}], sport:[{id: 1, imgUrl: ""}, {id: 2, imgUrl: ""}, {id: 3, imgUrl: ""}], anime:[{id: 1, imgUrl: ""}, {id: 2, imgUrl: ""}, {id: 3, imgUrl: ""}]},
      newFriend: {friendName: "", friendAddress: "", interest: ""},
      selectItem: 0
    };
  },
  created: function () {
    console.log(this.$route.query.itemList);
    dbReadOnce('img/' + this.$route.query.character + '/imgUrl').then(src => {
      this.imgSrc = src;
      console.log(this.imgSrc);
      this.userName = this.$route.query.userName;
      var updateItems = [];
      var that = this;
      console.log(that.$route.query.itemList);
      this.categoryList.forEach(function (val) {
        updateItems.push({ categoryName: val,
          itemList: JSON.parse(that.$route.query.itemList)
            .filter(v => v.categoryName === val)
            .map(v => v) });
      });
      this.itemList = [...this.itemList, ...updateItems];
      var updateMyItems = [];
      this.categoryList.forEach(function (val) {
        updateMyItems.push({ categoryName: val,
          itemList: JSON.parse(that.$route.query.myItemList)
            .filter(v => v.categoryName === val)
            .map(v => v) });
      });
      this.myItemList = [...this.myItemList, ...updateMyItems];
      console.log(this.myItemList);
    });
  },
  methods: {
    registerFriendQR: function () {
      addFriend().then(result => {
          console.log(result.interest);
          let items = this.itemDict[result.interest];
          console.log(items);
          this.ItemOptions = [...this.ItemOptions, ...items];
          this.newFriend.friendName = result.friendName;
          this.newFriend.friendAddress = result.friendAddress;
          this.newFriend.interest = result.interest;
          this.showChooseItemModal = true;
      });
    },
    goToFriendList: function () {
      this.$router.push({ path: '/friends-list', query: { friendList: [] } });
    },
    goToSearch: function () {
      this.$router.push({ path: '/search', query: { search: [] } });
    },
    requestAddItem: function() {
      addItem(this.selectItem, this.newFriend).then(() => {
        this.showChooseItemModal = false;
        this.myItemList[this.categoryList.indexOf(this.newFriend.interest)].itemList.push({itemImg: this.itemDict[this.newFriend.interest][this.selectItem].imgUrl, friendName: this.newFriend.friendName});
      });
    }
  }
};
</script>
<style>
  @import '../assets/styles/base.scss';
</style>
<style lang="scss" scoped>
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
#search-btn {
  $color: #2ecc71;
  width: 250px;
  margin: 5px;
  background: $color;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background: darken($color, 20%);
  }
}

#register-friend-btn {
  $color: #2ecc71;
  width: 250px;
  margin: 5px;
  background: $color;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background: darken($color, 20%);
  }
}

#item-list-btn {
  $color: #2ecc71;
  width: 250px;
  margin: 5px;
  background: $color;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background: darken($color, 20%);
  }
}

#friend-list-btn {
  $color: #2ecc71;
  width: 250px;
  margin: 5px;
  background: $color;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background: darken($color, 20%);
  }

}

</style>
