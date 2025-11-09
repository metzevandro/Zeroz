import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import "./Notification.scss";

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
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  icon,
  title,
  description,
  variant,
  type,
  isOpen = false,
  dismissible,
  withAction,
  disableButton,
  onClickButton,
  buttonLabel,
  onClose,
}) => {
  const showContent = withAction || description;

  if (!isOpen) return null;

  return (
    <div
      className={`notification ${variant} ${type} ${
        dismissible ? "dismissible" : ""
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
            onClick={onClose}
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
                onClick={onClickButton}
              >
                {buttonLabel}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
