// Aside.tsx
import React from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import "./Aside.scss";

interface AsideProps {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  toggleSidebar: () => void;
  isOpen: boolean;
}

const Aside: React.FC<AsideProps> = ({
  title,
  isOpen,
  description,
  toggleSidebar,
  footer,
  children,
}) => {
  return (
    <>
      <div
        className={`aside-overlay ${isOpen ? "aside-overlay-open" : "hidden"}`}
        onClick={toggleSidebar}
      />
      <div className={`aside-root ${isOpen ? "aside-open" : ""}`}>
        <div className="aside">
          <header className="aside-header">
            <div>
              <h1 className="aside-title">{title}</h1>
              <p className="aside-description">{description}</p>
            </div>
            <ButtonIcon
              type="plain"
              variant=""
              typeIcon="close"
              size="md"
              onClick={toggleSidebar}
            />
          </header>
          <div className="aside-children">{children}</div>
          {footer}
        </div>
      </div>
    </>
  );
};

export default Aside;

interface AsideContentProps {
  children: React.ReactNode;
}

export const AsideContent: React.FC<AsideContentProps> = ({ children }) => {
  return <main className="aside-content">{children}</main>;
};

interface AsideFooterProps {
  children: React.ReactNode;
}

export const AsideFooter: React.FC<AsideFooterProps> = ({ children }) => {
  return <footer className="aside-footer">{children}</footer>;
};
