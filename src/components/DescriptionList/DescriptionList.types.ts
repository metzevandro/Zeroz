export interface DescriptionItem {
  /**
   * The label or key displayed on the leading side of the row.
   */
  title: string;

  /**
   * The value or content displayed on the trailing side of the row.
   * Optional — renders an empty cell if omitted.
   */
  description?: string;
}

export interface DescriptionListProps {
  /**
   * Array of label/value pairs to render as a definition list.
   * Each item produces one row with a divider below it,
   * except for the last item.
   */
  items: DescriptionItem[];

  /**
   * Controls the layout direction of each row.
   *
   * - `"row"`    — title and description side by side (horizontal).
   * - `"column"` — title above description (vertical/stacked).
   */
  direction: "row" | "column";
}

export interface DescriptionListItemProps extends DescriptionItem {
  /** When `true`, renders a bottom border below the item. */
  hasDivider: boolean;

  /** Layout direction inherited from the parent list. */
  direction: DescriptionListProps["direction"];
}
