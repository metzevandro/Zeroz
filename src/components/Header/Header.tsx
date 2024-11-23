import "./Header.scss";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import { useEffect, useRef, useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";

interface HeaderProps {
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
  onClick: () => void;
  skeleton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ children, onClick, breadcrumb }) => {
  return (
    <>
      <header className="header-root">
        <div>
          <div className="header-action">
            <ButtonIcon
              variant="primary"
              buttonType="plain"
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
  skeleton?: boolean;
  letter?: string;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
  name,
  children,
  avatar_src,
  skeleton,
  letter,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDropDownOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isDropDownOpen]);

  return (
    <>
      <div ref={dropdownRef} className="profile-root">
        <div className="profile" tabIndex={0} onClick={toggleDropDown}>
          <div className="avatar">
            <Avatar
              skeleton={skeleton}
              size="md"
              src={avatar_src}
              letter={letter}
            />
          </div>
          {skeleton ? (
            <>
              <Skeleton height="24" width="70" />
            </>
          ) : (
            <>
              <h1 className="name">{name}</h1>
            </>
          )}

          <div className={`icon ${isDropDownOpen ? "open" : "close"}`}>
            <Icon size="sm" icon="keyboard_arrow_down" />
          </div>
        </div>
        <div
          className={`dropdown ${isDropDownOpen ? "open" : "close"}`}
          ref={contentRef}
          style={{ maxHeight: isDropDownOpen ? `${height}px` : "0px" }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Header;
