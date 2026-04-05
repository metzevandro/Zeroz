import React from "react";

/**
 * Transposes a row-major 2D array into a column-major one.
 *
 * The original data format is rows × columns (each row = one entry).
 * The table renders column-by-column, so we transpose to columns × rows
 * so each column div gets all its cells in order.
 *
 * @example
 * Input (rows):    [["Alice", "Eng"], ["Bob", "Design"]]
 * Output (cols):   [["Alice", "Bob"], ["Eng", "Design"]]
 */
export function transposeData(
  columns: string[],
  data: React.ReactNode[][],
): React.ReactNode[][] {
  return columns.map((_, colIndex) => data.map((row) => row[colIndex]));
}
