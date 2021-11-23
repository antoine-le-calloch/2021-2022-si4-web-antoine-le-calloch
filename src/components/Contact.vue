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
  width: 8vh;
  height: 8vh;
  border-radius: 5vh;
  margin: 1vh;
}
.contact > h1 {
  font: 3vh "San Francisco", sans-serif;
  display: flex;
  align-items: center;
  margin: 1vh;
}
</style>
