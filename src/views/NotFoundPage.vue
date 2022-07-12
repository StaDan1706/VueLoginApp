<template>
  <v-container>
    <AppHeader />
    <v-card
      height="200px"
      class="d-flex flex-column justify-center align-center mt-16"
    >
      <v-card-title>Page not found !</v-card-title>
      <v-card-subtitle>
        <a href="/">Back to Log in page</a>
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>
<script>
import AppHeader from "@/components/Appheader.vue";

export default {
  name: "NotFoundPage",
  components: {
    AppHeader,
  },
};
</script>
