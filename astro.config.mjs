import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://allnepalmovers.com.np",
  output: "static",

  integrations: [
    tailwind(),
    sitemap(),
    icon({
      iconDir: "src/icons",
    }),

    partytown({
      config: {
        debug: false,
      },
    }),
    playformCompress(),
  ],
});
