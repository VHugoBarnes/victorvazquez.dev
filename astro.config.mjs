import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    expressiveCode({
      themes: ["dracula-soft"],
      styleOverrides: {
        frames: {
          tooltipSuccessBackground: "#6366f1",
        }
      }
    }),
    mdx({

    }),
  ]
});