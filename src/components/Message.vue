<template>
  <div class="messageCard">
    <span v-touch:swipe.left="swipeItemLeft"
          v-touch:swipe.right="swipeItemRight">
      <div class="message">
        <img v-bind:src="getImage" alt="profile image" height=100%>
        <div class="text">
          <template class="messageLue" v-if="getIsRead">
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
          <template class="messageNonLue" v-if="!getIsRead">
            <i class="fas fa-circle fa-xs"></i>
          </template>
        </div>
      </div>
    </span>
    <div class="messageSettings">
      <i class="fas fa-ellipsis-h"></i>
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
      elementOnLeft : Boolean,
    }
  },
  methods: {
    swipeItemLeft(){
      const root = document.querySelector('.messageCard');
      root.style.setProperty('--distance', '-70px');
      console.log("left" + this.message.id);
    },
    swipeItemRight() {
      const root = document.querySelector('.messageCard');
      root.style.setProperty('--distance', '0px');
      console.log("right" + this.message.id);
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
    getIsRead(){
      return this.message.read;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root{
}
.messageCard{
  --distance: 0px;
  display: flex;
  background-color: #a9a9a9;
}
.message {
  user-select: none;
  position: relative;
  display: flex;
  transform: translateX(var(--distance));
  transition: 1s;
  width: 328px;
  background: white;
  z-index: 1;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin: 6px;
}
h1 {
  font: normal medium "San Francisco", sans-serif;
  text-align: left;
  margin: 3px;
}
h2 {
  font: normal small "San Francisco", sans-serif;
  color: darkgray;
  margin: 1px;
}
h3 {
  font: bold medium "San Francisco", sans-serif;
  text-align: left;
  margin: 3px;
}
h4 {
  font: bold small "San Francisco", sans-serif;
  margin: 1px;
}
.date{
  margin: 6px;
}
.fa-circle{
  color: #1e78ff;
}
.messageSettings{
  position: relative;
  top: 12px;
  right: 53px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: white;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa-ellipsis-h{
  vertical-align: middle;
  color: #a9a9a9;
}
</style>
