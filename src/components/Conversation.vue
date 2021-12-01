<template>
  <div class="conversation">
    <div class="conversationHeader">
      <div v-touch:tap="goBackToMessages" class="fas fa-chevron-left">
        <div class="nbUnreadMessage" v-bind:class="{hidden:nbMessageUnread <= 0}">
              {{nbMessageUnread}}
        </div>
      </div>
      <div class="profileImage">
        <img v-bind:src="getImage" alt="profile image">
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
      <Sms v-for="currentSms in allSms.slice().reverse()"
               :key="currentSms.id"
               :sms="currentSms"/>
    </div>
    <div class="conversationFooter">
      <div class="plus">
        <i class="fas fa-plus-circle"></i>
      </div>
      <input class="textInput" v-model="text" placeholder="Aa">
      <div class="likeOrSend" v-if="text === ''">
        <i class="fas fa-thumbs-up" v-touch:tap="thumbsTap"></i>
      </div>
      <div class="likeOrSend" v-else>
        <i v-touch:tap="sendSms" class="fas fa-paper-plane"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Sms from "./Sms"

export default {
  name: "Conversation",
  props: {
    message : Object,
  },
  components: {
    Sms
  },
  data() {
    return{
      text : ""
    }
  },
  methods: {
    goBackToMessages(){
      this.$emit("goBack");
    },
    sendSms(){
      this.$store.commit("addSmsToOneConversation", {
        id: this.message.id,
        txt: this.text
      });
      this.text = "";
    },
    thumbsTap(){
      this.$store.commit("addSmsToOneConversation", {
        id: this.message.id,
        txt: 0
      });
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
    allSms(){
      return this.$store.getters.OneSortedConversation(this.message.id);
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
  color: darkmagenta;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font: normal 3vh "San Francisco", sans-serif;
  overflow: hidden;
}
.fa-chevron-left{
  display: flex;
}
.nbUnreadMessage{
  display: flex;
  justify-content: center;
  font: normal 3vh "San Francisco", sans-serif;
  background-color: darkmagenta;
  border-radius: 10vh;
  color: white;
  font-size: 2.5vh;
  width: 3vh;
}
.hidden{
  display: none;
}
.convName{
  color: black;
  font: bold 3vh "San Francisco", sans-serif;
  margin-right: 12vh;
}
.profileImage {
  flex-shrink: 0;
  width: 4vh;
  height: 4vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 5vh;
  margin: 0.6vh;
}
img{
  min-width: 4vh;
  min-height: 4vh;
  flex-shrink: 0;
}
.smsList{
  position: relative;
  overflow: scroll;
  height: 72vh;
  scrollbar-width: none;
  display: flex;
  flex-direction: column-reverse;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.conversationFooter{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 95%;
  bottom: -2vh;
  left: 1vh;
  background-color: white;
}
.plus{
  color: #1e78ff;
  font: normal 3vh "San Francisco", sans-serif;
}
.textInput{
  background-color: lightsteelblue;
  border-radius: 10vh;
  width: 80%;
  height: 3.5vh;
  padding-left: 1vh;
}
.likeOrSend{
  color: #1e78ff;
  font: normal 4vh "San Francisco", sans-serif;
}
</style>
