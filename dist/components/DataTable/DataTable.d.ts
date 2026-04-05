import React from "react";
import type { DataTableProps } from "./DataTable.types";
import "./DataTable.scss";
/**
 * ## DataTable
 *
 * Tabela de dados com paginação, seleção de linhas e suporte a busca
 * e ordenação **server-side**.
 *
 * ### Estados de carregamento
 *
 * O componente distingue dois estados:
 *
 * - **`skeleton={true}` + `data=[]`** — primeiro carregamento, sem dados.
 *   Exibe linhas skeleton no lugar do conteúdo.
 *
 * - **`skeleton={true}` + `data=[...dadosAnteriores]`** — atualização após
 *   busca ou sort. Os dados anteriores permanecem visíveis com opacidade
 *   reduzida até a resposta chegar, evitando flicker.
 */
declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
