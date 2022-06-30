<template>
  <v-container>
    <v-app-bar color="primary" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-container class="mt-15 d-flex flex-column flex-md-row">
      <v-navigation-drawer permanent>
        <v-list>
          <v-list-item class="d-flex justify-center">
            <v-list-item-avatar class="mt-10">
              <v-img
                src="https://randomuser.me/api/portraits/men/30.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ email || "email" }}
              </v-list-item-title>
              <v-list-item-subtitle v-on:click="logout"
                >log out</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <DataTable />
    </v-container>
  </v-container>
</template>

<script>
import DataTable from "./DataTable.vue";

export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
      ],
      email: this.$route.params.email,
    };
  },
  methods: {
    logout() {
      this.$router.replace("/");
    },
  },
  components: {
    DataTable,
  },
};
</script>
