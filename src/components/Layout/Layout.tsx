import React from "react";
import "./Layout.scss";

// ─── Types ────────────────────────────────────────────────────────────────────

export type LayoutColumns =
  | "1"
  | "2 - Symmetric"
  | "2 - Asymmetric"
  | "3 - Symmetric";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Defines the column layout variant.
   * Each variant maps children to col-X classes in a 12-column flex grid.
   *
   * | Variant          | Children mapping         |
   * |------------------|--------------------------|
   * | "1"              | col-12 (100%)            |
   * | "2 - Symmetric"  | col-6 + col-6 (50/50)    |
   * | "2 - Asymmetric" | col-8 + col-4 (66%/33%)  |
   * | "3 - Symmetric"  | col-4 + col-4 + col-4    |
   */
  columns: LayoutColumns;
  children: React.ReactNode;
}

// ─── Constants ────────────────────────────────────────────────────────────────

/**
 * Maps each layout variant to the ordered list of col-X classes
 * that will be applied to each child slot, based on a 12-column grid.
 */
const COLUMN_SLOT_CLASSES: Record<LayoutColumns, string[]> = {
  "1": ["col-12"],
  "2 - Symmetric": ["col-6", "col-6"],
  "2 - Asymmetric": ["col-8", "col-4"],
  "3 - Symmetric": ["col-4", "col-4", "col-4"],
};

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * `Layout` is a row container in a 12-column flexbox grid system.
 *
 * It wraps each child in a `div` with the appropriate `col-X` class,
 * controlling width proportionally. On screens ≤ 768px all columns
 * collapse to full width automatically.
 *
 * Stack multiple `<Layout>` components vertically to create row breaks.
 *
 * @example
 * // Two equal columns
 * <Layout columns="2 - Symmetric">
 *   <Card />
 *   <Card />
 * </Layout>
 *
 * // Multiple rows
 * <Layout columns="3 - Symmetric">
 *   <Widget />
 *   <Widget />
 *   <Widget />
 * </Layout>
 */
const Layout: React.FC<LayoutProps> = ({ children, columns, ...rest }) => {
  const slotClasses = COLUMN_SLOT_CLASSES[columns];

  const wrappedChildren = React.Children.map(children, (child, index) => {
    const colClass = slotClasses[index] ?? slotClasses[slotClasses.length - 1];

    return <div className={colClass}>{child}</div>;
  });

  return (
    <div {...rest} className="layout">
      {wrappedChildren}
    </div>
  );
};

Layout.displayName = "Layout";

export default Layout;
