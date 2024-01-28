import "./CardDropdown.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { useState } from "react";

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
          <div>
            <h1 className="card-dropdown-title">{title}</h1>
            {description && <p>{description}</p>}
          </div>
          <div className={`card-dropdown-button ${isOpen ? "open" : "close"}`}>
            <ButtonIcon
              variant=""
              onClick={toggleDropDown}
              type="plain"
              size="md"
              typeIcon="keyboard_arrow_down"
            />
          </div>
        </div>
        <p className={`card-dropdown-content ${isOpen ? "open" : "close"}`}>
          {children}
        </p>
      </div>
    </>
  );
};
