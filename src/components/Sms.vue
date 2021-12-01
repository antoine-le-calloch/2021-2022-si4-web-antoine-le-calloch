<template>
  <div class="conversation">
    <div class="conversationHeader">
      <div v-touch:tap="goBackToMessages" class="fas fa-chevron-left"></div>
      <div class="nbUnreadMessage">
          <span v-if="nbMessageUnread > 0">
            {{nbMessageUnread}}
          </span>
      </div>
      <div class="profileImage">
        <img v-bind:src="getImage" alt="profile image" height=100%>
      </div>
      <div class="convName">
        {{getFullName}}
  </div>
      <div class="callConv">
        <i class="fas fa-phone-alt"></i>
      </div>
      <div class="videoCallConv">
        <i class="fas fa-video"></i>
      </div>
    </div>
    <div class="smsList">
      <h1>{{getSms}}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "Conversation",
  props: {
    message : Object,
  },
  data() {
    return{
    }
  },
  methods: {
    goBackToMessages(){
      this.$emit("goBack");
    }
  },
  computed: {
    getFullName(){
      return this.message.sender.name;
    },
    getImage(){
      return this.message.sender.profileImage;
    },
    nbMessageUnread(){
      return this.$store.getters.numberOfUnreadMessages;
    },
    getSmsOfTheCurrentMessage(){
      return this.$store.getters.allConversations.get(this.message.id);
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.conversation{
  background-color: white;
  position: absolute;
  top: 5vh;
  z-index: 2;
  width: 100%;
  height: 90%;
}
.conversationHeader{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.fa-chevron-left{
  color: #1e78ff;
}
img {
  width: 4vh;
  height: 4vh;
  border-radius: 4.5vh;
}
h1{
  border-radius: 4vh;
  text-align: left;
  font: normal 5vh "San Francisco", sans-serif;
  background-color: aquamarine;
}
h2{
  border-radius: 4vh;
  text-align: right;
  background-color: aquamarine;
  font: normal 5vh "San Francisco", sans-serif;
}
</style>
