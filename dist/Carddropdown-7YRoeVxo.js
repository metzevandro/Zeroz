'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Icon = require('./Icon-BUoiqqF-.js');

/**
 * Manages the open/close state of the CardDropdown,
 * including dynamic height calculation for the expand/collapse animation.
 */
function useCardDropdown() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [contentHeight, setContentHeight] = React.useState(0);
    const contentRef = React.useRef(null);
    const toggle = React.useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    React.useEffect(() => {
        if (isOpen && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
        else {
            setContentHeight(0);
        }
    }, [isOpen]);
    return { isOpen, contentHeight, contentRef, toggle };
}

/**
 * Returns the CSS state string corresponding to the boolean `isOpen` value.
 * Centralizes the mapping logic to avoid duplication across JSX classNames.
 *
 * @param isOpen - If `true`, returns `"open"`; otherwise, returns `"close"`.
 * @returns Visual state as a CSS string.
 */
function getDropdownState(isOpen) {
    return isOpen ? "open" : "close";
}

function CardDropdownHeader({ title, description, state, onClick, }) {
    return (jsxRuntime.jsxs("div", { className: "card-dropdown-header", onClick: onClick, children: [jsxRuntime.jsxs("div", { className: "card-dropdown-title", children: [jsxRuntime.jsx("div", { children: title }), jsxRuntime.jsx("div", { className: `card-dropdown-button ${state}`, children: jsxRuntime.jsx(Icon.Icon, { size: "md", icon: "keyboard_arrow_down" }) })] }), jsxRuntime.jsx("div", { children: description && jsxRuntime.jsx("p", { children: description }) })] }));
}
function CardDropdownBody({ content, footer, state, height, contentRef, }) {
    const isOpen = state === "open";
    return (jsxRuntime.jsxs("div", { className: `card-dropdown-children ${state}`, style: { height: isOpen ? `${height}px` : "0" }, ref: contentRef, children: [content && (jsxRuntime.jsx("div", { className: `card-dropdown-content ${state}`, children: content })), footer && (jsxRuntime.jsx("div", { className: `card-dropdown-footer ${state}`, children: footer }))] }));
}

/**
 * `CardDropdown` is an expandable card that displays a persistent header
 * and reveals additional content (body and footer) when clicked.
 *
 * Best suited for displaying grouped information in a compact form, such as
 * summaries, collapsible settings, or lists with on-demand details.
 *
 * @example
 * ```tsx
 * <CardDropdown
 *   title="Order details"
 *   description="Click to expand"
 *   content={<OrderDetails />}
 *   footer={<Button>View more</Button>}
 * />
 * ```
 */
const CardDropdown = ({ title, description, content, footer, }) => {
    const { isOpen, contentHeight, contentRef, toggle } = useCardDropdown();
    const state = getDropdownState(isOpen);
    return (jsxRuntime.jsxs("div", { className: "card-dropdown", children: [jsxRuntime.jsx(CardDropdownHeader, { title: title, description: description, state: state, onClick: toggle }), jsxRuntime.jsx(CardDropdownBody, { content: content, footer: footer, state: state, height: contentHeight, contentRef: contentRef })] }));
};

exports.CardDropdown = CardDropdown;
