<template>
  <div>
    Chat
    <div v-for="(log, index) in chatLog" :key="index">
      <div v-if="log.isMyMessage" class="myMessage">
        {{ log.msg }}
      </div>
      <div v-if="!log.isMyMessage" class="othersMessage">
        {{ log.msg }}
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
  }
};
</script>
