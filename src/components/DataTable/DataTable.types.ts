import React from "react";

export type SortDirection = "asc" | "desc" | "default";

export interface SortState {
  /** Índice da coluna sendo ordenada. */
  columnIndex: number;
  /** Direção da ordenação. */
  direction: SortDirection;
}

export interface DataTableColumn {
  /** Chave que mapeia para o campo no objeto de dados. */
  key: string;
  /** Texto exibido no cabeçalho. */
  label: string;
  /** Largura mínima em pixels. @default 0 */
  minWidth?: number;
}

export interface DataTableProps {
  /**
   * Definição das colunas da tabela.
   * Cada coluna mapeia `key` para os campos dos objetos em `data`.
   */
  columns: DataTableColumn[];

  /**
   * Dados a serem exibidos. Cada objeto deve ter campos
   * correspondentes às `key`s definidas em `columns`.
   */
  data: Record<string, unknown>[];

  /** Exibe estado de skeleton enquanto os dados estão carregando. */
  skeleton: boolean;

  /** Número de linhas exibidas por página. @default 4 */
  rowsPerPage?: number;

  /** Exibe checkboxes para seleção de linhas. @default false */
  withCheckbox?: boolean;

  /**
   * Callback disparado quando o valor do campo de busca muda.
   * A filtragem deve ser feita externamente (ex: via API).
   */
  onSearch?: (query: string) => void;

  /**
   * Callback disparado ao clicar no header de uma coluna para ordenar.
   * A ordenação deve ser aplicada externamente (ex: via API).
   */
  onSort?: (sort: SortState) => void;

  /** Ações exibidas no header quando há linhas selecionadas. */
  headerSelectedChildren?: React.ReactNode;

  /** Sufixo do contador de linhas selecionadas. Ex: "itens selecionados". */
  textRowsSelected?: string;

  /** Callback disparado quando a seleção de linhas muda. */
  onSelectedRowsChange?: (selectedRowIds: string[]) => void;

  /**
   * Exposição da função de atualização manual da seleção.
   * Útil para selecionar/deselecionar linhas externamente.
   *
   * @example
   * <DataTable
   *   onUpdateSelectedRows={(updater) => { externalUpdaterRef.current = updater; }}
   * />
   * // Depois: externalUpdaterRef.current(["id1", "id2"])
   */
  onUpdateSelectedRows?: (updater: (ids: string[]) => void) => void;
}
