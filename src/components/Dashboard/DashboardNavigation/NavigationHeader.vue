<template>
  <v-list-item-content>
    <v-list-item-title class="text-h6">
      {{ email || "email" }}
    </v-list-item-title>
    <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
export default {
  props: ["email"],
  methods: {
    logout() {
      this.$router.replace("/");
    },
  },
};
</script>
