import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./Aside.scss";

interface AsideProps {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  content?: React.ReactNode;
  toggleSidebar: () => void;
  isOpen: boolean;
}

const Aside: React.FC<AsideProps> = ({
  title,
  isOpen,
  description,
  toggleSidebar,
  footer,
  content,
}) => {
  return (
    <>
      <div
        className={`aside-overlay ${isOpen ? "open" : "hidden"}`}
        onClick={toggleSidebar}
      />
      <div className={`aside-root ${isOpen ? "open" : ""}`}>
        <div className="aside">
          <header className="aside-header">
            <div className="aside-title">
              <div>{title}</div>
              <ButtonIcon
                type="plain"
                variant="primary"
                typeIcon="close"
                size="md"
                onClick={toggleSidebar}
              />
            </div>
            <div className="aside-description">{description}</div>
          </header>
          <main className="aside-children">{content}</main>
          <footer className="aside-footer">{footer}</footer>
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
  return <div className="aside-content">{children}</div>;
};

interface AsideFooterProps {
  children: React.ReactNode;
}

export const AsideFooter: React.FC<AsideFooterProps> = ({ children }) => {
  return <div>{children}</div>;
};
