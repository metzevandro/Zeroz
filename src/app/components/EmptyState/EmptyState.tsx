import React from "react";

import "./EmptyState.scss";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

// Props
interface EmptyStateProps {
  title: string;
  description: string;
  icon: string;
  buttonContentPrimary?: string;
  buttonContentSecondary?: string;
  onClickActionPrimary?: () => void;
  onClickActionSecondary?: () => void;
}

// Declaração
const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  buttonContentPrimary,
  buttonContentSecondary,
  onClickActionPrimary,
  onClickActionSecondary,
}) => {
  return (
    <div className="empty-state-root">
      <Icon icon={icon} size="lg" />
      <div className="empty-state-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="empty-state-footer">
        {buttonContentPrimary && (
          <Button
            size="md"
            variant="primary"
            label={buttonContentPrimary}
            onClick={onClickActionPrimary}
          />
        )}
        {buttonContentSecondary && (
          <Button
            size="md"
            variant="secondary"
            label={buttonContentSecondary}
            onClick={onClickActionSecondary}
          />
        )}
      </div>
    </div>
  );
};

// Exportação
export default EmptyState;
