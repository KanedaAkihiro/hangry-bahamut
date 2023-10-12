module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "plugin:prettier/recommended", // 追加
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  plugins: [
    "vue",
    "prettier", // 追加
  ],
  rules: {]
     "prettier/prettier": "error", // 追加
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
