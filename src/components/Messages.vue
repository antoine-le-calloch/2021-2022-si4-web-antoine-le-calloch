<template>
  <div class="messages">
    <div class="messagesHeader">
      All | Favorites | Channels
    </div>
    <Message v-for="currentMessage in messages" :key="currentMessage.id" :message="currentMessage"/>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "Messages",
  components: {
    Message,
  },
  computed: {
    messages(){
      console.log(this.$store.state.messages)
      return this.$store.messagesSortedByDate();
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messages {
  height: 440px;
  padding: 4px;
  overflow: hidden;

}
.messagesHeader{
  border-bottom: solid lightblue;
  font: normal medium "San Francisco", sans-serif;
}
</style>
