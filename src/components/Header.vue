<template>
  <div class="header">
    <div class="headBand">
      <b class="hour">
        {{getTime}}
      </b>
      <i class='fas fa-signal'></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
    <div class="headApp">
      <h1>Chats</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    getTime() {
      const actualTime = new Date();
      return actualTime.getHours() + ":" + (actualTime.getMinutes()<10?'0':'') + actualTime.getMinutes();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 70px;
  padding-top: 5px;
}
.headBand{
  height: 40px;
  display: flex;
  padding-right: 25px;
  padding-left: 25px;
  justify-content: space-between;
}
h1 {
  font: bold x-large "San Francisco", sans-serif;
  margin: 1px;
  text-align: left;
  padding-left: 3px;
}
</style>
