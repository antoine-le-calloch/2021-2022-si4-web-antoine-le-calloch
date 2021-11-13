<template>
  <div class="messages">
    <div class="messagesHeader">
      All | Favorites | Channels
    </div>
    <Message v-for="currentMessage in listMessage" :key="currentMessage.id" :message="currentMessage"/>
  </div>
</template>

<script>
import Message from "./Message.vue";
import { messagesMock } from "@/mocks/messages.mock";

export default {
  name: "Messages",
  components: {
    Message,
  },
  data() {
    return{
      listMessage: messagesMock,
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messages {
  height: 440px;
  padding: 4px;
}
.messagesHeader{
  border-bottom: solid lightblue;
}
h1 {
}
</style>
