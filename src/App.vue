<template>
  <div class="app">
    <Header></Header>
    <Messages></Messages>
    <Menu></Menu>
  </div>
</template>

<script>
import Messages from "./components/Messages.vue";
import Menu from "./components/Menu.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Messages,
    Menu,
    Header,
  }
};
</script>

<style>
html{
  background-image: url("assets/phone.png");
  background-size: 1350px 640px;
  background-repeat: no-repeat;
}
body {
  height: 100%;
}
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  position: absolute;
  left: 507px;
  top: 40px;
  width: 336px;
  height: 569px;
  border-radius: 31px;
  padding-bottom: 20px;
}
@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

</style>
