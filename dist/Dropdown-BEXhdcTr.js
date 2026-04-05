import { jsx, jsxs } from 'react/jsx-runtime';
import { I as Icon } from './Icon-93G3RH-i.js';

/**
 * Non-interactive section heading for grouping related items
 * inside a `Dropdown` menu.
 *
 * @example
 * ```tsx
 * <Dropdown dropdown={isOpen}>
 *   <DropdownTitle label="Account" />
 *   <DropdownItem label="Profile" onClick={goToProfile} />
 * </Dropdown>
 * ```
 */
const DropdownTitle = ({ label }) => (jsx("div", { className: "dropdown-menu-title", children: label }));

/**
 * Interactive menu item rendered as a `<button>` inside a `Dropdown`.
 * Optionally displays a leading icon when `icon` is provided.
 *
 * @example
 * ```tsx
 * <DropdownItem icon="logout" label="Sign out" onClick={handleSignOut} />
 * ```
 */
const DropdownItem = ({ icon, label, onClick, }) => (jsxs("button", { className: "dropdown-menu-item", onClick: onClick, children: [icon && jsx(Icon, { size: "sm", icon: icon }), label] }));

/**
 * `Dropdown` is a conditional menu container that renders its children
 * only when `visible` is `true`.
 *
 * Compose it with `<DropdownTitle>` for section headings and
 * `<DropdownItem>` for interactive entries.
 *
 * @example
 * ```tsx
 * <Dropdown visible={isOpen}>
 *   <DropdownTitle label="Settings" />
 *   <DropdownItem icon="person" label="Profile" onClick={goToProfile} />
 *   <DropdownItem icon="logout" label="Sign out" onClick={handleSignOut} />
 * </Dropdown>
 * ```
 */
const Dropdown = ({ children, visible }) => {
    if (!visible)
        return null;
    return (jsx("div", { className: "dropdown-menu-root", children: jsx("div", { className: "dropdown-menu", children: children }) }));
};

export { DropdownTitle as D, DropdownItem as a, Dropdown as b };
