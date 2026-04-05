import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useRef, useState, useEffect, forwardRef, useMemo } from 'react';
import { I as Icon } from './Icon-93G3RH-i.js';
import { L as Loading } from './Loading-DHMiKOAP.js';
import { S as Skeleton } from './Skeleton-CvObjom8.js';

/**
 * Tracks the rendered dimensions of a button element.
 * Used to render a Skeleton placeholder with the exact same size.
 *
 * @returns A tuple: [ref to attach to the button, dimensions object or null]
 */
function useButtonDimensions(deps) {
    const ref = useRef(null);
    const [dimensions, setDimensions] = useState(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        setDimensions({
            height: el.offsetHeight,
            width: el.offsetWidth,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return [ref, dimensions];
}

/**
 * Assembles the final className string for the Button component.
 * Centralizes class composition logic to keep the component body clean.
 */
function buildButtonClassName({ variant, size, isLoading, disabled, className, }) {
    const classes = ["button", variant, size];
    if (isLoading)
        classes.push("is-loading");
    if (disabled)
        classes.push("button--disabled");
    if (className)
        classes.push(className);
    return classes.join(" ");
}

/**
 * # Button
 *
 * The primary interactive element for triggering actions.
 * Supports multiple semantic variants, sizes, loading and skeleton states,
 * and optional leading icons.
 *
 * ## Usage
 *
 * ```tsx
 * // Default primary button
 * <Button onClick={handleSave}>Save changes</Button>
 *
 * // Secondary action
 * <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
 *
 * // With icon
 * <Button icon="plus" variant="primary">Add item</Button>
 *
 * // Loading state (e.g. async form submit)
 * <Button isLoading={isSubmitting}>Submit</Button>
 *
 * // Skeleton placeholder during data fetch
 * <Button isSkeleton>Submit</Button>
 *
 * // Small size for toolbars or compact UIs
 * <Button size="sm" variant="secondary">Filter</Button>
 * ```
 *
 * ## Recommended use cases
 * - Form submissions → `variant="primary"`
 * - Cancel / back actions → `variant="secondary"`
 * - Confirmations (e.g. "Mark as done") → `variant="success"`
 * - Destructive or cautionary actions → `variant="warning"`
 *
 * ## Good practices
 * - Always provide meaningful `children` (button label).
 * - Use `ariaLabel` when the label alone isn't descriptive enough for screen readers.
 * - Pair `isLoading` with the async operation that triggered it.
 * - Never use `icon` without `children` — use an icon-only button component instead.
 */
const ButtonComponent = forwardRef(({ variant = "primary", size = "md", icon, isSkeleton = false, isLoading = false, ariaLabel, className, children, disabled, ...rest }, externalRef) => {
    const [internalRef, dimensions] = useButtonDimensions([
        size,
        variant,
        children,
        icon,
    ]);
    const buttonClassName = useMemo(() => buildButtonClassName({
        variant,
        size,
        isLoading,
        disabled: Boolean(disabled),
        className,
    }), [variant, size, isLoading, disabled, className]);
    if (process.env.NODE_ENV === "development" && icon && !children) {
        throw new Error("[Button] A button with `icon` must always have `children`. " +
            "Use a dedicated icon-only button component for icon-only cases.");
    }
    if (isSkeleton && dimensions) {
        return (jsx(Skeleton, { height: `${dimensions.height}px`, width: `${dimensions.width}px` }));
    }
    return (jsxs("button", { ...rest, ref: (node) => {
            internalRef.current = node;
            if (typeof externalRef === "function")
                externalRef(node);
            else if (externalRef)
                externalRef.current = node;
        }, className: buttonClassName, disabled: disabled || isLoading, "aria-label": ariaLabel, "aria-busy": isLoading, "aria-disabled": disabled, children: [isLoading && jsx(Loading, { variant: "default" }), icon && jsx(Icon, { icon: icon, size: "sm" }), children] }));
});
ButtonComponent.displayName = "Button";
const Button = React.memo(ButtonComponent);

export { Button as B };
