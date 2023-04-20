module.exports = {
  extends: require.resolve("./base.js"),

  rules: {
    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    "no-duplicate-imports": "error", //중복 모듈 가져오기 금지
    // https://eslint.org/docs/latest/rules/no-unused-vars
    "no-unused-vars": ["warn", { vars: "all", args: "all", ignoreRestSiblings: true }], //사용하지 않는 변수 허용하지 않음
    // https://eslint.org/docs/latest/rules/arrow-body-style
    "arrow-body-style": ["error", "as-needed"], //화살표 함수 본문 주위에 중괄호 필요 여부에 따라 결정
    // https://eslint.org/docs/latest/rules/block-scoped-var
    "block-scoped-var": "error", //정의된 범위 내에서 변수 사용 강제
    // https://eslint.org/docs/latest/rules/func-style
    "func-style": ["error", "expression"], //화살표 함수 필수
    // https://eslint.org/docs/latest/rules/no-empty
    "no-empty": ["error", { allowEmptyCatch: true }], //빈 블록 문을 허용하지 않음
    // https://eslint.org/docs/latest/rules/require-await
    "require-await": "off", //await표현식이 없는 비동기 함수를 허용하지 않음
    // https://eslint.org/docs/latest/rules/max-depth
    "max-depth": ["error", { max: 3 }], //블록 중첩 최대 3번까지
    // https://typescript-eslint.io/rules/array-type
    "array-type": "array-simple", //간단한 배열 타입 명시는 []로 union, object, function등이 들어가는 경우 Array<T>로 명시
    // https://typescript-eslint.io/rules/naming-convention
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["variable", "function"],
        format: ["camelCase"],
      },
      {
        selector: ["parameter"],
        format: ["snake_case"],
      },
      {
        selector: ["interface", "class", "typeAlias"],
        format: ["PascalCase"],
      },
    ], // 네이밍 규칙
    // https://typescript-eslint.io/rules/consistent-indexed-object-style
    "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"], //색인 서명만 허용
    // https://typescript-eslint.io/rules/consistent-type-imports
    "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }], //형식 가져오기의 일관된 사용을 적용
    // https://typescript-eslint.io/rules/explicit-function-return-type
    "@typescript-eslint/explicit-function-return-type": "error", //반환 유형이 필요
    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    "@typescript-eslint/explicit-module-boundary-types": "error", //인수 유형이 필요
    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    "@typescript-eslint/no-confusing-non-null-assertion": "error", //혼동을 줄 수 있는 위치에서 null이 아닌 어설션을 허용하지 않음
    // https://typescript-eslint.io/rules/no-duplicate-type-constituents
    "@typescript-eslint/no-duplicate-type-constituents": "error", //중복 타입 구성 요소를 허용하지 않음
    // https://typescript-eslint.io/rules/no-unsafe-return
    "@typescript-eslint/no-unsafe-return": "error", //안전한 타입 반환
    // https://typescript-eslint.io/rules/no-useless-empty-export
    "@typescript-eslint/no-useless-empty-export": "error", //빈내보내기 금지
    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
    "@typescript-eslint/non-nullable-type-assertion-style": "error", //명시적 형식 캐스트에 대해 null이 아닌 어설션을 적용
    // https://typescript-eslint.io/rules/no-implied-eval
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error", //eval()-like 메서드 의 사용을 금지
    // https://typescript-eslint.io/rules/no-redeclare
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error", //변수 재선언 금지
  },
};
