import { defineStore } from "pinia";
import { ref } from "@vue/composition-api";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    userEmail: "testestest",
  });

  const getUserEmail = (newEmail) => {
    user.value.userEmail = newEmail;

  };

  return {
    user,
    getUserEmail,
  };
});
