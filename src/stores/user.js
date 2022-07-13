import firebase from "firebase/app";
import router from "@/router";

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return { user: null, errorMessage: null };
  },
  persist: true,
  actions: {
    login(email, password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.user = firebase.auth().currentUser.email;
          router.push("dashboard");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMessage = "Invalid email";
              break;
            case "auth/wrong-password":
              this.errorMessage = "Incorrect password";
              break;
            default:
              this.errorMessage = "Email or password was incorrect";
              break;
          }
        });
    },

    register(email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.user = firebase.auth().currentUser.email;
          router.push("/dashboard");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              this.errorMessage = "Email already in use";
              break;
            default:
              this.errorMessage = "Something go wrong";
              break;
          }
        });
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.errorMessage = null;
          this.user = null;
          router.push("/");
        });
    },
  },
});
