<template>
  <div class="contacts">
    <div class="tabTitle">
      <h1>Contacts</h1>
    </div>
    <div class="tabOptions">
      <div class="All">All</div>
      <div class="Favorites">Favorites</div>
    </div>
    <div class="contactsList">
    <Contact v-for="currentContact in contacts"
             :key="currentContact.id"
             :contact="currentContact"/>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact.vue";

export default {
  name: "Contacts",
  components: {
    Contact
  },
  created(){
    this.$store.dispatch('setContacts');
  },
  computed: {
    contacts(){
      return this.$store.getters.contactsSortedByName;
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-left: 1vh;
  margin-top: 3vh;
  margin-bottom: 0;
  font: bold 3.5vh "San Francisco", sans-serif;
  text-align: left;
}
.tabOptions{
  width: 14.4vh;
  display: flex;
  margin-left: 0.5vh;
  justify-content: space-around;
  font: normal 2.2vh "San Francisco", sans-serif;
}
.All{
  border-bottom: 0.4vh solid deepskyblue;
  color: deepskyblue;
}
.contactsList{
  height: var(--principalPage-Body-Height);
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
