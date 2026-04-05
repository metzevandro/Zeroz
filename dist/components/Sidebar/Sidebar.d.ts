import "./Sidebar.scss";
import React from "react";
import { SidebarProps } from "./Sidebar.types";
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
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
