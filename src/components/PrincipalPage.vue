<template>
  <router-view></router-view>
  <Menu></Menu>
</template>

<script>
import Menu from "./Menu";

export default {
  name: "PrincipalPage",
  components: {
    Menu
  }
};
</script>

<style>
</style>
