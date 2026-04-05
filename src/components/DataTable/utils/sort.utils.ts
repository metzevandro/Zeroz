import type { SortDirection } from "../DataTable.types";

/**
 * Retorna o nome do ícone correspondente ao estado de ordenação.
 */
export function getSortIcon(direction: SortDirection): string {
  const iconMap: Record<SortDirection, string> = {
    asc: "arrow_downward",
    desc: "arrow_upward",
    default: "swap_vert",
  };
  return iconMap[direction];
}

/**
 * Retorna o próximo estado de ordenação no ciclo: default → asc → desc → default.
 */
export function nextSortDirection(current: SortDirection): SortDirection {
  const cycle: SortDirection[] = ["default", "asc", "desc"];
  const next = (cycle.indexOf(current) + 1) % cycle.length;
  return cycle[next];
}
