import { defineStore } from "pinia";

export const useEmailStore = defineStore('email', {
    state: () => ({
        name: "email",
        value: "",
    }),
})