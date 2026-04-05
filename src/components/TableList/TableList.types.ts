import React from "react";
export type TableListSize = "sm" | "md";

export interface TableListProps {
  /**
   * Column header labels rendered in the top row.
   * The number of columns must match the length of each row in `data`.
   */
  columns: string[];

  /**
   * Row data as a 2D array.
   * Each inner array represents one row; each element maps to the column
   * at the same index.
   *
   * Accepts `React.ReactNode` per cell so you can render icons, badges,
   * or any custom content alongside plain text.
   *
   * @example
   * ```tsx
   * data={[
   *   ["Alice", "Engineer", <Tag content="Active" variant="success" />],
   *   ["Bob",   "Designer", <Tag content="Away"   variant="warning" />],
   * ]}
   * ```
   */
  data: React.ReactNode[][];

  /**
   * Controls the density (padding) of each table cell.
   *
   * - `"sm"` — compact, suitable for dense data views
   * - `"md"` — comfortable, suitable for general use
   */
  size: TableListSize;
}
