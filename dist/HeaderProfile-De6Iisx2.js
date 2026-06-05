'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var React = require('react');
var Avatar = require('./Avatar-Bf_sKaks.js');
var Icon = require('./Icon-BUoiqqF-.js');
var Skeleton = require('./Skeleton-CzoMYdQv.js');

/**
 * `Header` is the top-level application bar.
 *
 * It contains a hamburger menu button on the left, a breadcrumb slot in the center,
 * and a right-side slot for profile or other contextual actions (via `children`).
 *
 * Compose it with `<HeaderProfile>` for the standard user profile dropdown.
 *
 * @example
 * ```tsx
 * <Header
 *   onClick={toggleSidebar}
 *   breadcrumb={<Breadcrumb items={crumbs} />}
 * >
 *   <HeaderProfile name="Jane Doe" letter="J">
 *     <DropdownItem icon="logout" label="Sign out" onClick={signOut} />
 *   </HeaderProfile>
 * </Header>
 * ```
 */
const Header = ({ children, onClick, breadcrumb, skeleton, }) => (jsxRuntime.jsxs("header", { className: "header-root", children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", { className: "header-action", children: jsxRuntime.jsx(ButtonIcon.ButtonIcon, { variant: "primary", appearance: "plain", size: "md", icon: "menu", onClick: onClick, skeleton: skeleton }) }), jsxRuntime.jsx("div", { className: "header-breadcrumb", children: breadcrumb })] }), children] }));

/**
 * Manages the open/close state of the HeaderProfile dropdown:
 * - Toggle on trigger click
 * - Click-outside detection to auto-close
 *
 * Height animation is now delegated to the `Dropdown` component
 * via the `visible` prop injected by `HeaderProfile`.
 */
function useDropdownToggle() {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);
    const toggle = React.useCallback(() => setIsOpen((prev) => !prev), []);
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return { isOpen, dropdownRef, toggle };
}

/**
 * Profile section displayed on the right side of the `Header`.
 *
 * Shows the user's avatar and name. Clicking it toggles a dropdown panel
 * that can contain any content — typically `<DropdownItem>` entries.
 * The dropdown closes automatically when the user clicks outside.
 *
 * The `children` must be a `<Dropdown>` component — `visible` and `align="right"`
 * are injected automatically via `React.cloneElement`, so the consumer does not
 * need to manage the `visible` prop manually.
 *
 * @example
 * ```tsx
 * <HeaderProfile name="Jane Doe" letter="J" avatar_src={avatarUrl}>
 *   <Dropdown>
 *     <DropdownItem icon="person" label="Profile" />
 *     <DropdownItem icon="logout" label="Sign out" onClick={signOut} />
 *   </Dropdown>
 * </HeaderProfile>
 * ```
 */
const HeaderProfile = ({ name, children, avatar_src, letter, skeleton, }) => {
    const { isOpen, dropdownRef, toggle } = useDropdownToggle();
    const state = isOpen ? "open" : "close";
    const dropdown = React.isValidElement(children)
        ? React.cloneElement(children, { visible: isOpen, align: "right" })
        : children;
    return (jsxRuntime.jsxs("div", { ref: dropdownRef, className: "profile-root", children: [jsxRuntime.jsxs("button", { className: "profile", tabIndex: 0, onClick: toggle, disabled: skeleton, children: [jsxRuntime.jsx("div", { className: "avatar", children: jsxRuntime.jsx(Avatar.Avatar, { skeleton: skeleton, size: "md", src: avatar_src, letter: letter }) }), skeleton ? (jsxRuntime.jsx(Skeleton.Skeleton, { height: "24px", width: "70px" })) : (jsxRuntime.jsx("h1", { className: "name", children: name })), jsxRuntime.jsx("div", { className: `icon ${state}`, children: jsxRuntime.jsx(Icon.Icon, { size: "sm", icon: "keyboard_arrow_down" }) })] }), dropdown] }));
};

exports.Header = Header;
exports.HeaderProfile = HeaderProfile;
