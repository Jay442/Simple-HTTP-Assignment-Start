import js from "@eslint/js";
import globals from "globals";

export default ([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
]);
