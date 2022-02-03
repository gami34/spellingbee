module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "no-unused-vars": 0,
    "prettier/prettier": [
      0,
      {
        endOfLine: "lf",
      },
    ],
    "react/prop-types": "off",
  },
};
