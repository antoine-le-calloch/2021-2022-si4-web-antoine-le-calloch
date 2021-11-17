<template>
  <div class="messageCard">
    <span v-touch:swipe.left="itemOnLeft"
          v-touch:swipe.right="itemOnRight">
      <div class="message" v-bind:class="{ messageOnLeft: elementOnLeft, messageOnRight: !elementOnLeft }">
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
      elementOnLeft : false,
    }
  },
  methods: {
    itemOnLeft(){
      this.elementOnLeft = true;
      console.log("left" + this.message.id);
    },
    itemOnRight() {
      this.elementOnLeft = false;
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
.messageCard{
  display: flex;
  background-color: #a9a9a9;
}
.messageOnLeft {
  transform: translateX(-70px);
}
.messageOnRight {
  transform: translateX(0px);
}
.message {
  user-select: none;
  position: relative;
  display: flex;
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
  font: medium "San Francisco", sans-serif;
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
