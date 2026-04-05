import { jsx, jsxs } from 'react/jsx-runtime';
import { L as Link } from './Link-CEdlCzxX.js';
import { I as Icon } from './Icon-93G3RH-i.js';

/**
 * Returns `true` if the given index corresponds to the last item
 * in the breadcrumb trail (i.e. the current page).
 *
 * @param index - Index of the current item
 * @param total - Total number of items in the breadcrumb list
 *
 * @example
 * isCurrentPage(2, 3) // true  → index 2 is the last of 3
 * isCurrentPage(1, 3) // false → index 1 is not the last
 */
const isCurrentPage = (index, total) => index === total - 1;
/**
 * Returns `true` if a separator icon should be rendered after the given item.
 * Separators appear between items, never after the last one.
 *
 * @param index - Index of the current item
 * @param total - Total number of items in the breadcrumb list
 *
 * @example
 * shouldShowSeparator(0, 3) // true  → separator after first item
 * shouldShowSeparator(2, 3) // false → no separator after last item
 */
const shouldShowSeparator = (index, total) => index < total - 1;

/**
 * ## Breadcrumb
 *
 * Displays a horizontal navigation trail showing the user's current
 * location within the application's hierarchy.
 *
 * ### Rendering rules
 * - All items except the last are rendered as navigable `<Link>` elements
 * - The last item represents the current page — rendered as plain text
 *   with `aria-current="page"` (no link, no navigation)
 * - A chevron separator (`keyboard_arrow_right`) appears between items
 * - Hidden on mobile viewports via CSS (`max-width: 768px`)
 *
 * ### Accessibility
 * - Wrapped in `<nav aria-label="Breadcrumb">` for landmark navigation
 * - Uses `<ol>` (ordered list) — correct semantic element for sequential steps
 * - Last item carries `aria-current="page"` per WCAG 2.1 SC 2.4.8
 *
 * ### Recommended use cases
 * - Multi-level page hierarchies (e.g. e-commerce categories, dashboards)
 * - Settings or configuration flows with nested sections
 * - CMS or documentation sites with deep page trees
 *
 * ### Best practices
 * - Always include the root page (e.g. "Home") as the first item
 * - Keep `pageName` values short — breadcrumbs are a secondary navigation aid
 * - Do not use for flat or single-level navigation structures
 * - Provide at least 2 items; a single-item breadcrumb has no navigational value
 *
 * @example
 * <Breadcrumb
 *   items={[
 *     { pageName: "Home", href: "/" },
 *     { pageName: "Products", href: "/products" },
 *     { pageName: "Laptops", href: "/products/laptops" },
 *   ]}
 * />
 */
const Breadcrumb = ({ items }) => (jsx("nav", { "aria-label": "Breadcrumb", children: jsx("ol", { className: "breadcrumb", children: items.map((item, index) => (jsxs("li", { children: [isCurrentPage(index, items.length) ? (jsx(Link, { "aria-current": "page", children: item.pageName })) : (jsx(Link, { href: item.href, children: item.pageName })), shouldShowSeparator(index, items.length) && (jsx(Icon, { icon: "keyboard_arrow_right", size: "sm" }))] }, item.href))) }) }));
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb as B };
