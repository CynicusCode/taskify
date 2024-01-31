module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Added to cover both browser and Node.js environments
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "next", // Assuming usage of Next.js-specific linting configurations
    "prettier", // Ensure Prettier compatibility
  ],
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "prettier", // Added Prettier plugin
  ],
  rules: {
    "prettier/prettier": "error", // Enforce Prettier formatting as ESLint errors
    "react/react-in-jsx-scope": "off", // Disable the rule requiring React to be in scope
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
