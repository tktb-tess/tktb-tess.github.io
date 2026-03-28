import type { PhrasingContent, Table } from 'mdast';
import type { Element, ElementContent, Text } from 'hast';
import type { TextDirective } from 'mdast-util-directive';
import type { Handler } from 'mdast-util-to-hast';
import { toHast } from 'mdast-util-to-hast';

const emptyText: Text = {
  type: 'text',
  value: '',
};

const ipaRender = (mdNode: TextDirective): Element => ({
  type: 'element',
  tagName: 'span',
  properties: {
    class: ['font-ipa'],
  },
  children: mdNode.children.map(phrasingToHast),
});

const _textDirectiveHandler = (node: TextDirective) => {
  if (node.name === 'ipa') {
    return ipaRender(node);
  } else {
    const hast = toHast(node, { allowDangerousHtml: true });
    if (hast.type === 'root' || hast.type === 'doctype') {
      return emptyText;
    } else if (hast.type === 'element' && hast.tagName === 'script') {
      return emptyText;
    } else {
      return hast;
    }
  }
};

const phrasingToHast = (mdNode: PhrasingContent): ElementContent => {
  if (mdNode.type === 'textDirective') {
    return _textDirectiveHandler(mdNode);
  } else {
    const hast = toHast(mdNode, { allowDangerousHtml: true });

    if (hast.type === 'root' || hast.type === 'doctype') {
      return emptyText;
    } else if (hast.type === 'element' && hast.tagName === 'script') {
      return emptyText;
    } else {
      return hast;
    }
  }
};

export const textDirectiveHandler: Handler = (_, node: TextDirective) => {
  return _textDirectiveHandler(node);
};

export const tableHandler: Handler = (_, node: Table) => {
  const [head, ...body] = node.children;
  const ths = head?.children.map(
    (th): Element => ({
      type: 'element',
      tagName: 'th',
      properties: {},
      children: th.children.map(phrasingToHast),
    }),
  );

  const cond = ths != null && ths.some((th) => th.children.length > 0);

  const thead: Element | null = cond
    ? {
        type: 'element',
        tagName: 'thead',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'tr',
            properties: {},
            children: ths,
          },
        ],
      }
    : null;

  const bodyTrs = body.map(
    (row): Element => ({
      type: 'element',
      tagName: 'tr',
      properties: {},
      children: row.children.map((td) => ({
        type: 'element',
        tagName: 'td',
        properties: {},
        children: td.children.map(phrasingToHast),
      })),
    }),
  );

  const tbody: Element = {
    type: 'element',
    tagName: 'tbody',
    properties: {},
    children: bodyTrs,
  };

  const table: Element = {
    type: 'element',
    tagName: 'table',
    properties: {},
    children: thead ? [thead, tbody] : [tbody],
  };

  return {
    type: 'element',
    tagName: 'div',
    properties: {
      class: ['table-container'],
    },
    children: [table],
  };
};

export const linkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
  </svg>`;
