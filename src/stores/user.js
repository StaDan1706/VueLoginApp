import { defineStore } from "pinia";
import { ref } from "@vue/composition-api";

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref({
      userEmail: "",
    });

    const setUserEmail = (newEmail) => {
      user.value.userEmail = newEmail;
    };

    return {
      user,
      setUserEmail,
    };
  },
  {
    persist: true,
  }
);
