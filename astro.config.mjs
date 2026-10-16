import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.beaumontfence.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  compressHTML: true,
});
