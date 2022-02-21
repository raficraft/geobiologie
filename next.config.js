module.exports = {
  reactStrictMode: true,

  extends: "next",
  rules: {
    "react/no-unescaped-entities": ["error", { forbid: [">", "}", "'"] }],
    // or
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [
          {
            char: ">",
            alternatives: ["&gt;"],
          },
          {
            char: "}",
            alternatives: ["&#125;"],
          },
          {
            char: "'",
            alternatives: ["&rsquo;"],
          },
        ],
      },
    ],
  },
};
