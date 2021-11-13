<template>
  <div class="menu">
    <i class="fas fa-address-book"></i>
    <i class="fas fa-phone"></i>
    <i class="fas fa-comment-dots"></i>
    <i class="fas fa-credit-card"></i>
    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
      unreadMessages : Number,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  text-align: center;
  border-top: solid lightblue;
  font: bold x-large Arial, sans-serif;
}
.fa-address-book{
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 10%;
}
.fa-phone{
  margin-right: 10%;
}
.fa-comment-dots{
  margin-right: 10%;
}
.fa-credit-card{
  margin-right: 10%;
}
.fa-ellipsis-h{}
</style>
