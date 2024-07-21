import Icon from "../Icon/Icon";
import "./Dropdown.scss";
import React from "react";

interface DropdownProps {
  children: React.ReactNode;
  dropdown: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ children, dropdown }) => {
  return (
    <>
      {dropdown === true && (
        <div className="dropdown-menu-root">
          <div className="dropdown-menu">{children}</div>
        </div>
      )}
    </>
  );
};

interface DropdownTitleProps {
  content: string;
}

export const DropdownTitle: React.FC<DropdownTitleProps> = ({ content }) => {
  return (
    <>
      <div className="dropdown-menu-title">{content}</div>
    </>
  );
};

interface DropdownItemProps {
  typeIcon?: string | undefined;
  content: string;
  onClick?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  typeIcon,
  content,
  onClick,
}) => {
  return (
    <>
      <button className="dropdown-menu-item" onClick={onClick}>
        {typeIcon && <Icon size="sm" icon={typeIcon} />}
        {content}
      </button>
    </>
  );
};

export default Dropdown;
