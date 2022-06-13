<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title
                  >{{
                    registerMode ? stateObj.register.name : stateObj.login.name
                  }}
                  form
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form
                  ref="form"
                  @submit.prevent="registerMode ? register() : login()"
                >
                  <v-text-field
                    v-model="email"
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="email"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-if="registerMode"
                    v-model="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="cocnfirm password"
                    required
                  ></v-text-field>
                  <div class="red--text">{{ errorMessage }}</div>
                  <v-btn
                    type="submit"
                    class="mt-4"
                    color="primary"
                    value="log in"
                    >{{
                      registerMode
                        ? stateObj.register.name
                        : stateObj.login.name
                    }}</v-btn
                  >
                  <div
                    class="grey--text mt-4"
                    v-on:click="registerMode = !registerMode"
                  >
                    {{ toggleMessage }}
                  </div>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCaJwoD86C7Ye5RhIAmUhbbf6cXLvIIIws",
  authDomain: "vuelogin-a84f9.firebaseapp.com",
  projectId: "vuelogin-a84f9",
  storageBucket: "vuelogin-a84f9.appspot.com",
  messagingSenderId: "1021585384697",
  appId: "1:1021585384697:web:4e1ba27e35222731ceee28",
  measurementId: "G-6QTE54YV55",
};

initializeApp(firebaseConfig);
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth();

export default {
  name: "App",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      registerMode: false,
      errorMessage: "",
      stateObj: {
        register: {
          name: "Register",
          message: "Aleady have an Acoount? login.",
        },
        login: {
          name: "Login",
          message: "Register",
        },
      },
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.replace("/dashboard");
        })
        .catch((error) => {
          console.log(error.code);

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
    register() {
      if (this.validateEmail()) {
        if (this.password == this.confirmPassword) {
          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
              console.log("Syccesfully registered!");
              console.log(auth.currentUser);
              this.$router.replace("/dashboard");
              this.registerMode = false;
              this.errorMessage = "";
              this.$refs.form.reset();
            })
            .catch((error) => {
              console.log(error.code);
              switch (error.code) {
                case "auth/email-already-in-use":
                  this.errorMessage = "Email already in use";
                  break;
                case "auth/weak-password":
                  this.errorMessage =
                    "Password should contain at least 6 characters";
                  break;
                default:
                  this.errorMessage = "Something go wrong";
                  break;
              }
            });
        } else {
          this.errorMessage = "password did not match";
        }
      } else {
        this.errorMessage = "Invalid email";
      }
    },
    validateEmail() {
      const blueprint =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return blueprint.test(this.email);
    },
  },
  computed: {
    toggleMessage: function () {
      return this.registerMode
        ? this.stateObj.register.message
        : this.stateObj.login.message;
    },
  },
};
</script>
