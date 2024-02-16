import "./Sidebar.scss";
import Brand from "../Brand/Brand";
import Icon from "../Icon/Icon";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { useState } from "react";

interface SidebarProps {
  brand: string;
  children: React.ReactNode;
  toggle?: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  brand,
  children,
  toggle,
  setToggleSidebar,
}) => {
  const closeSidebar = () => {
    setToggleSidebar(false);
  };

  return (
    <>
      <div className={`Sidebar ${toggle ? "open" : "close"}`}>
        <div className="brand">
          <Brand src={brand} size="sm" />
        </div>
        {children}
      </div>
      <div
        onClick={closeSidebar}
        className={`Sidebar-overlay ${toggle ? "open" : "close"}`}
      >
        <ButtonIcon
          variant="on-color"
          onClick={closeSidebar}
          type="plain"
          size="md"
          typeIcon="close"
        />
      </div>
    </>
  );
};

interface SidebarListProps {
  title: string;
  children: React.ReactNode;
}

export const SidebarList: React.FC<SidebarListProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="Sidebar-list">
        <h1 className="Sidebar-list-title">{title}</h1>
        {children}
      </div>
    </>
  );
};

interface SidebarItemsProps {
  title: string;
  icon: string;
  fillIcon: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  active: boolean;
}

export const SidebarItem: React.FC<SidebarItemsProps> = ({
  title,
  icon,
  fillIcon,
  children,
  onClick,
  active,
}) => {
  const [toggleActive, setToggleActive] = useState(false);
  const toggleKey = () => {
    setToggleActive(!toggleActive);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && children) {
      toggleKey();
    }
  };

  return (
    <>
      <div
        className={`Sidebar-item ${children ? "with-sub-item" : ""} ${children ? "" : active ? "active" : ""}`}
        onClick={children ? toggleKey : onClick}
        tabIndex={0}
        onKeyDown={handleKeyPress}
      >
        <div className="Sidebar-item-header">
          <Icon size="sm" icon={icon} fill={fillIcon} />
          <div>{title}</div>
        </div>
        {children && (
          <div
            onKeyDown={handleKeyPress}
            onClick={toggleKey}
            className={`${
              toggleActive === true
                ? "Sidebar-item-with-action-open"
                : "Sidebar-item-with-action-close"
            }`}
          >
            <Icon size="sm" icon="keyboard_arrow_down" />
          </div>
        )}
      </div>
      {toggleActive && <div>{children}</div>}
    </>
  );
};

interface SidebarSubItemProps {
  title: string;
  onClick?: () => void;
  active: boolean;
}

export const SidebarSubItem: React.FC<SidebarSubItemProps> = ({
  title,
  onClick,
  active,
}) => {
  return (
    <>
      <div
        className={`Sidebar-sub-item ${active && "active"}`}
        tabIndex={0}
        onClick={onClick}
      >
        <div>
          <Icon size="sm" icon="subdirectory_arrow_right" fill={true} />
        </div>
        <div>{title}</div>
      </div>
    </>
  );
};
