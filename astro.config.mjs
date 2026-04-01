// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import remarkToc from 'remark-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import * as H from './src/plugins/handlers';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 8000,
  },
  build: {
    inlineStylesheets: 'auto',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
    remarkPlugins: [
      remarkMath,
      remarkDirective,
      [remarkToc, { heading: '目次' }],
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor-link'],
          },
          content: fromHtmlIsomorphic(H.linkSvg, { fragment: true }).children,
        },
      ],
    ],
    remarkRehype: {
      handlers: {
        table: H.tableHandler,
        textDirective: H.tdHandler,
      },
    },
  },
});
