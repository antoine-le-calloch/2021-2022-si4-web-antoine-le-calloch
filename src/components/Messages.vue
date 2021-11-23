<template>
  <div class="messages">
    <div class="messagesHeader">
      <div class="All">All</div>
      <div class="Favorites">Favorites</div>
      <div class="Channels">Channels</div>
    </div>
    <div class="messagesList">
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
    if(this.isStart){
      this.isStart = false;
      this.$store.dispatch('setMessages');
    }
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
.messages{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.messagesHeader{
  display: flex;
  justify-content: space-around;
  width: 25vh;
  padding: 0.5vh;
  font: normal 2.2vh "San Francisco", sans-serif;
}
.All{
  border-bottom: 0.4vh solid deepskyblue;
  color: deepskyblue;
}
.messagesList {
  width: 100%;
  height: 63.5vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
