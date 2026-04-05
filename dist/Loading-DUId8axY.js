'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('./Icon-BUoiqqF-.js');

/**
 * Returns the rendering configuration for a given `LoadingVariant`.
 * Centralises the variant → (icon, size, class) mapping so the component
 * contains no conditional logic.
 */
const LOADING_CONFIG = {
    default: {
        spanClass: "loading",
        icon: "progress_activity",
        size: "sm",
        hasMessage: true,
    },
    large: {
        spanClass: "loading",
        icon: "progress_activity",
        size: "lg",
        hasMessage: false,
    },
    success: {
        spanClass: "success",
        icon: "check_circle",
        size: "sm",
        hasMessage: true,
    },
    warning: {
        spanClass: "warning",
        icon: "error_outline",
        size: "sm",
        hasMessage: true,
    },
};

/**
 * `Loading` renders a status indicator with an optional message.
 *
 * Four variants are available:
 * - `"default"` — animated spinner (sm) with optional message
 * - `"large"`   — animated spinner (lg), no message
 * - `"success"` — checkmark icon with optional message
 * - `"warning"` — warning icon with optional message
 *
 * @example
 * ```tsx
 * <Loading variant="default" message="Saving changes..." />
 * <Loading variant="large" />
 * <Loading variant="success" message="Saved successfully!" />
 * <Loading variant="warning" message="Something went wrong." />
 * ```
 */
const Loading = ({ variant, message }) => {
    const { spanClass, icon, size, hasMessage } = LOADING_CONFIG[variant];
    const indicator = (jsxRuntime.jsx("span", { className: spanClass, children: jsxRuntime.jsx(Icon.Icon, { icon: icon, size: size }) }));
    if (!hasMessage)
        return indicator;
    return (jsxRuntime.jsxs("div", { className: "loading-with-message", children: [indicator, message && jsxRuntime.jsx("p", { className: "loading-message", children: message })] }));
};

exports.Loading = Loading;
