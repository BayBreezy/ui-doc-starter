// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "@typescript-eslint/ban-types": "off",
    "vue/html-self-closing": "off",
  },
});
