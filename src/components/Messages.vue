<template>
  <div class="messagesHeader">
    All | Favorites | Channels
  </div>
  <div class="messages">
    <Message v-for="currentMessage in messages"
             :key="currentMessage.id"
             :message="currentMessage"
             v-on:updateReadEvent="markAsReadOrNotRead(currentMessage)"
             v-on:del="del(currentMessage)"/>
    <Message v-for="currentMessage in messages"
             :key="currentMessage.id"
             :message="currentMessage"
             v-on:updateReadEvent="markAsReadOrNotRead(currentMessage)"
             v-on:del="del(currentMessage)"/>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "Messages",
  components: {
    Message,
  },
  created(){
    this.$store.dispatch('setMessages');
  },
  methods: {
    markAsReadOrNotRead(message){
      message.read = !message.read;
    },
    del(message){
      console.log("Le message " + message.id + " est supprimé");
    }
  },
  computed: {
    messages(){
      return this.$store.getters.messagesSortedByDate;
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messagesHeader{
  padding: 4px;
}
.messages {
  padding: 4px;
  overflow-x: hidden;
  overflow-y: hidden;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.messagesHeader{
  border-bottom: solid lightblue;
  font: normal medium "San Francisco", sans-serif;
}
</style>
