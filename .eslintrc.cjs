module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "react-app/jest", "airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "json-format",
    "simple-import-sort",
    "@typescript-eslint/eslint-plugin",
    "prettier",
  ],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
        printWidth: 80,
        arrowParens: "always",
        endOfLine : "auto",
      },
      {
        usePrettierrc: false,
      },
    ],
    "@typescript-eslint/consistent-type-exports": ["error", {
      "fixMixedExportsWithInlineTypeSpecifier": true
    }],
    "@typescript-eslint/consistent-type-imports": ["error", {
      "prefer": "type-imports",
      "fixStyle": "inline-type-imports"
    }]
  },
  ignorePatterns: [
    "**/dist/**/*",
    ".yarn/**/*",
    ".pnp.cjs",
    ".pnp.loader.mjs",
    ".eslintrc.cjs",
    "tsconfig.json"
  ],
};