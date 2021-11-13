<template>
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
        <i class="fas fa-circle"></i>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message : Object,
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
  var SwipeToRevealOptions = require('react-swipe-to-reveal-options');

  var App = React.createClass({
    render() {
      var items = [
        {
          leftOptions: [{
            label: 'Trash',
            class: 'trash'
          }],
          rightOptions: [{
            label: 'Move',
            class: 'move',
          },{
            label: 'Archive',
            class: 'archive',
          }],
          content: "Mail from Mathieu",
          callActionWhenSwipingFarLeft: true,
          callActionWhenSwipingFarRight: true
        },
        {
          leftOptions: [{
            label: 'Trash',
            class: 'trash'
          }],
          rightOptions: [{
            label: 'Move',
            class: 'move',
          },{
            label: 'Archive',
            class: 'archive',
          }],
          content: "Mail from Arseny",
          callActionWhenSwipingFarRight: true,
          callActionWhenSwipingFarLeft: false
        },
        {
          leftOptions: [{
            label: 'Trash',
            class: 'trash'
          }],
          rightOptions: [{
            label: 'Move',
            class: 'move',
          },{
            label: 'Archive',
            class: 'archive',
          }],
          content: "Mail from Bruno",
          callActionWhenSwipingFarRight: false,
          callActionWhenSwipingFarLeft: false
        }
      ];
      return (
          <div>
            items.map(function(item) {
            return (
            <SwipeToRevealOptions
            leftOptions={item.leftOptions}
            rightOptions={item.rightOptions}
            callActionWhenSwipingFarRight={item.callActionWhenSwipingFarRight}
            callActionWhenSwipingFarLeft={item.callActionWhenSwipingFarLeft}
            >
          {item.content}
            </SwipeToRevealOptions>
            );
          })
          </div>
      );
    },

  });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  display: flex;
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
  color: darkgray;
  margin: 1px;
}
.date{
  margin: 6px;
}
.fa-circle{
  color: #1e78ff;
}
</style>
