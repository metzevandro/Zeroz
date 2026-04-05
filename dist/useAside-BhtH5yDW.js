'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var React = require('react');

const AsideHeader = ({ title, description, onClose, }) => (jsxRuntime.jsxs("div", { className: "aside-header", children: [jsxRuntime.jsxs("div", { className: "aside-title", children: [jsxRuntime.jsx("span", { children: title }), jsxRuntime.jsx(ButtonIcon.ButtonIcon, { appearance: "plain", variant: "primary", icon: "close", size: "md", onClick: onClose, "aria-label": "Close panel" })] }), description && jsxRuntime.jsx("p", { className: "aside-description", children: description })] }));
AsideHeader.displayName = "Aside.Header";
const Aside = ({ isOpen, title, description, toggleAside, content, footer, }) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: `aside-overlay ${isOpen ? "open" : "hidden"}`, onClick: toggleAside, "aria-hidden": "true" }), jsxRuntime.jsx("div", { className: `aside-root ${isOpen ? "open" : ""}`, role: "dialog", "aria-modal": "true", "aria-label": title, children: jsxRuntime.jsxs("div", { className: "aside", children: [jsxRuntime.jsx(AsideHeader, { title: title, description: description, onClose: toggleAside }), jsxRuntime.jsx("div", { className: "aside-children", children: content }), footer && jsxRuntime.jsx("div", { className: "aside-footer", children: footer })] }) })] }));
};
Aside.displayName = "Aside";

/**
 * ## AsideContent
 *
 * Main content slot for the `Aside` component.
 * Applies the design system's standard spacing and layout to the panel body.
 *
 * ### When to use
 * Whenever you need to render content inside the scrollable area of the `Aside`.
 *
 * @example
 * ```tsx
 * <Aside
 *   content={
 *     <AsideContent>
 *       <Input label="Name" />
 *       <Input label="Email" />
 *     </AsideContent>
 *   }
 * />
 * ```
 */
const AsideContent = ({ children }) => (jsxRuntime.jsx("div", { className: "aside-content", children: children }));
AsideContent.displayName = "Aside.Content";

/**
 * ## AsideFooter
 *
 * Footer slot for the `Aside` component.
 * Intended for primary and secondary actions such as confirmation and cancel buttons.
 *
 * ### Best practices
 * - Keep a maximum of 2 actions in the footer to avoid overwhelming the user
 * - The primary action should always be on the right
 *
 * @example
 * ```tsx
 * <Aside
 *   footer={
 *     <AsideFooter>
 *       <Button variant="secondary">Cancel</Button>
 *       <Button variant="primary">Confirm</Button>
 *     </AsideFooter>
 *   }
 * />
 * ```
 */
const AsideFooter = ({ children }) => jsxRuntime.jsx(jsxRuntime.Fragment, { children: children });
AsideFooter.displayName = "Aside.Footer";

/**
 * ## useAside
 *
 * Utility hook to manage the open/close state of the `Aside` component.
 * Encapsulates repetitive toggle logic, reducing boilerplate in consumers.
 *
 * @param initialState - Whether the panel starts open. Defaults to `false`.
 *
 * @returns `isOpen` — current panel state
 * @returns `openAside` — opens the panel
 * @returns `closeAside` — closes the panel
 * @returns `toggleAside` — toggles the panel state
 *
 * @example
 * ```tsx
 * const { isOpen, toggleAside } = useAside();
 *
 * <Button onClick={toggleAside}>Open panel</Button>
 * <Aside isOpen={isOpen} toggleAside={toggleAside} title="Details" />
 * ```
 */
const useAside = (initialState = false) => {
    const [isOpen, setIsOpen] = React.useState(initialState);
    const openAside = React.useCallback(() => setIsOpen(true), []);
    const closeAside = React.useCallback(() => setIsOpen(false), []);
    const toggleAside = React.useCallback(() => setIsOpen((prev) => !prev), []);
    return { isOpen, openAside, closeAside, toggleAside };
};

exports.Aside = Aside;
exports.AsideContent = AsideContent;
exports.AsideFooter = AsideFooter;
exports.useAside = useAside;
