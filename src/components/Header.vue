<template>
  <div class="header">
    <b class="hour">
      {{getTime}}
    </b>
    <i class='fas fa-signal'></i>
    <i class="fas fa-wifi"></i>
    <i class="fas fa-battery-full"></i>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    getTime() {
      const actualTime = new Date();
      return actualTime.getHours() + ":" + actualTime.getMinutes();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 70px;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
.hour{
  width: 205px;
}
</style>
