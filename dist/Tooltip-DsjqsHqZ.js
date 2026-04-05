import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';

/**
 * Manages the visibility state of a tooltip.
 * Exposes stable mouse event handlers to avoid unnecessary re-renders.
 */
function useTooltip() {
    const [isVisible, setIsVisible] = useState(false);
    const handleMouseEnter = useCallback(() => setIsVisible(true), []);
    const handleMouseLeave = useCallback(() => setIsVisible(false), []);
    return { isVisible, handleMouseEnter, handleMouseLeave };
}

/**
 * `Tooltip` displays a contextual text bubble when the user hovers over
 * its child element. The bubble appears in the specified `direction` and
 * includes a CSS-drawn arrow pointing back toward the trigger.
 *
 * @example
 * ```tsx
 * <Tooltip text="Copy to clipboard" direction="top">
 *   <ButtonIcon icon="content_copy" />
 * </Tooltip>
 *
 * <Tooltip text="More options" direction="right">
 *   <ButtonIcon icon="more_vert" />
 * </Tooltip>
 * ```
 */
const Tooltip = ({ text, children, direction }) => {
    const { isVisible, handleMouseEnter, handleMouseLeave } = useTooltip();
    return (jsxs("div", { className: `tooltip-root ${direction}`, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [children, jsx("div", { className: `tooltip-container ${isVisible ? "visible" : ""}`, children: jsx("p", { children: text }) })] }));
};

export { Tooltip as T };
