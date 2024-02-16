import { useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import "./Notification.scss";
import Button from "../Button/Button";

interface NotificationProps {
  icon?: string;
  title: string;
  description?: string;
  variant: "primary" | "warning" | "success";
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
  return (
    <>
      {isClose && (
        <div
          className={`notification ${variant} ${type} ${
            dismissible && "dismissible"
          } ${isOpen ? "open" : ""}`}
        >
          <div className={`notification-icon-${variant}`}>
            <Icon icon={icon} size="md" />
          </div>
          <div className="notification-content">
            <header>
              <div className="title">{title}</div>
              <>
                {dismissible && (
                  <ButtonIcon
                    variant="primary"
                    size="md"
                    typeIcon="close"
                    type="plain"
                    onClick={handleClickClose}
                  />
                )}
              </>
            </header>
            {description && <div className="description">{description}</div>}
            {withAction && (
              <div className="notification-with-action">
                <Button
                  size="md"
                  variant="secondary"
                  disable={disableButton}
                  label={buttonLabel}
                  onClick={onClickButton}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
