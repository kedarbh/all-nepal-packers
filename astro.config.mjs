import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://allnepalmovers.com.np",
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      iconDir: "src/icons",
    }),
  ],
});
