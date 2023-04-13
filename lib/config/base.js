const rules = require("../recommended");

module.exports = {
  root: true,

  extends: ["airbnb-base"],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },

  env: {
    browser: true,
  },

  plugins: ["aliens"],

  rules,
};
