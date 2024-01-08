import { useState } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import "./Notification.scss";

interface NotificationProps {
  icon?: string;
  title: string;
  description?: string;
  variant: "primary" | "warning" | "success";
  type: "float" | "inline";
  isOpen?: boolean;
}

const Notification: React.FC<NotificationProps> = ({
  icon,
  title,
  description,
  variant,
  type,
  isOpen,
}) => {
  const [isClose, setIsClose] = useState(true);

  const handleClickClose = () => {
    setIsClose(false);
  };
  return (
    <>
      {isClose && (
        <div
          className={`notification ${variant} ${type} ${isOpen ? "open" : ""}`}
        >
          <div className={`notification-icon-${variant}`}>
            <Icon icon={icon} size="md" />
          </div>
          <div className="notification-content">
            <header>
              <h1>{title}</h1>
              {type === "inline" && (
                <ButtonIcon
                  variant=""
                  size="md"
                  typeIcon="close"
                  type="plain"
                  onClick={handleClickClose}
                />
              )}
            </header>
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
