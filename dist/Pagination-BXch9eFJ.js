'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('./Icon-BUoiqqF-.js');
var Skeleton = require('./Skeleton-CzoMYdQv.js');

/** Maps an arrow direction to its Material Symbol icon name. */
const ARROW_ICON = {
    left: "arrow_back",
    right: "arrow_forward",
};

/**
 * Renders a single directional arrow button for the `Pagination` component.
 */
function PaginationArrowButton({ direction, disabled, onClick, }) {
    const icon = ARROW_ICON[direction];
    return (jsxRuntime.jsx("button", { className: icon, disabled: disabled, onClick: onClick, "aria-label": direction === "left" ? "Previous page" : "Next page", children: jsxRuntime.jsx(Icon.Icon, { icon: icon, size: "sm" }) }));
}

/**
 * Renders the pagination label or a skeleton placeholder during loading.
 */
function PaginationLabel({ label, skeleton }) {
    if (skeleton)
        return jsxRuntime.jsx(Skeleton.Skeleton, { height: "24", width: "160" });
    return jsxRuntime.jsx("p", { children: label });
}

/**
 * `Pagination` is a navigation control for moving between pages.
 *
 * Three layout variants are available:
 * - `"noLabel"`     — arrows only
 * - `"leftLabel"`   — label on the left, arrows grouped on the right
 * - `"centerLabel"` — left arrow, label in the center, right arrow
 *
 * When `skeleton` is `true`, both arrows are disabled and the label
 * is replaced with a loading placeholder.
 *
 * @example
 * ```tsx
 * <Pagination
 *   variant="centerLabel"
 *   label="Page 3 of 10"
 *   disabledLeft={page === 1}
 *   disabledRight={page === totalPages}
 *   onClickLeft={() => setPage(p => p - 1)}
 *   onClickRight={() => setPage(p => p + 1)}
 * />
 * ```
 */
const Pagination = ({ variant, label, disabledLeft = false, disabledRight = false, onClickLeft, onClickRight, skeleton = false, }) => {
    const leftButton = (jsxRuntime.jsx(PaginationArrowButton, { direction: "left", disabled: skeleton || disabledLeft, onClick: onClickLeft }));
    const rightButton = (jsxRuntime.jsx(PaginationArrowButton, { direction: "right", disabled: skeleton || disabledRight, onClick: onClickRight }));
    const labelNode = jsxRuntime.jsx(PaginationLabel, { label: label, skeleton: skeleton });
    return (jsxRuntime.jsxs("div", { className: "Pagination", children: [variant === "noLabel" && (jsxRuntime.jsxs("div", { className: "noLabel", children: [leftButton, rightButton] })), variant === "leftLabel" && (jsxRuntime.jsxs("div", { className: "leftLabel", children: [labelNode, jsxRuntime.jsxs("div", { style: { display: "flex" }, children: [leftButton, rightButton] })] })), variant === "centerLabel" && (jsxRuntime.jsxs("div", { className: "centerLabel", children: [leftButton, labelNode, rightButton] }))] }));
};

exports.Pagination = Pagination;
