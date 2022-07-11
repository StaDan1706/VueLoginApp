import { defineStore } from "pinia";
import { ref } from "@vue/composition-api";

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref({
      userEmail: "",
    });

    const getUserEmail = (newEmail) => {
      user.value.userEmail = newEmail;
    };

    return {
      user,
      getUserEmail,
    };
  },
  {
    persist: true,
  }
);
