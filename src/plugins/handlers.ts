import type * as Mdast from 'mdast';
import type * as Hast from 'hast';
import type { TextDirective } from 'mdast-util-directive';
import type { Handler } from 'mdast-util-to-hast';
import { toHast } from 'mdast-util-to-hast';
import { h } from 'hastscript';

const emptyText: Hast.Text = {
  type: 'text',
  value: '',
};

const safeToHast = (tree: Mdast.Nodes) => {
  const hast = toHast(tree, { allowDangerousHtml: true });
  if (hast.type === 'root' || hast.type === 'doctype') {
    return emptyText;
  }
  if (hast.type === 'element' && hast.tagName === 'script') {
    return emptyText;
  }
  return hast;
};

const _textDirectiveHandler = (node: TextDirective) => {
  if (node.name === 'ipa') {
    return h('span.font-ipa', node.children.map(phrasingToHast));
  } else {
    return safeToHast(node);
  }
};

const phrasingToHast = (mdNode: Mdast.PhrasingContent): Hast.ElementContent => {
  if (mdNode.type === 'textDirective') {
    return _textDirectiveHandler(mdNode);
  } else {
    return safeToHast(mdNode);
  }
};

export const textDirectiveHandler: Handler = (_, node: TextDirective) => {
  return _textDirectiveHandler(node);
};

const tableCellHandler = (tc: Mdast.TableCell, tag: 'td' | 'th') => {
  if (tc.children.length !== 1) {
    return h(tag, tc.children.map(phrasingToHast));
  }

  const ph = tc.children[0];

  if (!ph) {
    return h(tag, tc.children.map(phrasingToHast));
  }

  if (ph.type !== 'textDirective') {
    return h(tag, tc.children.map(phrasingToHast));
  }

  if (ph.name === 's') {
    const parse = (v: string | null | undefined) => {
      const n = Number.parseInt(v ?? '1');
      return Number.isFinite(n) && n >= 0 ? n : 1;
    };

    const row = parse(ph.attributes?.r);
    const col = parse(ph.attributes?.c);

    if (row === 0 || col === 0) {
      return null;
    }

    return h(
      tag,
      { rowspan: row, colspan: col },
      ph.children.map(phrasingToHast),
    );
  }

  if (ph.name === 'e') {
    return null;
  }

  return h(tag, tc.children.map(phrasingToHast));
};

export const tableHandler: Handler = (_, node: Mdast.Table) => {
  const [head, ...body] = node.children;

  if (head == null) {
    throw TypeError('`head` is undefined');
  }

  const ths = head.children
    .map((th) => tableCellHandler(th, 'th'))
    .filter((e) => e != null);

  const cond = ths.some((th) => th.children.length > 0);

  const thead: Hast.Element | null = cond ? h('thead', [h('tr', ths)]) : null;

  const bodyTrs = body.map((row): Hast.Element => {
    const children = row.children
      .map((td) => tableCellHandler(td, 'td'))
      .filter((e) => e != null);

    return h('tr', children);
  });

  const tbody: Hast.Element = h('tbody', bodyTrs);
  const table: Hast.Element = h('table', thead ? [thead, tbody] : [tbody]);

  return h('div.table-container', [table]);
};

export const linkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
  </svg>`;
