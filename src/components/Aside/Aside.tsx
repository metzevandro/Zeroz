import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { AsideProps } from "./Aside.types";
import "./Aside.scss";

interface AsideHeaderProps {
  title: string;
  description?: string;
  onClose: () => void;
}

const AsideHeader: React.FC<AsideHeaderProps> = ({
  title,
  description,
  onClose,
}) => (
  <div className="aside-header">
    <div className="aside-title">
      <span>{title}</span>
      <ButtonIcon
        appearance="plain"
        variant="primary"
        icon="close"
        size="md"
        onClick={onClose}
        aria-label="Close panel"
      />
    </div>
    {description && <p className="aside-description">{description}</p>}
  </div>
);

AsideHeader.displayName = "Aside.Header";

const Aside: React.FC<AsideProps> = ({
  isOpen,
  title,
  description,
  toggleAside,
  content,
  footer,
}) => {
  return (
    <>
      <div
        className={`aside-overlay ${isOpen ? "open" : "hidden"}`}
        onClick={toggleAside}
        aria-hidden="true"
      />
      <div
        className={`aside-root ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="aside">
          <AsideHeader
            title={title}
            description={description}
            onClose={toggleAside}
          />
          <div className="aside-children">{content}</div>
          {footer && <div className="aside-footer">{footer}</div>}
        </div>
      </div>
    </>
  );
};

Aside.displayName = "Aside";

export default Aside;
