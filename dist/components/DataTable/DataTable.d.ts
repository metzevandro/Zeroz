import React from "react";
import type { DataTableProps } from "./DataTable.types";
import "./DataTable.scss";
/**
 * ## DataTable
 *
 * Tabela de dados com paginação, seleção de linhas e suporte a busca
 * e ordenação **server-side**.
 *
 * ### Paginação
 *
 * - **Client-side (padrão)** — `data` contém o dataset completo já
 *   filtrado/ordenado; o componente pagina localmente (com carregamento
 *   progressivo). Não passe `page`/`totalItems`/`onPageChange`.
 * - **Controlada / via API** — passe `page`, `totalItems` e
 *   `onPageChange` juntos. Nesse modo `data` deve conter **apenas os
 *   itens da página atual**, e a navegação delega para `onPageChange`.
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
