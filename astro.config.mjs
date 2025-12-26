// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://srjrgames.com', // Replace with actual domain if different
    integrations: [sitemap()],
});
