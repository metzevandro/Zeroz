import { jsx } from 'react/jsx-runtime';
import React from 'react';

// ─── Constants ────────────────────────────────────────────────────────────────
/**
 * Maps each layout variant to the ordered list of col-X classes
 * that will be applied to each child slot, based on a 12-column grid.
 */
const COLUMN_SLOT_CLASSES = {
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
const Layout = ({ children, columns, ...rest }) => {
    const slotClasses = COLUMN_SLOT_CLASSES[columns];
    const wrappedChildren = React.Children.map(children, (child, index) => {
        const colClass = slotClasses[index] ?? slotClasses[slotClasses.length - 1];
        return jsx("div", { className: colClass, children: child });
    });
    return (jsx("div", { ...rest, className: "layout", children: wrappedChildren }));
};
Layout.displayName = "Layout";

export { Layout as L };
