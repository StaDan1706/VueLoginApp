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
                  v-if="registerMode"
                  :password="password"
                  :email="email"
                />

                <div class="red--text">{{ store.errorMessage }}</div>

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
import RegisterForm from "@/components/RegisterForm.vue";
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
      registerMode: false,
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
      this.store.login(this.email, this.password);
    },
    register() {
      this.validate();
      this.store.register(this.email, this.password);
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
