'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('./Icon-BUoiqqF-.js');

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
const DropdownTitle = ({ label }) => (jsxRuntime.jsx("div", { className: "dropdown-menu-title", children: label }));

/**
 * Interactive menu item rendered as a `<button>` inside a `Dropdown`.
 * Optionally displays a leading icon when `icon` is provided.
 *
 * @example
 * ```tsx
 * <DropdownItem icon="logout" label="Sign out" onClick={handleSignOut} />
 * ```
 */
const DropdownItem = ({ icon, label, onClick, }) => (jsxRuntime.jsxs("button", { className: "dropdown-menu-item", onClick: onClick, children: [icon && jsxRuntime.jsx(Icon.Icon, { size: "sm", icon: icon }), label] }));

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
    return (jsxRuntime.jsx("div", { className: "dropdown-menu-root", children: jsxRuntime.jsx("div", { className: "dropdown-menu", children: children }) }));
};

exports.Dropdown = Dropdown;
exports.DropdownItem = DropdownItem;
exports.DropdownTitle = DropdownTitle;
