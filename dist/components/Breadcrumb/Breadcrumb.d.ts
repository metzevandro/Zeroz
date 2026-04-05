import React from "react";
import type { BreadcrumbProps } from "./Breadcrumb.types";
import "./Breadcrumb.scss";
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
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
