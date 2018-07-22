<template>
  <div>
    <spinner v-if="loading"/>
    <navbar-top/>
    <div class="container">
      <div class="container-main">
        <div class="left">
          <img id="avatar-img" :src="imgSrc" alt="Avatar Image">
        </div>
        <div class="right">
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
        </div>
      </div>
      <modal-basic v-if="showItemModal" @close="showItemModal = false">
        <h3 slot="header">My Items</h3>
        <div slot="body">
          <!--<button @click="showItem='mine'">My Items</button>-->
          <!--<button @click="showItem='gift'">Giftable Items</button>-->
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
      <modal-basic v-if="showChooseItemModal" @close="showChooseItemModal = false" id="chooseItemModal">
        <h3 slot="header">Choose Item</h3>
        <div slot="body">
          <div v-for="option in ItemOptions" class="itemList">
            <input v-model="selectItem" type="radio" :value="option.id"><img :src="option.imgUrl" class="itemIcon"/>
          </div>
        </div>
        <div slot="footer">
          <button @click="requestAddItem">選択</button>
        </div>
      </modal-basic>
    </div>
    <navbar-bottom/>
  </div>
</template>

<script>
import { addFriend, addItem, getItemList } from '~/common/api/uport';
import { dbReadOnce } from '~/common/api/firebase';
import ModalBasic from '~/components/ModalBasic';
import NavbarBottom from '~/components/NavbarBottom';
import NavbarTop from '~/components/NavbarTop';
import Spinner from '~/components/Spinner';
export default {
  components: {
    ModalBasic,
    NavbarTop,
    NavbarBottom,
    Spinner
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
      itemDict: {food:[{id: 1, imgUrl: "https://pbs.twimg.com/media/CZEpQUjVIAEhW95.jpg"}, {id: 2, imgUrl: "http://houraikai.or.jp/wp-content/uploads/2017/04/nigirizushi_moriawase.png"}, {id: 3, imgUrl: "http://livedoor.blogimg.jp/buzzrall/imgs/b/3/b3dbae38.jpg"}], sport:[{id: 1, imgUrl: "https://1.bp.blogspot.com/-RMiYwU4Oyac/WLEu9stl0bI/AAAAAAABCG8/fZOmyaPrYt86F5g5D6jcU854muwPLpTgACLcB/s800/sumo_rikishi_harite2.png"}, {id: 2, imgUrl: "http://cpimages.s3.amazonaws.com/system/samples/work/sample/166916/large_10_.png"}, {id: 3, imgUrl: "https://3.bp.blogspot.com/-v_oGK4YfIk4/UV1I_tUcFlI/AAAAAAAAPQ0/p9xViZSaSr4/s1600/judo_boy.png"}], anime:[{id: 1, imgUrl: "http://livedoor.blogimg.jp/ayunet55/imgs/3/9/392b0bfe.jpg"}, {id: 2, imgUrl: "https://eizandensha.co.jp/event/wp-content/uploads/sites/11/2017/03/aoba.jpg"}, {id: 3, imgUrl: "http://realsound.jp/wp-content/uploads/2017/11/20171125-3lion-1-950x534.jpg"}]},
      newFriend: {friendName: "", friendAddress: "", interest: ""},
      selectItem: 0,
      loading: false
    };
  },
  mounted () {
    const monitorModal = setInterval(() => {
      const modal = document.getElementById('uport-qr');
      if (modal === null) {
        return;
      }
      const qr = modal.getElementsByTagName('img');
      if (qr.length) {
        /* アニメーション対策 */
        setTimeout(() => {
          this.loading = true;
          clearInterval(monitorModal);
        }, 1000);
      }
    }, 100);
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
          itemList: getItemList()
            .filter(v => v.categoryName === val)
            .map(v => v) });
      });
      updateMyItems.forEach((items)=>{
        console.log(items);
        items.itemList.forEach((item, i) => {
          item.itemImg = this.itemDict[items.categoryName][i].imgUrl;
        })
      })
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
        this.ItemOptions = [];
        this.ItemOptions = [...this.ItemOptions, ...items];
        this.newFriend.friendName = result.friendName;
        this.newFriend.friendAddress = result.friendAddress;
        this.newFriend.interest = result.interest;
        this.loading = false;
        this.showChooseItemModal = true;
      });
    },
    goToFriendList: function () {
      this.$router.push({ path: '/friends-list', query: { friendList: [] } });
    },
    goToSearch: function () {
      this.$router.push({ path: '/search', query: { search: [] } });
    },
    requestAddItem: function () {
      //this.loading = true;
      this.showChooseItemModal = false;
      addItem(this.selectItem, this.newFriend).then(() => {
        //this.loading = false;
        if(this.myItemList[this.categoryList.indexOf(this.newFriend.interest)]){
          this.myItemList[this.categoryList.indexOf(this.newFriend.interest)].itemList.push({itemImg: this.itemDict[this.newFriend.interest][this.selectItem-1].imgUrl, friendName: this.newFriend.friendName});
        }else {
          this.myItemList[this.categoryList.indexOf(this.newFriend.interest)] = {itemList:[{itemImg: this.itemDict[this.newFriend.interest][this.selectItem-1].imgUrl, friendName: this.newFriend.friendName}]};
        }
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
  box-sizing: border-box;
  padding: 80px 0;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.container-main {
  display: flex;
  flex-direction: row;
}

.right {
  width: 50%;
  flex-grow: 1
}

.left {
  flex-grow: 1
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

.itemIcon {
   width: 40px;
}
.itemList {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
