<template>
  <v-container>
    <AppHeader />

    <DashboardUnauthorized v-if="store.user == null" />

    <v-container v-else class="mt-15 d-flex flex-column">
      <v-container>
        <v-list>
          <v-list-item class="d-flex justify-center">
            <DashboardAvatar />
          </v-list-item>

          <v-list-item link>
            <DashboardUser />
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
      </v-container>

      <DashboardData />
    </v-container>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/user";
import DashboardData from "@/components/Dashboard/DashboardData.vue";
import DashboardUser from "@/components/Dashboard/DashboardUser.vue";
import DashboardAvatar from "@/components/Dashboard/DashboardAvatar.vue";
import DashboardUnauthorized from "@/components/Dashboard/DashboardUnauthorized.vue";
import AppHeader from "@/components/Appheader.vue";

export default {
  setup() {
    const store = useUserStore();

    return {
      store,
    };
  },
  components: {
    DashboardData,
    DashboardAvatar,
    DashboardUser,
    AppHeader,
    DashboardUnauthorized,
  },
};
</script>
