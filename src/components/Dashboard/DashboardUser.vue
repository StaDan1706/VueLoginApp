<template>
  <v-list-item-content>
    <v-list-item-title class="text-h6">
      {{ store.user }}
    </v-list-item-title>
    <v-list-item-subtitle v-on:click="store.logout">log out</v-list-item-subtitle>
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
  }
};
</script>
