import "./SideBar.scss";
import Brand from "../Brand/Brand";
import Icon from "../Icon/Icon";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { useState } from "react";

interface SideBarProps {
  brand: string;
  children: React.ReactNode;
  toggle?: boolean;
  setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar: React.FC<SideBarProps> = ({
  brand,
  children,
  toggle,
  setToggleSideBar,
}) => {
  const closeSideBar = () => {
    setToggleSideBar(false);
  };

  return (
    <>
      <div className={`sidebar ${toggle ? "open" : "close"}`}>
        <div className="brand">
          <Brand src={brand} size="sm" />
        </div>
        {children}
      </div>
      <div
        onClick={closeSideBar}
        className={`sidebar-overlay ${toggle ? "open" : "close"}`}
      >
        <ButtonIcon
          variant="on-color"
          onClick={closeSideBar}
          type="plain"
          size="md"
          typeIcon="close"
        />
      </div>
    </>
  );
};

interface SideBarListProps {
  title: string;
  children: React.ReactNode;
}

export const SideBarList: React.FC<SideBarListProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="sidebar-list">
        <h1 className="sidebar-list-title">{title}</h1>
        {children}
      </div>
    </>
  );
};

interface SideBarItemsProps {
  title: string;
  icon: string;
  children?: React.ReactNode;
}

export const SidebarItem: React.FC<SideBarItemsProps> = ({
  title,
  icon,
  children,
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
        className={`sidebar-item  ${toggleActive && "active"}`}
        onClick={children ? toggleKey : undefined}
        tabIndex={0}
        onKeyDown={handleKeyPress}
      >
        <div className="sidebar-item-header">
          <Icon size="sm" icon={icon} fill={1} />
          <p>{title}</p>
        </div>
        {children && (
          <div
            onKeyDown={handleKeyPress}
            onClick={toggleKey}
            className={`${
              toggleActive === true
                ? "sidebar-item-with-action-open"
                : "sidebar-item-with-action-close"
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
  icon: string;
}

export const SidebarSubItem: React.FC<SidebarSubItemProps> = ({
  title,
  icon,
}) => {
  return (
    <>
      <div className="sidebar-sub-item" tabIndex={0}>
        <Icon size="sm" icon={icon} fill={1} />
        <p>{title}</p>
      </div>
    </>
  );
};
