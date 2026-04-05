'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var React = require('react');

/**
 * Manages the tag dismiss lifecycle:
 * 1. `handleClose` is called → `isClosing` becomes `true` (CSS animation starts)
 * 2. After `animationDuration` ms → `isDismissed` becomes `true` (tag removed)
 * 3. `onClose` is fired after the animation completes, not before
 */
function useTagDismiss({ animationDuration = 200, onClose, }) {
    const [isClosing, setIsClosing] = React.useState(false);
    const [isDismissed, setIsDismissed] = React.useState(false);
    const handleClose = React.useCallback(() => {
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
    return (jsxRuntime.jsxs("div", { className: ["tag-root", variant, isClosing && "tag-closing"]
            .filter(Boolean)
            .join(" "), children: [content, onClose && (jsxRuntime.jsx("span", { children: jsxRuntime.jsx(ButtonIcon.ButtonIcon, { appearance: "plain", size: "sm", icon: "close", variant: variant === "secondary" ? "primary" : "on-color", onClick: handleClose }) }))] }));
}

exports.Tag = Tag;
