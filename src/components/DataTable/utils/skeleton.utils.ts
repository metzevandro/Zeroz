/**
 * Gera linhas de dados fictícios para o estado de skeleton.
 * Os valores são strings aleatórias apenas para preencher as células.
 */
export function generateSkeletonRows(
  count: number,
  columnKeys: string[],
): Record<string, unknown>[] {
  return Array.from({ length: count }, (_, rowIndex) => ({
    id: `skeleton-${rowIndex}`,
    ...Object.fromEntries(
      columnKeys.map((key) => [
        key,
        Math.random().toString(36).substring(2, 8),
      ]),
    ),
  }));
}
