import type { DataTableColumn } from "../DataTable.types";
/**
 * Calcula a largura ideal de cada coluna baseado no conteúdo,
 * respeitando a largura mínima definida em cada `DataTableColumn`.
 *
 * A medição é feita via DOM (span temporário) para garantir precisão
 * com diferentes fontes e conteúdos.
 */
export declare function useColumnWidths(columns: DataTableColumn[], data: Record<string, unknown>[]): number[];
