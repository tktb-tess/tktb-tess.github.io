export interface PageData {
  readonly title: string;
  readonly description?: string;
}

export type PageDataMap = ReadonlyMap<string, PageData>;

const pageDataMap: PageDataMap = new Map([
  ['/xprmnt/', { title: 'Experiment' }],
  ['/memo/math/4n_1_sum_of_sq/', { title: '4n + 1型素数を2平方和に分解' }],
]);

export function getPageData(path: string): PageData {
  return pageDataMap.get(path) ?? { title: '[NODATA]' };
}
