import "./Header.scss";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface HeaderProps {
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
  onClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  children,
  onClick,
  breadcrumb,
}) => {
  return (
    <>
      <header className="header-root">
        <div>
          <div className="header-action">
            <ButtonIcon
              variant=""
              type="plain"
              size="md"
              typeIcon="menu"
              onClick={onClick}
            />
          </div>
          <div className="header-breadcrumb">{breadcrumb}</div>
        </div>
        {children}
      </header>
    </>
  );
};

interface HeaderProfileProps {
  name: string;
  children: React.ReactNode;
  avatar_src?: string;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
  name,
  children,
  avatar_src,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <>
      {isDropDownOpen && (
        <div className="profile-ghost" onClick={toggleDropDown} />
      )}
      <div className="profile-root">
        <button className="profile" tabIndex={0} onClick={toggleDropDown}>
          <div className="avatar">
            <Avatar size="md" src={avatar_src} />
          </div>
          <h1 className="name">{name}</h1>
          <div className={`icon ${isDropDownOpen ? "open" : "close"}`}>
            <Icon size="sm" icon="keyboard_arrow_down" />
          </div>
        </button>
        <div className={`dropdown ${isDropDownOpen ? "open" : "close"}`}>
          {children}
        </div>
      </div>
    </>
  );
};
