// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gradatim.com.br",
  integrations: [sitemap()],
  // CSS dentro do HTML: a página já chega estilizada, sem esperar outro arquivo.
  // O CSS do site é pequeno (~5 KB comprimido por página), então compensa.
  build: { inlineStylesheets: "always" },
});
