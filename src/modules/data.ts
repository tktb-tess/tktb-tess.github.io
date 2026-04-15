export interface PageData {
  readonly title: string;
  readonly description?: string;
}

export const pageData: ReadonlyMap<string, PageData> = new Map([
  ['/notepad/', { title: 'Notepad', description: 'メモ帳。' }],
  ['/xprmnt/', { title: 'Experiment' }],
]);
