<template>
  <div class="phone">
    <div class="screen">
      <PhoneHeader></PhoneHeader>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PhoneHeader from "./components/PhoneHeader.vue";

export default {
  name: "App",
  components: {
    PhoneHeader
  }
};
</script>

<style>
:root{
  --principalPage-Body-Height: 66vh;
}
html{}
body {
  margin: 0;
  background-image: url("assets/fond.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.phone{
  background-image: url("assets/phoneSeul.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57vh;
  height: 100vh;
}
.screen {
  position: relative;
  top: 0.8vh;
  left: 0.3vh;
  width: 91%;
  height: 89.5%;
  border-radius: 5vh;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

</style>
