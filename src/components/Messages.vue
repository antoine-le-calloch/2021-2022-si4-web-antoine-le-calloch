<template>
  <div class="messages">
    <div class="messagesHeader">
      <div class="tabTitle">
        <h1>Chats</h1>
      </div>
      <div class="tabOptions">
        <div class="All">All</div>
        <div class="Favorites">Favorites</div>
        <div class="Channels">Channels</div>
      </div>
    </div>
    <div class="messagesList">
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
    this.$store.dispatch('setMessages');
    this.$store.dispatch('setConversations');
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
h1 {
  margin-left: 1vh;
  margin-top: 3vh;
  margin-bottom: 0;
  font: bold 3.5vh "San Francisco", sans-serif;
  text-align: left;
}
.tabOptions{
  width: 25vh;
  display: flex;
  margin-left: 0.5vh;
  justify-content: space-around;
  font: normal 2.2vh "San Francisco", sans-serif;
}
.All{
  border-bottom: 0.4vh solid deepskyblue;
  color: deepskyblue;
}
.messagesList {
  width: 100%;
  height: var(--principalPage-Body-Height);
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
