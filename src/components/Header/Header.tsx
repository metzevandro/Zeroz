import "./Header.scss";
import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
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
const Header: React.FC<HeaderProps> = ({
  children,
  onClick,
  breadcrumb,
  skeleton,
}) => (
  <header className="header-root">
    <div>
      <div className="header-action">
        <ButtonIcon
          variant="primary"
          appearance="plain"
          size="md"
          icon="menu"
          onClick={onClick}
          skeleton={skeleton}
        />
      </div>
      <div className="header-breadcrumb">{breadcrumb}</div>
    </div>
    {children}
  </header>
);

export default Header;
