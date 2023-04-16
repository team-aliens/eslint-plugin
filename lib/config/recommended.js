module.exports = {
  extends: require.resolve("./base.js"),

  rules: {
    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    "no-duplicate-imports": 0, //중복 모듈 가져오기 금지
    // https://eslint.org/docs/latest/rules/no-unused-vars
    "no-unused-vars": ["warn", { vars: "all", args: "all", ignoreRestSiblings: true }], //사용하지 않는 변수 허용하지 않음
    // https://eslint.org/docs/latest/rules/arrow-body-style
    "arrow-body-style": ["error", "as-needed"], //화살표 함수 본문 주위에 중괄호 필요 여부에 따라 결정
    // https://eslint.org/docs/latest/rules/block-scoped-var
    "block-scoped-var": 0, //정의된 범위 내에서 변수 사용 강제
    // https://eslint.org/docs/latest/rules/func-style
    "func-style": ["error", "expression"], //화살표 함수 필수
    // https://eslint.org/docs/latest/rules/no-empty
    "no-empty": ["error", { allowEmptyCatch: true }], //빈 블록 문을 허용하지 않음
    // https://eslint.org/docs/latest/rules/require-await
    "require-await": 0, //await표현식이 없는 비동기 함수를 허용하지 않음
    // https://eslint.org/docs/latest/rules/max-depth
    "max-depth": ["error", 3], //블록 중첩 최대 3번까지
  },
};
