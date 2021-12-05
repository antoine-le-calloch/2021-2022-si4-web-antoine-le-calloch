<template>
  <div class="sms" v-bind:class="{smsSendByUs:isRead !== undefined,smsSendByOthers:isRead === undefined}">
    <div class="content" v-if="getContent !== 0">
      {{getContent}}
    </div>
    <div class="thumbs" v-else>
      <i class="fas fa-thumbs-up"></i>
    </div>
    <div class="date">
      {{getTime}}
    </div>
  </div>
</template>

<script>

export default {
  name: "Sms",
  props: {
    sms : Object,
  },
  computed: {
    getContent(){
      return this.sms.content;
    },
    getTime(){
      const actualTime = new Date(this.sms.date);
      return actualTime.getHours() + ":" + (actualTime.getMinutes()<10?'0':'') + actualTime.getMinutes();
    },
    isRead(){
      return this.sms.read;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.smsSendByUs{
  flex-direction: row-reverse;
  --sms-back-color: #1e78ff;
}
.smsSendByOthers{
  --sms-back-color: darkgrey;
}
.sms{
  display: flex;
  align-items: center;
  width: 100%;
}
.content{
  margin: 2vh;
  padding: 1vh 2vh 1vh 2vh;
  max-width: 35vh;
  border-radius: 10vh;
  background-color: var(--sms-back-color);
  font: normal 3vh "San Francisco", sans-serif;
  overflow-wrap: break-word;
}
.thumbs{
  color: #1e78ff;
  margin: 2vh;
  padding: 1vh 2vh 1vh 2vh;
  font: normal 6vh "San Francisco", sans-serif;
}
.date{
  font: normal 2vh "San Francisco", sans-serif;
}
</style>
