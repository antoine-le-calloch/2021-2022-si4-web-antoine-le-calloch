<template>
  <div class="menu">
    <router-link to="/contacts"  class="fas fa-address-book"></router-link>
    <i class="fas fa-phone"></i>
    <router-link to="/messages" class="fas fa-comment-dots">
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
  text-align: center;
  border-top: solid lightblue;
  font: bold x-large Arial, sans-serif;
  color: darkgray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
}
.fa-comment-dots{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
}
.fa-comment-dots::before{
  position: absolute;
}
.fa-comment-dots > span{
  z-index: 1;
  border-radius: 50px;
  width: 15px;
  height: 15px;
  border: 2px solid white;
  background: red;
  position: relative;
  left: 9px;
  bottom: 13px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font: bold 12px Arial, sans-serif;
}
</style>
