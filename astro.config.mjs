// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://voltracker.uk",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), icon()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Iosevka",
        cssVariable: "--font-iosevka",
      },
    ],
  },
});