import React from "react";
import type { BrandProps } from "./Brand.types";
import "./Brand.scss";

/**
 * ## Brand
 *
 * Displays a brand identity asset (logo) at a controlled, consistent size.
 * Accepts any valid HTML `<img>` attribute via prop spreading, making it
 * flexible for lazy loading, custom styling, event handling, and more.
 *
 * ### Size behavior
 * The `size` prop controls the container height. The image scales
 * proportionally, preserving the logo's original aspect ratio at all sizes.
 *
 * ### SVG logos
 * When an SVG is rendered as an `<img>`, its internal styles are isolated
 * from the page. If you need to control SVG fill colors via CSS, consider
 * rendering the SVG inline instead of using this component.
 *
 * ### Recommended use cases
 * - Application navigation bars and headers
 * - Partner or client logo grids
 * - Login, onboarding, and empty state screens
 * - Footers and about pages
 *
 * ### Best practices
 * - Always provide a meaningful `alt` when the logo is the primary brand
 *   identifier on the page (e.g. `alt="Acme Corp logo"`)
 * - Use `alt=""` for decorative logos already described by surrounding text
 * - Prefer SVG sources for crisp rendering at all sizes and screen densities
 * - Use `size="md"` as the default; reserve `lg` for hero or header placements
 *
 * @example
 * // Standard navigation logo
 * <Brand src="/logo.svg" alt="Acme Corp logo" size="md" />
 *
 * // Decorative logo (described by nearby text)
 * <Brand src="/logo.svg" alt="" size="sm" />
 *
 * // Lazy-loaded large logo
 * <Brand src="/logo.png" alt="Acme Corp logo" size="lg" loading="lazy" />
 */
const Brand: React.FC<BrandProps> = ({ src, alt = "", size, ...rest }) => (
  <div className={`brand-root ${size}`}>
    <img src={src} alt={alt} {...rest} />
  </div>
);

Brand.displayName = "Brand";

export default Brand;
