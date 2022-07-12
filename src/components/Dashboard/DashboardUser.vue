<template>
  <v-list-item-content>
    <v-list-item-title class="text-h6">
      {{ store.user.userEmail }}
    </v-list-item-title>
    <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  setup() {
    const store = useUserStore();

    return {
      store,
    };
  },
  methods: {
    logout() {
      this.$router.replace("/");
       this.store.setUserEmail("");
      console.log(this.store.user.userEmail)
    },
  },
};
</script>
