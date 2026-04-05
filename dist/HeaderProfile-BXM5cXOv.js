'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var Avatar = require('./Avatar-DXpNIyf-.js');
var Icon = require('./Icon-BUoiqqF-.js');
var Skeleton = require('./Skeleton-CzoMYdQv.js');
var React = require('react');

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
const Header = ({ children, onClick, breadcrumb }) => (jsxRuntime.jsxs("header", { className: "header-root", children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", { className: "header-action", children: jsxRuntime.jsx(ButtonIcon.ButtonIcon, { variant: "primary", appearance: "plain", size: "md", icon: "menu", onClick: onClick }) }), jsxRuntime.jsx("div", { className: "header-breadcrumb", children: breadcrumb })] }), children] }));

/**
 * Manages the open/close state of a dropdown panel, including:
 * - Toggle on trigger click
 * - Click-outside detection to auto-close
 * - Dynamic max-height calculation for the expand/collapse animation
 */
function useDropdownToggle() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [dropdownHeight, setDropdownHeight] = React.useState(0);
    const dropdownRef = React.useRef(null);
    const contentRef = React.useRef(null);
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
    React.useEffect(() => {
        if (isOpen && contentRef.current) {
            setDropdownHeight(contentRef.current.scrollHeight);
        }
        else {
            setDropdownHeight(0);
        }
    }, [isOpen]);
    return { isOpen, dropdownHeight, dropdownRef, contentRef, toggle };
}

/**
 * Profile section displayed on the right side of the `Header`.
 *
 * Shows the user's avatar and name. Clicking it toggles a dropdown panel
 * that can contain any content — typically `<DropdownItem>` entries.
 * The dropdown closes automatically when the user clicks outside.
 *
 * @example
 * ```tsx
 * <HeaderProfile name="Jane Doe" letter="J" avatar_src={avatarUrl}>
 *   <DropdownItem typeIcon="person" content="Profile" />
 *   <DropdownItem typeIcon="logout" content="Sign out" onClick={signOut} />
 * </HeaderProfile>
 * ```
 */
const HeaderProfile = ({ name, children, avatar_src, letter, skeleton, }) => {
    const { isOpen, dropdownHeight, dropdownRef, contentRef, toggle } = useDropdownToggle();
    const state = isOpen ? "open" : "close";
    return (jsxRuntime.jsxs("div", { ref: dropdownRef, className: "profile-root", children: [jsxRuntime.jsxs("div", { className: "profile", tabIndex: 0, onClick: toggle, children: [jsxRuntime.jsx("div", { className: "avatar", children: jsxRuntime.jsx(Avatar.Avatar, { skeleton: skeleton, size: "md", src: avatar_src, letter: letter }) }), skeleton ? (jsxRuntime.jsx(Skeleton.Skeleton, { height: "24", width: "70" })) : (jsxRuntime.jsx("h1", { className: "name", children: name })), jsxRuntime.jsx("div", { className: `icon ${state}`, children: jsxRuntime.jsx(Icon.Icon, { size: "sm", icon: "keyboard_arrow_down" }) })] }), jsxRuntime.jsx("div", { className: `dropdown ${state}`, ref: contentRef, style: { maxHeight: isOpen ? `${dropdownHeight}px` : "0" }, children: children })] }));
};

exports.Header = Header;
exports.HeaderProfile = HeaderProfile;
