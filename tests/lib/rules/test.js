const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/test");

const dictionary = {
  메세지: "메시지",
  Loplat: "loplat",
  "loplat x": "loplat X",
  "loplat I": "loplat i",
};

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, sourceType: "module" },
});

ruleTester.run("spellcheck", rule, {
  valid: Object.values(dictionary).map((correct) => ({
    code: `console.log('${correct}')`,
  })),
  invalid: Object.entries(dictionary).map(([wrong, correct]) => ({
    code: `console.log('${wrong}')`,
    output: `console.log('${correct}')`,
    errors: [{ message: `'${correct}'가 맞는 표현입니다.`, type: "Literal" }],
  })),
});
