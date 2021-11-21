<template>
  <div class="phone">
    <div class="app">
      <Header></Header>
      <router-view></router-view>
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Menu,
    Header,
  }
};
</script>

<style>
html{}
body {
  margin: 0;
  background-image: url("assets/fond.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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
.app {
  background-color: red;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  border-radius: 31px;
  margin: 7vh;
  min-height: 0;
  height: border-box;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

</style>
