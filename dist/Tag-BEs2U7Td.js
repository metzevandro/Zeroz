import { jsxs, jsx } from 'react/jsx-runtime';
import { B as ButtonIcon } from './ButtonIcon-DWB2zXvl.js';
import { useState, useCallback } from 'react';

/**
 * Manages the tag dismiss lifecycle:
 * 1. `handleClose` is called → `isClosing` becomes `true` (CSS animation starts)
 * 2. After `animationDuration` ms → `isDismissed` becomes `true` (tag removed)
 * 3. `onClose` is fired after the animation completes, not before
 */
function useTagDismiss({ animationDuration = 200, onClose, }) {
    const [isClosing, setIsClosing] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsDismissed(true);
            onClose?.();
        }, animationDuration);
    }, [animationDuration, onClose]);
    return { isDismissed, isClosing, handleClose };
}

const ANIMATION_DURATION = 200;
/**
 * `Tag` is a compact label with an optional dismiss button.
 *
 * When `onClose` is provided, a close button is rendered. Clicking it
 * triggers a smooth exit animation (fade + scale) before removing the tag
 * from the DOM and firing `onClose`.
 *
 * @example
 * ```tsx
 * // Static tag (no close button)
 * <Tag content="Design" variant="primary" />
 *
 * // Dismissible tag
 * <Tag content="React" variant="secondary" onClose={() => removeTag("React")} />
 * ```
 */
function Tag({ content, variant, onClose }) {
    const { isDismissed, isClosing, handleClose } = useTagDismiss({
        animationDuration: ANIMATION_DURATION,
        onClose,
    });
    if (isDismissed)
        return null;
    return (jsxs("div", { className: ["tag-root", variant, isClosing && "tag-closing"]
            .filter(Boolean)
            .join(" "), children: [content, onClose && (jsx("span", { children: jsx(ButtonIcon, { appearance: "plain", size: "sm", icon: "close", variant: variant === "secondary" ? "primary" : "on-color", onClick: handleClose }) }))] }));
}

export { Tag as T };
