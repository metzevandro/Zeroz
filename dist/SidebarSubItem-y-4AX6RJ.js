'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Brand = require('./Brand-DIre-fJE.js');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var Icon = require('./Icon-BUoiqqF-.js');

/**
 * Manages the expand/collapse animation for a `SidebarItem` with sub-items.
 * Calculates the content height for the smooth max-height transition,
 * and handles Enter key activation.
 */
function useSidebarItem({ isActive, hasChildren, onClick, }) {
    const [contentHeight, setContentHeight] = React.useState(0);
    const contentRef = React.useRef(null);
    React.useEffect(() => {
        if (isActive && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
        else {
            setContentHeight(0);
        }
    }, [isActive]);
    const handleKeyDown = React.useCallback((e) => {
        if (e.key === "Enter" && hasChildren)
            onClick?.();
    }, [hasChildren, onClick]);
    return { contentHeight, contentRef, handleKeyDown };
}

/**
 * A navigation item in the sidebar.
 *
 * When `children` are provided, the item becomes an accordion trigger —
 * clicking it expands/collapses the sub-item panel with a smooth animation.
 *
 * `isActive` and `onClick` are injected by `Sidebar` via `React.cloneElement`
 * to keep accordion state centralized in the parent.
 */
const SidebarItem = ({ title, icon, fillIcon, children, isActive, onClick, }) => {
    const hasChildren = Boolean(children);
    const { contentHeight, contentRef, handleKeyDown } = useSidebarItem({
        isActive,
        hasChildren,
        onClick,
    });
    return (jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [jsxRuntime.jsxs("div", { className: [
                    "Sidebar-item",
                    hasChildren ? "with-sub-item" : "",
                    !hasChildren && isActive ? "active" : "",
                ]
                    .filter(Boolean)
                    .join(" "), onClick: onClick, tabIndex: 0, onKeyDown: handleKeyDown, children: [jsxRuntime.jsxs("div", { className: "Sidebar-item-header", children: [jsxRuntime.jsx(Icon.Icon, { size: "sm", icon: icon, fill: fillIcon }), jsxRuntime.jsx("div", { children: title })] }), hasChildren && (jsxRuntime.jsx("div", { className: isActive
                            ? "Sidebar-item-with-action-open"
                            : "Sidebar-item-with-action-close", children: jsxRuntime.jsx(Icon.Icon, { size: "sm", icon: "keyboard_arrow_down" }) }))] }), jsxRuntime.jsx("div", { className: `Sidebar-item-children ${isActive ? "active" : ""}`, style: { maxHeight: isActive ? `${contentHeight}px` : "0px" }, ref: contentRef, children: children })] }));
};

/**
 * Manages the accordion state for the sidebar's top-level items.
 * Only one item can be expanded at a time — clicking an open item collapses it.
 */
function useSidebar() {
    const [activeItem, setActiveItem] = React.useState(null);
    const toggleItem = React.useCallback((index) => {
        setActiveItem((prev) => (prev === index ? null : index));
    }, []);
    return { activeItem, toggleItem };
}

/**
 * `Sidebar` is the main navigation drawer for the application.
 *
 * It renders a brand logo at the top and a list of navigation items below.
 * Items with `children` behave as accordions — managed by the sidebar's
 * internal `activeItem` state injected via `React.cloneElement`.
 *
 * The overlay behind the sidebar closes it when clicked on mobile.
 *
 * Compose with `<SidebarTitle>`, `<SidebarItem>`, and `<SidebarSubItem>`.
 *
 * @example
 * ```tsx
 * <Sidebar
 *   brand={logo}
 *   brandSize="md"
 *   toggle={isOpen}
 *   setToggleSidebar={setIsOpen}
 * >
 *   <SidebarTitle title="Main" />
 *   <SidebarItem title="Dashboard" icon="home" fillIcon={false} />
 *   <SidebarItem title="Settings" icon="settings" fillIcon={false}>
 *     <SidebarSubItem title="Profile" active={false} onClick={goToProfile} />
 *     <SidebarSubItem title="Account" active={true}  onClick={goToAccount} />
 *   </SidebarItem>
 * </Sidebar>
 * ```
 */
const Sidebar = ({ brand, brandSize, children, toggle, setToggleSidebar, }) => {
    const { activeItem, toggleItem } = useSidebar();
    const closeSidebar = () => setToggleSidebar(false);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: `Sidebar ${toggle ? "open" : "close"}`, children: [jsxRuntime.jsx("div", { className: "brand", children: jsxRuntime.jsx(Brand.Brand, { alt: "Logo-marca", src: brand, size: brandSize }) }), jsxRuntime.jsx("div", { className: "Sidebar-list", children: React.Children.map(children, (child, index) => {
                            if (React.isValidElement(child) &&
                                child.type === SidebarItem &&
                                child.props.children) {
                                const key = String(index);
                                return React.cloneElement(child, {
                                    isActive: activeItem === key,
                                    onClick: () => toggleItem(key),
                                });
                            }
                            return child;
                        }) })] }), jsxRuntime.jsx("div", { className: `Sidebar-overlay ${toggle ? "open" : "close"}`, onClick: closeSidebar, children: jsxRuntime.jsx(ButtonIcon.ButtonIcon, { variant: "secondary", onClick: closeSidebar, appearance: "default", size: "md", icon: "close" }) })] }));
};

/**
 * Section heading rendered above a group of `SidebarItem` entries.
 */
const SidebarTitle = ({ title }) => (jsxRuntime.jsx("h1", { className: "Sidebar-list-title", children: title }));

/**
 * A nested navigation item rendered inside an expanded `SidebarItem`.
 * Use `active` to highlight the currently selected route.
 */
const SidebarSubItem = ({ title, active, onClick, }) => (jsxRuntime.jsxs("div", { className: `Sidebar-sub-item ${active ? "active animated" : ""}`, tabIndex: 0, onClick: onClick, children: [jsxRuntime.jsx("div", { children: jsxRuntime.jsx(Icon.Icon, { size: "sm", icon: "subdirectory_arrow_right", fill: true }) }), jsxRuntime.jsx("div", { children: title })] }));

exports.Sidebar = Sidebar;
exports.SidebarItem = SidebarItem;
exports.SidebarSubItem = SidebarSubItem;
exports.SidebarTitle = SidebarTitle;
