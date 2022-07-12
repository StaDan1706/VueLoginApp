<template>
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
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="registerMode ? register() : login()"
              >
                <v-text-field
                  v-model="email"
                  name="email"
                  label="Email"
                  placeholder="email"
                  :rules="emailRules"
                  required
                >
                </v-text-field>

                <v-text-field
                  v-model="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="password"
                  :rules="passwordRules"
                >
                </v-text-field>

                <RegisterForm
                  :password="password"
                  :email="email"
                  v-if="registerMode"
                />

                <div class="red--text">{{ errorMessage }}</div>

                <v-btn
                  type="submit"
                  class="mt-4"
                  color="primary"
                  value="log in"
                  :disabled="!valid"
                  >{{
                    registerMode ? stateObj.register.name : stateObj.login.name
                  }}</v-btn
                >
                <div
                  class="grey--text mt-4"
                  v-on:click="registerMode = !registerMode"
                >
                  {{ toggleMessage }}
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import RegisterForm from "./RegisterForm.vue";
import firebase from "firebase/app";
import { useUserStore } from "@/stores/user";

export default {
  name: "App",
  setup() {
    const store = useUserStore();

    return {
      store,
    };
  },

  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => (v && v.length >= 8) || "Password must be more than 8 character",
      ],
      has_minimum_lenth: false,
      has_number: false,
      has_lowercsae: false,
      has_uppercase: false,
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
    validate() {
      this.$refs.form.validate();
    },
    login() {
      this.validate();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.store.setUserEmail(this.email);
          this.$router.replace({
            name: "dashboard",
            params: { email: this.email },
          });
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
    register() {
      this.validate();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.store.setUserEmail(this.email);
          this.$router.replace({
            name: "dashboard",
            params: { email: this.email },
          });
          this.registerMode = false;
          this.errorMessage = "";
          this.$refs.form.reset();
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
  },
  computed: {
    toggleMessage: function () {
      return this.registerMode
        ? this.stateObj.register.message
        : this.stateObj.login.message;
    },
  },
  components: {
    RegisterForm,
  },
};
</script>
