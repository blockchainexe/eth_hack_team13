<template>
  <div>
    Chat Room
    <div v-for="(log, index) in chatLog" :key="index">
      <div v-if="log.isMyMessage" class="myMessages">
        <img class="myIcon" src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
        <p class="myMessage">{{ log.msg }}</p>
      </div>
      <div v-if="!log.isMyMessage" class="othersMessages">
        <img  class="othersIcon"  src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
        <p class="othersMessage">{{ log.msg }}</p>
      </div>
    </div>
    <div class="message-input">
        <div class="wrap">
            <input type="text" placeholder="Write your message..." />
            <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
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
          msg: 'こんにちは1',
          isMyMessage: true
        },
        {
          msg: 'こんにちは2',
          isMyMessage: false
        },
        {
          msg: 'こんにちは3',
          isMyMessage: true
        }
      ]
    };
  }, mounted() {

  }
};
</script>
<style>
    .myMessages, .othersMessages{
        display: flex;
    }
    .myIcon, .othersIcon {
        display:flex;
        height: 50px;
        width: 50px;
        padding: 5px;
    }
    .othersIcon, othersMessage{
        display: flex;
        margin: 0 auto;
        padding: 5px;
    }
</style>