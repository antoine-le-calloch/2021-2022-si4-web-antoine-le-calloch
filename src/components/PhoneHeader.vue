<template>
  <div class="phoneHeader">
    <div class="hour">{{getTime}}</div>
    <div class="icons">
      <i class='fas fa-signal'></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhoneHeader",
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
.phoneHeader{
  display: flex;
  justify-content: space-between;
  margin-left: 3vh;
  margin-right: 3vh;
  margin-top: 1vh;
}
.hour{
  font: bold 2vh "San Francisco", sans-serif;
}
.icons{
  width: 9vh;
  font-size: 2vh;
  display: flex;
  justify-content: space-between;
}
</style>
