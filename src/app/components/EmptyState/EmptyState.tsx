import React from "react";
import Icon from "../Icon/Icon";
import "./EmptyState.scss";
import Button from "../Button/Button";

interface EmptyStateProps {
  title: string;
  description: string;
  icon: string;
  buttonContentPrimary?: string;
  buttonContentSecondary?: string;
  onClickActionPrimary?: () => void;
  onClickActionSecondary?: () => void;
}

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
    <>
      <div className="empty-state-root">
        <Icon icon={icon} size="lg" />
        <div className="empty-state-content">
          <h1>{title}</h1>
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
    </>
  );
};

export default EmptyState;
