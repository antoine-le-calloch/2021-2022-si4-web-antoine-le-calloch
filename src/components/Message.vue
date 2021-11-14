<template>
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
</template>

<script>
export default {
  name: "Message",
  props: {
    message : Object,
  },
  data() {
    return {
      translation: Number,
    }
  },
  methods: {
    swipeItemLeft(){
      const root = document.querySelector(':root');
      root.style.setProperty('--distance', '-100px');
      console.log("left");
    },
    swipeItemRight() {
      const root = document.querySelector(':root');
      root.style.setProperty('--distance', '0px');
      console.log("right");
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
:root {
  --distance: 0px;
}
.message {
  display: flex;
  transform: translateX(var(--distance));
  transition: 1s;
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
</style>
