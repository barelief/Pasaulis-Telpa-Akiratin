import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { i18n } from "astro-i18n-aut/integration";
// https://astro.build/config
const locales = {
  pl: "pl-PL",
  lt: "lt-LT" // Ensure 'lt' is included here
};
export default defineConfig({

  integrations: [
    i18n({
      locales, defaultLocale: 'lt'
    }),
    vue(),
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
  ],
  base: "pta/",
});

