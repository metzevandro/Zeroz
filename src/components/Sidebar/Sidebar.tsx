import "./Sidebar.scss";
import React from "react";
import Brand from "../Brand/Brand";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { SidebarProps } from "./Sidebar.types";
import { SidebarItem } from "./subcomponents/SidebarItem";
import { useSidebar } from "./subcomponents/hooks/useSidebar";

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
const Sidebar: React.FC<SidebarProps> = ({
  brand,
  brandSize,
  children,
  toggle,
  setToggleSidebar,
}) => {
  const { activeItem, toggleItem } = useSidebar();

  const closeSidebar = () => setToggleSidebar(false);

  return (
    <>
      <div className={`Sidebar ${toggle ? "open" : "close"}`}>
        <div className="brand">
          <Brand alt="Logo-marca" src={brand} size={brandSize} />
        </div>

        <div className="Sidebar-list">
          {React.Children.map(children, (child, index) => {
            if (
              React.isValidElement(child) &&
              child.type === SidebarItem &&
              child.props.children
            ) {
              const key = String(index);
              return React.cloneElement(child, {
                isActive: activeItem === key,
                onClick: () => toggleItem(key),
              } as { isActive: boolean; onClick: () => void });
            }
            return child;
          })}
        </div>
      </div>

      <div
        className={`Sidebar-overlay ${toggle ? "open" : "close"}`}
        onClick={closeSidebar}
      >
        <ButtonIcon
          variant="secondary"
          onClick={closeSidebar}
          appearance="default"
          size="md"
          icon="close"
        />
      </div>
    </>
  );
};

export default Sidebar;
