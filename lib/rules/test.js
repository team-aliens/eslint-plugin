"use strict";

module.exports = {
  meta: {
    type: "problem",
    fixable: null,
    schema: [],
    messages: {
      isHttpBanned: "'{{ correct }}'가 맞는 표현입니다.",
    },
  },

  create(context) {
    const dictionary = {
      메세지: "메시지",
      Loplat: "loplat",
      "loplat x": "loplat X",
      "loplat I": "loplat i",
    };

    return {
      Literal(node) {
        const text = node.raw;

        Object.entries(dictionary).forEach(([wrong, correct]) => {
          if (text.includes(wrong)) {
            context.report({
              node,
              messageId: "isHttpBanned",
              data: { correct },
              fix: (fixer) =>
                fixer.replaceText(node, text.replace(wrong, correct)), // 올바른 표현으로 교정
            });
          }
        });
      },
    };
  },
};
