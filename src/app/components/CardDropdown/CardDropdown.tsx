import "./CardDropdown.scss";
import { useState } from "react";
import Icon from "../Icon/Icon";
import React from "react";

interface CardDropdownProps {
  title: string;
  content?: React.ReactNode;
  description?: string;
  footer?: React.ReactNode;
}

const CardDropdown: React.FC<CardDropdownProps> = ({
  title,
  content,
  footer,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="card-dropdown">
        <div className="card-dropdown-header" onClick={toggleDropDown}>
          <div className="card-dropdown-title">
            <div>{title}</div>
            <div
              className={`card-dropdown-button ${isOpen ? "open" : "close"}`}
            >
              <Icon size="md" icon="keyboard_arrow_down" />
            </div>
          </div>
          <div>{description && <p>{description}</p>}</div>
        </div>
        {content && (
          <div className={`card-dropdown-content ${isOpen ? "open" : "close"}`}>
            {content}
          </div>
        )}
        {footer && (
          <div className={`card-dropdown-footer ${isOpen ? "open" : "close"}`}>
            {footer}
          </div>
        )}
      </div>
    </>
  );
};

export default CardDropdown;
