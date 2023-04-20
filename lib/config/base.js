const rules = require("../recommended");

module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",

  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended"],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },

  env: {
    browser: true,
  },

  plugins: ["aliens", "@typescript-eslint"],

  rules,
};
