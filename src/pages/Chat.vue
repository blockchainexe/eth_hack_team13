<template>
  <div class="container">
    <!-- Chat Room -->
    <div v-for="(log, index) in chatLog" :key="index">
      <div v-if="log.isMyMessage" class="myMessages">
        <p class="myMessage">{{ log.msg }}</p>
        <!-- <img class="myIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD89KXgMqFPTsqrpRYt7HVyK3Jy_8MNhhfabTFaORiiTtrCWPB8Q" alt=""> -->
      </div>
      <div v-if="!log.isMyMessage" class="othersMessages">
        <!-- <img class="othersIcon" src="http://emilcarlsson.se/assets/mikeross.png" alt=""> -->
        <p class="othersMessage">{{ log.msg }}</p>
      </div>
    </div>
    <div class="message-input">
      <div class="wrap">
        <input v-model="message" type="text" placeholder="Write your message..." class="input-box form-control">
        <button class="submit" @click="postMessage"><i class="fa fa-paper-plane" aria-hidden="true"/></button>
      </div>
    </div>
  </div>
</template>

<script>
import { endChatSession, sendChatMessage, startChatSession } from '~/common/api/chat';
import { myCredential } from '~/common/api/uport';
export default {
  props: {
    chatRoomId: {
      required: false,
      default: 'test',
      type: String
    }
  },
  data () {
    return {
      message: '',
      chatLog: []
    };
  },
  created () {
  },
  mounted () {
    startChatSession(this.chatRoomId, snapShot => {
      const chatLog = snapShot.val();
      console.log(chatLog);
      if (chatLog) {
        this.chatLog = chatLog.map(c => (
          {
            msg: c.msg,
            isMyMessage: c.sender === myCredential.address
          })
        );
      }
    });
  },
  beforeDestroy () {
    endChatSession();
  },
  methods: {
    postMessage () {
      if (this.message === '') { return; }
      sendChatMessage(this.chatRoomId, this.chatLog.length, this.message);
    }
  }
};
</script>
<style lang="scss" scoped>
    .container {
      margin: auto;
      width: 80%;
      max-width: 800px;
    }
    .myIcon {
        height: 50px;
        width: 50px;
        padding: 5px;
        background: #303a76;
    }

    .othersIcon {
        height: 50px;
        width: 50px;
        padding: 5px;
        background: #d5f5f5;
    }

    .myMessages {
        display: flex;
        flex-direction: row;
        margin: 10px;
        justify-content: flex-end;
    }

    .myMessage {
        margin: 15px 15px;
        font-size: 0.9em;
        padding: 10px;
        background: #435f7a;
        color: #f5f5f5;
        border-radius: 10px;
    }

    .othersMessages {
        display: flex;
        flex-direction: row;
        margin: 10px;
        justify-content: flex-start;
    }
    .othersMessage {
        margin: 15px 15px;
        font-size: 0.9em;
        padding: 10px;
        margin: 10px 40% 10px 20px;
        background: #bbdce0;
        color: #000000;
        border-radius: 10px;
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
