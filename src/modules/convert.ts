import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import type * as Mdast from 'mdast';
import type * as Hast from 'hast';
import type { Processor } from 'unified';

export type Proc = Processor<
  Mdast.Root,
  Mdast.Root,
  Hast.Root,
  Hast.Root,
  string
>;

const rehypeKatex = (await import('rehype-katex')).default;

export const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeSanitize)
  .use(rehypeKatex)
  .use(rehypeStringify)
  .freeze();
