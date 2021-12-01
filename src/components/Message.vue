<template>
  <div class="messageCard">
    <div v-touch:tap="clickOnMessage" class="message" v-touch:swipe.left="itemOnLeft" v-touch:swipe.right="itemOnRight" v-bind:class="{ messageOnLeft: elementOnLeft, messageOnRight: !elementOnLeft }">
      <div class="image">
        <img v-bind:src="getImage" alt="profile image">
      </div>
      <div class="text">
        <template class="readMessage" v-if="isRead">
          <div class="title">{{getFullName}}</div>
          <div class="msg">{{getContent}}</div>
        </template>
        <template class="UnreadMessage" v-else>
          <div class="boldTitle">{{getFullName}}</div>
          <div class="boldMsg">{{getContent}}</div>
        </template>
      </div>
      <div class="date" v-bind:class="{boldDate: !isRead}">
          {{getTime}}
        <template class="dateForUnReadMsg" v-if="!isRead">
          <i class="fas fa-circle fa-xs"></i>
        </template>
      </div>
    </div>
    <div class="messageSettings">
      <div class="settingsButton" v-on:click="this.seeSettings = ~this.seeSettings">
        <div class="fas fa-ellipsis-h">
          <div class="options" v-bind:class="{ displayOptions: seeSettings, hiddenOptions: !seeSettings}">
            <div class="lu-nonLu" v-on:click="markAsReadOrNotRead">
              <template v-if="isRead">
                Marquer comme non lu
                <i class="far fa-envelope"></i>
              </template>
              <template v-else>
                Marquer comme lu
                <i class="far fa-envelope-open"></i>
              </template>
            </div>
            <div class="delete"  v-on:click="del">
              Supprimer
              <i class="fas fa-trash"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="goToConversation">
    <Conversations :message="message" v-on:goBack="goBackToMessages"></Conversations>
  </div>
</template>

<script>
import Conversations from "./Conversation";

export default {
  name: "Message",
  props: {
    message : Object,
  },
  components: {
    Conversations
  },
  data() {
    return {
      elementOnLeft : false,
      seeSettings : false,
      goToConversation : false
    }
  },
  methods: {
    itemOnLeft(){
      this.elementOnLeft = true;
    },
    itemOnRight() {
      this.elementOnLeft = false;
    },
    del() {
      this.elementOnLeft = false;
      this.$emit("del");
    },
    markAsReadOrNotRead() {
      this.elementOnLeft = false;
      this.$emit("updateReadEvent");
    },
    clickOnMessage() {
      if(this.elementOnLeft)
        this.elementOnLeft = false;
      else{
        if(!this.isRead)
          this.$emit("updateReadEvent");
        this.goToConversation = true;
      }
    },
    goBackToMessages() {
      this.goToConversation = false;
    }
  },
  computed: {
    getFullName(){
      return this.message.sender.name;
    },
    getImage(){
      return this.message.sender.profileImage;
    },
    getContent(){
      return this.message.content;
    },
    getTime(){
      const actualTime = new Date(this.message.date);
      return actualTime.getHours() + ":" + (actualTime.getMinutes()<10?'0':'') + actualTime.getMinutes();
    },
    isRead(){
      return this.message.read;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
router-link{
}
.messageCard{
  flex-shrink: 0;
  display: flex;
  width: 100%;
  background-color: #a9a9a9;
}
.messageOnLeft {
  transform: translateX(-9.9vh);
}
.messageOnRight {
  transform: translateX(0);
}
.message {
  z-index: 1;
  width: 101%;
  height: 101%;
  display: flex;
  transition: 1s;
  background: white;
  user-select: none;
  position: relative;
  text-decoration: none;
  color: black;
}
.image {
  flex-shrink: 0;
  width: 9vh;
  height: 9vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 5vh;
  margin: 0.6vh;
}
img{
  min-width: 9vh;
  min-height: 9vh;
  flex-shrink: 0;
}
.text{
  min-width: 0;
  white-space: nowrap;
}
.title {
  font: normal 3vh "San Francisco", sans-serif;
  margin: 1.5vh 0.2vh 0.2vh;
}
.msg {
  font: normal 2vh "San Francisco", sans-serif;
  color: darkgray;
  margin: 0.2vh;
  overflow: hidden;
  text-overflow: "...";
}
.boldTitle {
  font: bold 3vh "San Francisco", sans-serif;
  margin: 0.2vh;
  margin-top: 1.5vh;
}
.boldMsg {
  font: bold 2vh "San Francisco", sans-serif;
  margin: 0.2vh;
  overflow: hidden;
  text-overflow: "...";
}
.date{
  margin: 1.8vh;
  font: normal 2vh "San Francisco", sans-serif;
}
.boldDate{
  font: bold 2vh "San Francisco", sans-serif;
}
.fa-circle{
  color: #1e78ff;
}
.messageSettings{
  width: 10vh;
  position: relative;
  right: 10vh;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.settingsButton{
  width: 5.5vh;
  height: 5.5vh;
  border-radius: 10vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa-ellipsis-h{
  color: #a9a9a9;
  font-size: 2.5vh;
}
.hiddenOptions{
  display: none;
}
.displayOptions{
  display: flex;
}
.options {
  user-select: none;
  color: black;
  position: absolute;
  right: 7vh;
  bottom: -7.5vh;
  width: 34.5vh;
  background-color: white;
  border-radius: 0.5vh;
  font: normal 2vh "San Francisco", sans-serif;
  box-shadow: 0 0 1.5vh lightgray;
  flex-direction: column;
  justify-content: space-around;
  z-index: 2;
}
.options > .lu-nonLu{
  padding: 0.5vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1vh solid darkgrey;
}
.options > .delete{
  padding: 0.5vh;
  display: flex;
  justify-content: space-between;
  color: red;
}
</style>
