import React from "react";
import Icon from "../../Icon/Icon";
import { CardDropdownState } from "../Carddropdown.types";

// ─── Header ──────────────────────────────────────────────────────────────────

interface CardDropdownHeaderProps {
  title: string;
  description?: string;
  state: CardDropdownState;
  onClick: () => void;
}

export function CardDropdownHeader({
  title,
  description,
  state,
  onClick,
}: CardDropdownHeaderProps) {
  return (
    <div className="card-dropdown-header" onClick={onClick}>
      <div className="card-dropdown-title">
        <div>{title}</div>
        <div className={`card-dropdown-button ${state}`}>
          <Icon size="md" icon="keyboard_arrow_down" />
        </div>
      </div>
      <div>{description && <p>{description}</p>}</div>
    </div>
  );
}

// ─── Body ─────────────────────────────────────────────────────────────────────

interface CardDropdownBodyProps {
  content?: React.ReactNode;
  footer?: React.ReactNode;
  state: CardDropdownState;
  height: number;
  contentRef: React.RefObject<HTMLDivElement>;
}

export function CardDropdownBody({
  content,
  footer,
  state,
  height,
  contentRef,
}: CardDropdownBodyProps) {
  const isOpen = state === "open";

  return (
    <div
      className={`card-dropdown-children ${state}`}
      style={{ height: isOpen ? `${height}px` : "0" }}
      ref={contentRef}
    >
      {content && (
        <div className={`card-dropdown-content ${state}`}>{content}</div>
      )}
      {footer && (
        <div className={`card-dropdown-footer ${state}`}>{footer}</div>
      )}
    </div>
  );
}
