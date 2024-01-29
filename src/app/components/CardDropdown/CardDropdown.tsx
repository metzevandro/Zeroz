import "./CardDropdown.scss";
import { useState } from "react";
import Icon from "../Icon/Icon";

interface CardDropdownProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

export const CardDropdown: React.FC<CardDropdownProps> = ({
  title,
  children,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="card-dropdown" onClick={toggleDropDown}>
        <div className="card-dropdown-header">
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
        <p className={`card-dropdown-content ${isOpen ? "open" : "close"}`}>
          {children}
        </p>
      </div>
    </>
  );
};
