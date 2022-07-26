const valueRules = [
  (v) =>
    /^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)$/.test(v) ||
    "Should contain only numbers",
];
const nameRules = [(v) => !!v || "Product name is required"];
const emailRules = [
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];
const passwordRules = [
  (v) => (v && v.length >= 8) || "Password must be more than 8 character",
];
const confirmPasswordRules = [(v) => !!v || "Password is required"];
const dataValueRegex = /^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)$/

export {
    valueRules,
    nameRules,
    emailRules,
    passwordRules,
    confirmPasswordRules,
    dataValueRegex
}
