/**
 * @fileoverview aliens eslint style guide
 * @author 05lazy
 */
"use strict";

const requireIndex = require("requireindex");

const rules = requireIndex(__dirname, "rules");
const configs = requireIndex(__dirname, "config");

module.exports = {
  rules,
  configs,
};
