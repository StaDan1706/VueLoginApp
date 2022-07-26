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
export default {
  name: "RegisterForm",
  props: ["password", "email"],
  data() {
    return {
      confirmPassword: "",
      confirmPasswordRules: [(v) => !!v || "Password is required"],
    };
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
};
</script>
