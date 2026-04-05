'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/**
 * Manages the visibility state of a tooltip.
 * Exposes stable mouse event handlers to avoid unnecessary re-renders.
 */
function useTooltip() {
    const [isVisible, setIsVisible] = React.useState(false);
    const handleMouseEnter = React.useCallback(() => setIsVisible(true), []);
    const handleMouseLeave = React.useCallback(() => setIsVisible(false), []);
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
    return (jsxRuntime.jsxs("div", { className: `tooltip-root ${direction}`, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [children, jsxRuntime.jsx("div", { className: `tooltip-container ${isVisible ? "visible" : ""}`, children: jsxRuntime.jsx("p", { children: text }) })] }));
};

exports.Tooltip = Tooltip;
