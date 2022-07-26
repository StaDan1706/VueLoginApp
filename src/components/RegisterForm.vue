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
import { confirmPasswordRules } from "@/validationRules";
export default {
  name: "RegisterForm",
  props: ["password"],
  data() {
    return {
      confirmPassword: "",
      confirmPasswordRules,
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
