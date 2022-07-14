module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier", "jest"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
  },
};
