<template>
  <v-container>
    <DashboardHeader />
    <v-container class="mt-15 d-flex flex-column">
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
import DashboardData from "@/components/Dashboard/DashboardData.vue";
import DashboardUser from "@/components/Dashboard/DashboardUser.vue";
import DashboardAvatar from "@/components/Dashboard/DashboardAvatar.vue";
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";

export default {
  components: {
    DashboardData,
    DashboardAvatar,
    DashboardUser,
    DashboardHeader,
  },
};
</script>
