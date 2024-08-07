import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./Aside.scss";

interface AsideProps {
  isOpen: boolean;
  title: string;
  description?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  toggleAside: () => void;
}

const Aside: React.FC<AsideProps> = ({
  title,
  isOpen,
  description,
  toggleAside,
  footer,
  content,
}) => {
  return (
    <>
      <div
        className={`aside-overlay ${isOpen ? "open" : "hidden"}`}
        onClick={toggleAside}
      />
      <div className={`aside-root ${isOpen ? "open" : ""}`}>
        <div className="aside">
          <header className="aside-header">
            <div className="aside-title">
              <div>{title}</div>
              <ButtonIcon
                buttonType="plain"
                variant="primary"
                typeIcon="close"
                size="md"
                onClick={toggleAside}
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
