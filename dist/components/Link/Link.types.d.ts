import React from "react";
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Destination URL. Passed directly to the native `<a>` `href` attribute.
     */
    href?: string;
    /**
     * When `true`, applies the `disabled` CSS class to visually indicate
     * the link is inactive.
     *
     * Note: native `<a>` elements do not support a `disabled` attribute —
     * consider also preventing navigation via `onClick` when using this prop.
     * @default false
     */
    disabled?: boolean;
    /**
     * Specifies where to open the linked URL.
     * Constrained to valid browsing context values.
     * @default "_self"
     */
    target?: "_blank" | "_self" | "_parent" | "_top";
    /**
     * Link label or content. Accepts any `ReactNode`.
     */
    children: React.ReactNode;
}
