import React from "react";
import "./EmptyState.scss";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
// Declaração
var EmptyState = function (_a) {
  var title = _a.title,
    description = _a.description,
    icon = _a.icon,
    buttonContentPrimary = _a.buttonContentPrimary,
    buttonContentSecondary = _a.buttonContentSecondary,
    onClickActionPrimary = _a.onClickActionPrimary,
    onClickActionSecondary = _a.onClickActionSecondary;
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
