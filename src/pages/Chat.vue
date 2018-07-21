<template>
    <div>
        Chat Room
        <div v-for="(log, index) in chatLog" :key="index">
            <div v-if="log.isMyMessage" class="myMessages">
                <img class="myIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD89KXgMqFPTsqrpRYt7HVyK3Jy_8MNhhfabTFaORiiTtrCWPB8Q" alt=""/>
                <p class="myMessage">{{ log.msg }}</p>
            </div>
            <div v-if="!log.isMyMessage" class="othersMessages">
                <img class="othersIcon" src="http://emilcarlsson.se/assets/mikeross.png" alt=""/>
                <p class="othersMessage">{{ log.msg }}</p>
            </div>
        </div>
        <div class="message-input">
            <div class="wrap">
                <input type="text" placeholder="Write your message..." class="input-box form-control">
                <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        chatLog: [
          {
            msg: 'こんにちは僕はくまモンです',
            isMyMessage: true
          },
          {
            msg: 'Hello! Kumamon??',
            isMyMessage: false
          },
          {
            msg: 'くまモンは熊本のご当地キャラクターなんです',
            isMyMessage: true
          },
          {
            msg: 'I want to go to Kumamoto :)',
            isMyMessage: false
          }
        ]
      };
    }, mounted() {

    }
  };
</script>
<style>
    .myMessages, .othersMessages {
        display: flex;
        display: inline-block;
        clear: both;
        float: left;
        margin: 15px 15px 5px 20px;
        width: calc(100% - 25px);
        font-size: 0.9em;
    }

    .myIcon {
        height: 50px;
        width: 50px;
        padding: 5px;
        background: #303a76;
        float: right;
    }
    .othersIcon {
        height: 50px;
        width: 50px;
        padding: 5px;
        background: #d5f5f5;
        float: left;
    }
    .myMessage{
        padding: 10px;
        margin: 10px 30px 10px 40%;
        background: #435f7a;
        color: #f5f5f5;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
    }
    .othersMessage{
        padding: 10px 10px 10px 40px;
        margin: 10px 40% 10px 20px;
        background: #bbdce0;
        color: #000000;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
    }
    .message-input{
        padding: 50px 0px 10px 20px;
    }
    .input-box{
        width: calc(100% - 48px);
        height: 40px;
    }
    .submit{
        height: 40px;
    }
</style>
