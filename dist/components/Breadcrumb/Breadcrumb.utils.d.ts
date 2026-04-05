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
export declare const isCurrentPage: (index: number, total: number) => boolean;
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
export declare const shouldShowSeparator: (index: number, total: number) => boolean;
