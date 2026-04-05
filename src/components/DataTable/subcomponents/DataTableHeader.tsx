import React, { useRef } from "react";
import InputSearch from "../../InputSearch/InputSearch";

interface DataTableHeaderProps {
  skeleton: boolean;
  onSearch: (query: string) => void;
  rowsSelected: number;
  textRowsSelected?: string;
  children?: React.ReactNode;
}

/**
 * Header da DataTable.
 * Alterna entre a barra de busca (estado padrão)
 * e o painel de ações em bulk (quando há linhas selecionadas).
 *
 * Usa `onDebouncedChange` para capturar o valor atual sem flooding,
 * mas só dispara `onSearch` ao pressionar Enter.
 * Se o campo for limpo, dispara imediatamente com string vazia.
 */
export const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  skeleton,
  onSearch,
  rowsSelected = 0,
  textRowsSelected,
  children,
}) => {
  const hasSelection = rowsSelected > 0;
  const selectionLabel = `${rowsSelected} ${textRowsSelected ?? ""}`.trim();

  const inputValueRef = useRef<string>("");

  const handleDebouncedChange = (value: string) => {
    inputValueRef.current = value;
    if (value === "") onSearch("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(inputValueRef.current);
    }
  };

  return (
    <>
      <div
        className={`data-table-header-rows-selected ${hasSelection ? "fade-in" : "fade-out"}`}
        style={{
          visibility: hasSelection ? "visible" : "hidden",
          display: hasSelection ? "" : "none",
        }}
      >
        <p
          key={selectionLabel}
          className="textRowsSelected"
          style={{ height: "40px", alignItems: "center", display: "flex" }}
        >
          {selectionLabel}
        </p>
        <div className="data-table-header-rows-selected-buttons">
          {children}
        </div>
      </div>

      <div
        className={`data-table-header ${hasSelection ? "fade-out" : "fade-in"}`}
        style={{
          visibility: hasSelection ? "hidden" : "visible",
          display: hasSelection ? "none" : "",
        }}
      >
        <InputSearch
          placeholder="Procurar"
          disabled={skeleton}
          onDebouncedChange={handleDebouncedChange}
          debounceMs={0}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};
