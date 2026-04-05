import "./Header.scss";
import React from "react";
import { HeaderProps } from "./Header.types";
import "../../styles.scss";
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
declare const Header: React.FC<HeaderProps>;
export default Header;
