/** @type {import('lint-staged').Config} */
module.exports = {
  // Sort package.json keys
  "package.json": "sort-package-json",
  // Lint & prettify TS and JS files
  "**/*.(ts|tsx|js)": (filenames) => [
    `eslint --quiet --fix ${filenames.join(" ")}`,
    `prettier --ignore-unknown --write ${filenames.join(" ")}`,
  ],
  // Prettify CSS, Markdown, and JSON files
  "**/*.(css|md|json)": (filenames) =>
    `prettier --ignore-unknown --write ${filenames.join(" ")}`,
};
