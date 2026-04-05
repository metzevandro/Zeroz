import { jsxs, jsx } from 'react/jsx-runtime';
import { B as ButtonIcon } from './ButtonIcon-DWB2zXvl.js';
import { A as Avatar } from './Avatar-CcNXADW-.js';
import { I as Icon } from './Icon-93G3RH-i.js';
import { S as Skeleton } from './Skeleton-CvObjom8.js';
import { useState, useRef, useCallback, useEffect } from 'react';

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
const Header = ({ children, onClick, breadcrumb }) => (jsxs("header", { className: "header-root", children: [jsxs("div", { children: [jsx("div", { className: "header-action", children: jsx(ButtonIcon, { variant: "primary", appearance: "plain", size: "md", icon: "menu", onClick: onClick }) }), jsx("div", { className: "header-breadcrumb", children: breadcrumb })] }), children] }));

/**
 * Manages the open/close state of a dropdown panel, including:
 * - Toggle on trigger click
 * - Click-outside detection to auto-close
 * - Dynamic max-height calculation for the expand/collapse animation
 */
function useDropdownToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownHeight, setDropdownHeight] = useState(0);
    const dropdownRef = useRef(null);
    const contentRef = useRef(null);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    useEffect(() => {
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
    return (jsxs("div", { ref: dropdownRef, className: "profile-root", children: [jsxs("div", { className: "profile", tabIndex: 0, onClick: toggle, children: [jsx("div", { className: "avatar", children: jsx(Avatar, { skeleton: skeleton, size: "md", src: avatar_src, letter: letter }) }), skeleton ? (jsx(Skeleton, { height: "24", width: "70" })) : (jsx("h1", { className: "name", children: name })), jsx("div", { className: `icon ${state}`, children: jsx(Icon, { size: "sm", icon: "keyboard_arrow_down" }) })] }), jsx("div", { className: `dropdown ${state}`, ref: contentRef, style: { maxHeight: isOpen ? `${dropdownHeight}px` : "0" }, children: children })] }));
};

export { Header as H, HeaderProfile as a };
