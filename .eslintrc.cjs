const project = "tsconfig.json";

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: { project },
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "@vercel/style-guide/eslint/typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ].map((extend) =>
    !extend.includes("plugin:") ? require.resolve(extend) : extend,
  ),
  settings: {
    "import/resolver": { typescript: { project } },
    /**
     * enable components to be checked
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#configurations}
     */
    "jsx-a11y": {
      polymorphicPropName: "component",
      components: {
        Button: "button",
        Icon: "svg",
        Image: "img",
        Input: "input",
        Link: "a",
        List: "ul",
        ListItem: "li",
        ListDivider: "li",
        NextImage: "img",
        NextLink: "a",
        SvgIcon: "svg",
        Textarea: "textarea",
      },
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-shadow": "off",

    // Such that @/* imports will not be considered as external dependencies
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    // Sort import statements
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      },
    ],

    // Sort named imports within an import statement
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],

    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",

    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: { attributes: false },
      },
    ],
  },
  overrides: [
    // Next.js App Router file convention
    // Must use default export
    {
      files: [
        "src/app/**/page.tsx",
        "src/app/**/layout.tsx",
        "src/app/**/not-found.tsx",
        "src/app/**/*error.tsx",
        "src/app/sitemap.ts",
        "src/app/robots.ts",
      ],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": ["error", { target: "any" }],
      },
    },

    // Module declarations
    {
      files: ["**/*.cjs", "**/*.mjs", "**/*.config.js", "**/*.config.ts"],
      rules: { "import/no-default-export": "off" },
    },
    {
      files: ["**/*.d.ts"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
