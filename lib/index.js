/**
 * @fileoverview aliens eslint style guide
 * @author 05lazy
 */
"use strict";

const requireIndex = require("requireindex");
const { resolve } = require("path");

const rules = requireIndex(resolve(__dirname, "rules"));
const configs = requireIndex(resolve(__dirname, "config"));

module.exports = {
  rules,
  configs,
};
