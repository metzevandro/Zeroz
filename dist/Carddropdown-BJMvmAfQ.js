import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
import { I as Icon } from './Icon-93G3RH-i.js';

/**
 * Manages the open/close state of the CardDropdown,
 * including dynamic height calculation for the expand/collapse animation.
 */
function useCardDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);
    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    useEffect(() => {
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
    return (jsxs("div", { className: "card-dropdown-header", onClick: onClick, children: [jsxs("div", { className: "card-dropdown-title", children: [jsx("div", { children: title }), jsx("div", { className: `card-dropdown-button ${state}`, children: jsx(Icon, { size: "md", icon: "keyboard_arrow_down" }) })] }), jsx("div", { children: description && jsx("p", { children: description }) })] }));
}
function CardDropdownBody({ content, footer, state, height, contentRef, }) {
    const isOpen = state === "open";
    return (jsxs("div", { className: `card-dropdown-children ${state}`, style: { height: isOpen ? `${height}px` : "0" }, ref: contentRef, children: [content && (jsx("div", { className: `card-dropdown-content ${state}`, children: content })), footer && (jsx("div", { className: `card-dropdown-footer ${state}`, children: footer }))] }));
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
    return (jsxs("div", { className: "card-dropdown", children: [jsx(CardDropdownHeader, { title: title, description: description, state: state, onClick: toggle }), jsx(CardDropdownBody, { content: content, footer: footer, state: state, height: contentHeight, contentRef: contentRef })] }));
};

export { CardDropdown as C };
