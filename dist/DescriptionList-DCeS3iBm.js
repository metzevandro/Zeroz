import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

/**
 * Returns the inline style for a list item's bottom divider.
 * Only applied to items that are not the last in the list.
 */
function getDividerStyle(hasDivider) {
    if (!hasDivider)
        return undefined;
    return {
        borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
    };
}

/**
 * Renders a single label/value row within a `DescriptionList`.
 * Applies a bottom divider when `hasDivider` is true.
 */
function DescriptionListItem({ title, description, direction, hasDivider, }) {
    return (jsxs("div", { className: `description-list-root ${direction}`, style: getDividerStyle(hasDivider), children: [jsx("div", { className: "title", children: title }), jsx("div", { className: "description", children: description })] }));
}

/**
 * `DescriptionList` renders a list of label/value pairs,
 * similar to an HTML `<dl>` (definition list).
 *
 * Items are separated by a hairline divider, except after the last one.
 * The layout of each row is controlled by the `direction` prop.
 *
 * @example
 * ```tsx
 * <DescriptionList
 *   direction="row"
 *   items={[
 *     { title: "Status", description: "Active" },
 *     { title: "Plan", description: "Pro" },
 *     { title: "Renewal", description: "08/15/2025" },
 *   ]}
 * />
 * ```
 */
const DescriptionList = ({ items, direction, }) => {
    const lastIndex = items.length - 1;
    return (jsx(Fragment, { children: items.map((item, index) => (jsx(DescriptionListItem, { title: item.title, description: item.description, direction: direction, hasDivider: index < lastIndex }, `${item.title}-${index}`))) }));
};

export { DescriptionList as D };
