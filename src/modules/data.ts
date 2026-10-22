export interface PageData {
  readonly title: string;
  readonly description?: string;
}

export const pageData: ReadonlyMap<string, PageData> = new Map([
  ['/notepad/', { title: 'Notepad', description: 'メモ帳。' }],
  ['/xprmnt/', { title: 'Experiment' }],
  ['/memo/math/4n_1_sum_of_sq/', { title: '素数を二平方和に分解' }],
]);
