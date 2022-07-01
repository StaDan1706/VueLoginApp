<template>
  <v-text-field
    v-model="confirmPassword"
    name="confirmPassword"
    label="Confirm Password"
    type="password"
    placeholder="cocnfirm password"
    :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
  >
  </v-text-field>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";


export default {
  name: "RegisterForm",
  props: ["password", "email"],
  data() {
    return {
      confirmPassword: "",
      confirmPasswordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    register() {
      this.validate();
      createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
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
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
};
</script>
