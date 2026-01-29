// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import remarkToc from 'remark-toc';
import { tableHandler, textDirectiveHandler } from './src/plugins/handlers';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 8000,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
    remarkPlugins: [remarkMath, remarkDirective, [remarkToc, { heading: '目次' }]],
    rehypePlugins: [rehypeKatex],
    remarkRehype: {
      handlers: {
        table: tableHandler,
        textDirective: textDirectiveHandler,
      },
    },
  },
});
