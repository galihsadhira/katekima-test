import pluginVue from "eslint-plugin-vue";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVitest from "@vitest/eslint-plugin";
import pluginPrettier from "eslint-plugin-prettier"; // ✅ Prettier plugin
import configPrettier from "eslint-config-prettier"; // ✅ Prettier config

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },

  {
    name: "prettier-integration",
    plugins: {
      prettier: pluginPrettier, // ✅ Add Prettier as a plugin
    },
    rules: {
      "prettier/prettier": "error", // ✅ Ensure Prettier formatting issues show as ESLint errors
    },
  },

  configPrettier // ✅ Disable conflicting ESLint rules
);
