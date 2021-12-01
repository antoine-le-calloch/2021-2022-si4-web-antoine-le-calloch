<template>
  <div class="menu">
    <router-link to="/principalPage/contacts"  class="fas fa-address-book"></router-link>
    <i class="fas fa-phone"></i>
    <router-link to="/principalPage/messages" class="fas fa-comment-dots">
      <span v-if="nbUnreadMessages > 0">
        {{nbUnreadMessages}}
      </span>
    </router-link>
    <i class="fas fa-credit-card"></i>
    <i class="fas fa-cog"></i>
  </div>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    nbUnreadMessages(){
      return this.$store.getters.numberOfUnreadMessages;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  position: absolute;
  top: 79.5vh;
  width: 100%;
  font-size: 4vh;
  color: darkgray;
  display: flex;
  justify-content: space-around;
  padding-top: 1.5vh;
  border-top: 0.4vh solid lightblue;
}
.fa-comment-dots{
  width: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.fa-comment-dots::before{
  position: absolute;
}
.fa-comment-dots > span{
  z-index: 1;
  border-radius: 1vh;
  width: 2vh;
  height: 2vh;
  border: 0.4vh solid white;
  background: red;
  position: relative;
  left: 1.6vh;
  bottom: 2vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font: bold 2vh Arial, sans-serif;
}
</style>
