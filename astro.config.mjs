import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import playformCompress from "@playform/compress";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://allnepalmovers.com.np",
  output: "static",

  integrations: [
    mdx(),
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
