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
DropdownTitle.displayName = "DropdownTitle";

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
DropdownItem.displayName = "DropdownItem";

/**
 * `Dropdown` is a conditional menu container that renders its children
 * only when `visible` is `true`.
 *
 * The component is **stateless** — visibility control is always external.
 * The menu panel expands to fit its content and is never constrained by
 * a narrow parent container.
 *
 * Use the `align` prop to control which side the panel opens towards:
 * `"left"` (default) anchors to the left edge of the trigger and expands right;
 * `"right"` anchors to the right edge and expands left — ideal for triggers
 * near the right boundary of the viewport.
 *
 * Compose it with `<DropdownTitle>` for section headings and
 * `<DropdownItem>` for interactive entries.
 *
 * @example
 * ```tsx
 * // Opens to the right (default)
 * <Dropdown visible={isOpen}>
 *   <DropdownItem icon="person" label="Profile" onClick={goToProfile} />
 * </Dropdown>
 *
 * // Opens to the left — use near right edge of the screen
 * <Dropdown visible={isOpen} align="right">
 *   <DropdownItem icon="logout" label="Sign out" onClick={handleSignOut} />
 * </Dropdown>
 * ```
 */
const Dropdown = ({ children, visible, align = "left", }) => (jsx("div", { className: "dropdown-menu-root", children: jsx("div", { className: [
            "dropdown-menu",
            `dropdown-menu--align-${align}`,
            visible ? "dropdown-menu--visible" : "",
        ]
            .filter(Boolean)
            .join(" "), "aria-hidden": !visible, children: children }) }));
Dropdown.displayName = "Dropdown";

export { DropdownTitle as D, DropdownItem as a, Dropdown as b };
