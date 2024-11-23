import "./Sidebar.scss";
import Brand from "../Brand/Brand";
import Icon from "../Icon/Icon";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import React, { useEffect, useRef, useState } from "react";

type SidebarProps = {
  brand: string;
  children: React.ReactNode;
  toggle: boolean;
  setToggleSidebar: (toggle: boolean) => void;
  brandSize: "sm" | "md" | "lg";
};

const Sidebar: React.FC<SidebarProps> = ({
  brand,
  brandSize,
  children,
  toggle,
  setToggleSidebar,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const closeSidebar = () => {
    setToggleSidebar(false);
  };

  return (
    <>
      <div className={`Sidebar ${toggle ? "open" : "close"}`}>
        <div className="brand">
          <Brand alt="Logo-marca" src={brand} size={brandSize} />
        </div>
        <div className="Sidebar-list">
          {React.Children.map(children, (child, index) =>
            React.isValidElement(child) &&
            child.type === SidebarItem &&
            child.props.children
              ? React.cloneElement(child, {
                  isActive: activeItem === String(index),
                  onClick: () =>
                    setActiveItem(
                      activeItem === String(index) ? null : String(index),
                    ),
                } as { isActive: boolean; onClick: () => void })
              : child,
          )}
        </div>
      </div>
      <div
        onClick={closeSidebar}
        className={`Sidebar-overlay ${toggle ? "open" : "close"}`}
      >
        <ButtonIcon
          variant="secondary"
          onClick={closeSidebar}
          buttonType="default"
          size="md"
          typeIcon="close"
        />
      </div>
    </>
  );
};

interface SidebarTitleProps {
  title: string;
}

export const SidebarTitle: React.FC<SidebarTitleProps> = ({ title }) => {
  return <h1 className="Sidebar-list-title">{title}</h1>;
};

interface SidebarItemsProps {
  title: string;
  icon: string;
  fillIcon: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export const SidebarItem: React.FC<SidebarItemsProps> = ({
  title,
  icon,
  fillIcon,
  children,
  onClick,
  isActive,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && children) {
      onClick?.();
    }
  };

  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className={`Sidebar-item ${children ? "with-sub-item" : ""} ${
          children ? "" : isActive ? "active" : ""
        }`}
        onClick={onClick}
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
            onClick={onClick}
            className={`${
              isActive
                ? "Sidebar-item-with-action-open"
                : "Sidebar-item-with-action-close"
            }`}
          >
            <Icon size="sm" icon="keyboard_arrow_down" />
          </div>
        )}
      </div>
      <div
        className={`Sidebar-item-children ${isActive ? "active" : ""}`}
        style={{ maxHeight: isActive ? `${height}px` : "0px" }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
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
    <div
      className={`Sidebar-sub-item ${active ? "active animated" : ""}`}
      tabIndex={0}
      onClick={onClick}
    >
      <div>
        <Icon size="sm" icon="subdirectory_arrow_right" fill={true} />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Sidebar;
