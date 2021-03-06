module.exports = {
  printWidth: 250,
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  arrowParens: "always",
  overrides: [
    {
      files: "*.{js,jsx,tsx,ts,scss,json,html,svg}",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
