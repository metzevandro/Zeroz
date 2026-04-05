/**
 * Represents a single step in the breadcrumb navigation trail.
 */
export interface BreadcrumbItem {
  /**
   * The human-readable label displayed for this breadcrumb step.
   * Should match the `<title>` or heading of the target page.
   *
   * @example "Products", "Laptops", "MacBook Pro"
   */
  pageName: string;

  /**
   * The URL this breadcrumb step links to.
   * The last item in the `items` array does not render a link —
   * its `href` is retained for data consistency but not used for navigation.
   *
   * @example "/products", "/products/laptops"
   */
  href: string;
}

export interface BreadcrumbProps {
  /**
   * Ordered list of pages representing the navigation trail,
   * from the root (first) to the current page (last).
   *
   * - All items except the last are rendered as navigable links
   * - The last item is rendered as plain text with `aria-current="page"`
   *
   * @minimum 1 item
   *
   * @example
   * [
   *   { pageName: "Home", href: "/" },
   *   { pageName: "Products", href: "/products" },
   *   { pageName: "Laptops", href: "/products/laptops" },
   * ]
   */
  items: BreadcrumbItem[];
}
