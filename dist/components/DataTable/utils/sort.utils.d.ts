import type { SortDirection } from "../DataTable.types";
/**
 * Retorna o nome do ícone correspondente ao estado de ordenação.
 */
export declare function getSortIcon(direction: SortDirection): string;
/**
 * Retorna o próximo estado de ordenação no ciclo: default → asc → desc → default.
 */
export declare function nextSortDirection(current: SortDirection): SortDirection;
