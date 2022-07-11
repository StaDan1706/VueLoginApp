<template>
  <v-container>
    <v-app-bar color="primary" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-container class="mt-15 d-flex flex-column flex-md-row">
      <v-navigation-drawer permanent>
        <v-list>
          
          <v-list-item class="d-flex justify-center">
            <NavigationAvatar />
          </v-list-item>

          <v-list-item link>
            <NavigationHeader />
          </v-list-item>

        </v-list>
        <v-divider></v-divider>
      </v-navigation-drawer>
      <DashboardContent :items="items" />
      <DataTable />
    </v-container>
  </v-container>
</template>

<script>
import DataTable from "../DataTable.vue";
import NavigationAvatar from "./DashboardNavigation/NavigationAvatar.vue";
import NavigationHeader from "./DashboardNavigation/NavigationHeader.vue";
import DashboardContent from "./DashboardContent/DashboardContent.vue";

export default {
  data() {
    return {
      items: [{ title: "Dashboard", icon: "mdi-view-dashboard" }],
    };
  },
  components: {
    DataTable,
    NavigationAvatar,
    NavigationHeader,
    DashboardContent,
  },
};
</script>
