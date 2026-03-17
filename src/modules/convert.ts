import { unified, type Processor } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import type * as Mdast from 'mdast';
import type * as Hast from 'hast';

export type Proc = Processor<
  Mdast.Root,
  Mdast.Root,
  Hast.Root,
  Hast.Root,
  string
>;

let processor: Proc | null = null;

export const getProcessor = async () => {
  if (!processor) {
    const rehypeKatex = (await import('rehype-katex')).default;
    processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .freeze();
  }

  return processor;
};
