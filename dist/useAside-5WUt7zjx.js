import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { B as ButtonIcon } from './ButtonIcon-DWB2zXvl.js';
import { useState, useCallback } from 'react';

const AsideHeader = ({ title, description, onClose, }) => (jsxs("div", { className: "aside-header", children: [jsxs("div", { className: "aside-title", children: [jsx("span", { children: title }), jsx(ButtonIcon, { appearance: "plain", variant: "primary", icon: "close", size: "md", onClick: onClose, "aria-label": "Close panel" })] }), description && jsx("p", { className: "aside-description", children: description })] }));
AsideHeader.displayName = "Aside.Header";
const Aside = ({ isOpen, title, description, toggleAside, content, footer, }) => {
    return (jsxs(Fragment, { children: [jsx("div", { className: `aside-overlay ${isOpen ? "open" : "hidden"}`, onClick: toggleAside, "aria-hidden": "true" }), jsx("div", { className: `aside-root ${isOpen ? "open" : ""}`, role: "dialog", "aria-modal": "true", "aria-label": title, children: jsxs("div", { className: "aside", children: [jsx(AsideHeader, { title: title, description: description, onClose: toggleAside }), jsx("div", { className: "aside-children", children: content }), footer && jsx("div", { className: "aside-footer", children: footer })] }) })] }));
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
const AsideContent = ({ children }) => (jsx("div", { className: "aside-content", children: children }));
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
const AsideFooter = ({ children }) => jsx(Fragment, { children: children });
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
    const [isOpen, setIsOpen] = useState(initialState);
    const openAside = useCallback(() => setIsOpen(true), []);
    const closeAside = useCallback(() => setIsOpen(false), []);
    const toggleAside = useCallback(() => setIsOpen((prev) => !prev), []);
    return { isOpen, openAside, closeAside, toggleAside };
};

export { Aside as A, AsideContent as a, AsideFooter as b, useAside as u };
