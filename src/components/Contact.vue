<template>
  <div class="contact">
    <img v-bind:src="getImage" alt="profile image" >
    <h1>{{getFullName}}</h1>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contact : Object,
  },
  computed: {
    getImage(){
      return this.contact.profileImage;
    },
    getFullName(){
      return this.contact.name;
    }
    /*getContent(){
      return this.message.content;
    },
    getTime(){
      const actualTime = new Date(this.message.date);
      return actualTime.getHours() + ":" + (actualTime.getMinutes()<10?'0':'') + actualTime.getMinutes();
    },
    isRead(){
      return this.message.read;
    }*/
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact{
  color: #1e78ff;
  display: flex;
}
.contact > img {
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin: 10px;
}
.contact > h1 {
  font: x-large "San Francisco", sans-serif;
  display: flex;
  align-items: center;
  margin: 3px;
}
</style>
