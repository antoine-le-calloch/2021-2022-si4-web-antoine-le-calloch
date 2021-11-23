<template>
  <div class="contacts">
    <Contact v-for="currentContact in contacts"
             :key="currentContact.id"
             :contact="currentContact"/>
    <Contact v-for="currentContact in contacts"
             :key="currentContact.id"
             :contact="currentContact"/>
  </div>
</template>

<script>
import Contact from "./Contact.vue";

export default {
  name: "Contacts",
  components: {
    Contact,
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
.contacts{
  height: 67.4vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
