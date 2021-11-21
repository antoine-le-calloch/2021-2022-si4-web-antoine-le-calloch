<template>
  <div class="messageCard">
    <span v-touch:swipe.left="itemOnLeft"
          v-touch:swipe.right="itemOnRight">
      <div class="message" v-bind:class="{ messageOnLeft: elementOnLeft, messageOnRight: !elementOnLeft }">
        <img v-bind:src="getImage" alt="profile image" height=100%>
        <div class="text">
          <template class="messageLue" v-if="isRead">
            <h1>{{getFullName}}</h1>
            <h2>{{getContent}}</h2>
          </template>
          <template class="messageNonLue" v-else>
            <h3>{{getFullName}}</h3>
            <h4>{{getContent}}</h4>
          </template>
        </div>
        <div class="date">
          {{getTime}}
          <template class="messageNonLue" v-if="!isRead">
            <i class="fas fa-circle fa-xs"></i>
          </template>
        </div>
      </div>
    </span>
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
</template>

<script>
export default {
  name: "Message",
  props: {
    message : Object,
  },
  data() {
    return {
      elementOnLeft : false,
      seeSettings : false
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
.messageCard{
  display: flex;
  background-color: #a9a9a9;
}
.messageOnLeft {
  transform: translateX(-50px);
}
.messageOnRight {
  transform: translateX(0px);
}
.message {
  user-select: none;
  position: relative;
  display: flex;
  transition: 1s;
  background: white;
  z-index: 1;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 6px;
}
.text{
  min-width: 0;
  white-space: nowrap;
  flex-shrink: 1;
}
.text > h1 {
  font: medium "San Francisco", sans-serif;
  text-align: left;
  margin: 3px;
}
.text > h2 {
  font: normal small "San Francisco", sans-serif;
  color: darkgray;
  margin: 1px;
  overflow: hidden;
  text-overflow: "...";
}
.text > h3 {
  font: bold medium "San Francisco", sans-serif;
  text-align: left;
  margin: 3px;
}
.text > h4 {
  font: bold small "San Francisco", sans-serif;
  margin: 1px;
  overflow: hidden;
  text-overflow: "...";
}
.date{
  margin: 6px;
}
.fa-circle{
  color: #1e78ff;
}
.messageSettings{
  width: 50px;
  position: relative;
  right: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.settingsButton{
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa-ellipsis-h{
  color: #a9a9a9;
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
  right: 52px;
  bottom: -45px;
  width: 220px;
  height: 40px;
  background-color: white;
  border-radius: 2px;
  font: normal small "San Francisco", sans-serif;
  box-shadow: 0 0 5px lightgray;
  flex-direction: column;
  justify-content: space-around;
  z-index: 5;
}
.options > .lu-nonLu{
  padding: 3px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
}
.options > .delete{
  padding: 3px;
  display: flex;
  justify-content: space-between;
  color: red;
}
</style>
