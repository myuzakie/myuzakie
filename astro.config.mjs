import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jordiespinosa.com',
  compressHTML: true,
  integrations: [tailwind({ configFile: './tailwind.config.mjs' })],
});
