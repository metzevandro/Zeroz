import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { I as Icon } from './Icon-93G3RH-i.js';
import { S as Skeleton } from './Skeleton-CvObjom8.js';
import { useRef, useState, useEffect } from 'react';

/**
 * Measures and tracks the rendered dimensions of a button element.
 *
 * Attaches a ResizeObserver so dimensions stay accurate if the button
 * size changes (e.g. due to prop changes or container resize).
 *
 * @returns A tuple of [ref, dimensions] — attach `ref` to the button element.
 *
 * @example
 * const [buttonRef, dimensions] = useButtonDimensions();
 * <button ref={buttonRef}>...</button>
 * // dimensions → { height: 40, width: 40 } | null
 */
const useButtonDimensions = () => {
    const ref = useRef(null);
    const [dimensions, setDimensions] = useState(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const measure = () => {
            setDimensions({
                height: el.offsetHeight,
                width: el.offsetWidth,
            });
        };
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return [ref, dimensions];
};

/**
 * ## ButtonIcon
 *
 * An icon-only button with semantic color variants and two visual styles.
 * Supports a skeleton loading state that matches the button's exact dimensions.
 *
 * ### Appearance × Variant
 * `appearance` controls the visual weight; `variant` controls the color intent.
 * The `on-color` variant is designed for use on colored or dark backgrounds
 * and only has meaningful effect with `appearance="plain"`.
 *
 * ### Skeleton behavior
 * When `skeleton` is `true`, the button is visually hidden but remains mounted
 * so its dimensions can always be measured. This guarantees the skeleton
 * placeholder matches the button's exact size with no layout shift.
 *
 * ### Recommended use cases
 * - Toolbar actions (edit, delete, copy, share)
 * - Inline row actions in tables or lists
 * - Close/dismiss controls in modals, drawers, toasts
 * - Floating action-style controls on colored surfaces
 *
 * ### Best practices
 * - Always provide an `aria-label` — icon-only buttons have no visible text
 * - Use `appearance="plain"` for low-emphasis or repeated actions (e.g. table rows)
 * - Use `appearance="default"` for primary or prominent single actions
 * - Reserve `variant="warning"` for destructive actions (delete, remove)
 * - Pair `variant="on-color"` with colored backgrounds only
 *
 * @example
 * // Primary action
 * <ButtonIcon appearance="default" variant="primary" size="md" icon="add" aria-label="Add item" />
 *
 * // Plain close button
 * <ButtonIcon appearance="plain" variant="primary" size="sm" icon="close" aria-label="Close" />
 *
 * // Skeleton loading state
 * <ButtonIcon appearance="default" variant="secondary" size="md" icon="edit" skeleton aria-label="Edit" />
 */
const ButtonIcon = ({ size, appearance, icon, variant, disabled, skeleton, ...rest }) => {
    const [buttonRef, dimensions] = useButtonDimensions();
    return (jsxs(Fragment, { children: [skeleton && dimensions && (jsx(Skeleton, { height: `${dimensions.height}px`, width: `${dimensions.width}px` })), jsx("button", { ...rest, ref: buttonRef, disabled: disabled, style: skeleton ? { visibility: "hidden", position: "absolute" } : undefined, className: `button-icon ${variant} ${size} ${appearance}`, children: jsx(Icon, { icon: icon, size: appearance === "default" ? "md" : size }) })] }));
};
ButtonIcon.displayName = "ButtonIcon";

export { ButtonIcon as B };
