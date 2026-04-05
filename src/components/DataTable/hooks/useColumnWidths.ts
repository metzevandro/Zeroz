import { useMemo, useCallback } from "react";
import type { DataTableColumn } from "../DataTable.types";

/**
 * Calcula a largura ideal de cada coluna baseado no conteúdo,
 * respeitando a largura mínima definida em cada `DataTableColumn`.
 *
 * A medição é feita via DOM (span temporário) para garantir precisão
 * com diferentes fontes e conteúdos.
 */
export function useColumnWidths(
  columns: DataTableColumn[],
  data: Record<string, unknown>[],
): number[] {
  const measureTextWidth = useCallback((text: string): number => {
    const span = document.createElement("span");
    span.textContent = text;
    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    return width;
  }, []);

  return useMemo(() => {
    return columns.map((column) => {
      const allCellValues = data.map((row) => String(row[column.key] ?? ""));
      const headerWidth = measureTextWidth(column.label);
      const maxCellWidth = Math.max(0, ...allCellValues.map(measureTextWidth));
      const calculated = Math.max(headerWidth, maxCellWidth) + 50;
      return Math.max(calculated, column.minWidth ?? 0);
    });
  }, [columns, data, measureTextWidth]);
}
