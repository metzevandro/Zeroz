import { useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import "./Notification.scss";
import Button from "../Button/Button";
import React from "react";

interface NotificationProps {
  icon?: string;
  title: string;
  description?: string;
  variant: "primary" | "secondary" | "warning" | "success";
  type: "float" | "inline";
  isOpen?: boolean;
  dismissible?: boolean;
  withAction?: boolean;
  disableButton?: boolean;
  buttonLabel?: string;
  onClickButton?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  icon,
  title,
  description,
  variant,
  type,
  isOpen,
  dismissible,
  withAction,
  disableButton,
  onClickButton,
  buttonLabel,
}) => {
  const [isClose, setIsClose] = useState(true);

  const handleClickClose = () => {
    setIsClose(false);
  };

  // Condicional para mostrar a div pai
  const showContent = withAction || description;

  return (
    <>
      {isClose && (
        <div
          className={`notification ${variant} ${type} ${
            dismissible && "dismissible"
          } ${isOpen ? "open" : ""}`}
        >
          <div className={`notification-title ${variant}`}>
            <Icon icon={icon} size="md" />
            <div className="title">{title}</div>
            {dismissible && (
              <ButtonIcon
                variant="on-color"
                size="sm"
                typeIcon="close"
                buttonType="plain"
                onClick={handleClickClose}
              />
            )}
          </div>
          {showContent && (
            <div className="notification-content">
              {description && <div className="description">{description}</div>}
              {withAction && (
                <div className="notification-with-action">
                  <Button
                    size="md"
                    variant={variant}
                    disabled={disableButton}
                    label={buttonLabel}
                    onClick={onClickButton}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Notification;
