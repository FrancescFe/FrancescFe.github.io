import js from "@eslint/js";

export default [
  {
    ignores: [".astro/**", "dist/**", "node_modules/**"],
  },
  js.configs.recommended,
];
