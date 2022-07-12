<template>
  <v-container>
    <v-app-bar color="primary" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-container class="mt-15 d-flex flex-column">

      <v-container>
        <v-list>
          <v-list-item class="d-flex justify-center">
            <NavigationAvatar />
          </v-list-item>

          <v-list-item link>
            <NavigationHeader />
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-container>

      <DataTable />
    </v-container>
  </v-container>
</template>

<script>
import DataTable from "../DataTable.vue";
import NavigationAvatar from "./DashboardAvatar.vue";
import NavigationHeader from "./DashboardHeader.vue";

export default {
  components: {
    DataTable,
    NavigationAvatar,
    NavigationHeader,
  },
};
</script>
