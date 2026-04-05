import "./Notification.scss";
import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { NotificationProps } from "./Notification.types";
import { getNotificationClass } from "./utils/notification.utils";

/**
 * `Notification` displays a contextual message with an optional action button
 * and a dismissible close button.
 *
 * It supports two display modes (`"float"` for toast-style overlays and
 * `"inline"` for in-flow banners) and four semantic variants.
 *
 * The component renders nothing when `isOpen` is `false`.
 *
 * @example
 * ```tsx
 * // Inline success notification
 * <Notification
 *   isOpen={saved}
 *   type="inline"
 *   variant="success"
 *   icon="check_circle"
 *   title="Changes saved"
 *   description="Your profile has been updated."
 *   dismissible
 *   onClose={() => setSaved(false)}
 * />
 *
 * // Float warning with action
 * <Notification
 *   isOpen={showWarning}
 *   type="float"
 *   variant="warning"
 *   icon="warning"
 *   title="Session expiring"
 *   withAction
 *   buttonLabel="Stay signed in"
 *   onClickButton={renewSession}
 *   dismissible
 *   onClose={dismissWarning}
 * />
 * ```
 */
const Notification: React.FC<NotificationProps> = ({
  icon,
  title,
  description,
  variant,
  type,
  isOpen = false,
  isExiting = false,
  dismissible = false,
  withAction = false,
  disableButton = false,
  buttonLabel,
  onClickButton,
  onClose,
}) => {
  if (type === "inline" && !isOpen) return null;

  if (type === "float" && !isOpen && !isExiting) {
    return (
      <div aria-hidden className="notification float notification-hidden" />
    );
  }

  const hasContent = withAction || Boolean(description);

  return (
    <div
      className={getNotificationClass(variant, type, dismissible, isExiting)}
    >
      <div className={`notification-title ${variant}`}>
        <Icon icon={icon} size="md" />
        <div className="title">{title}</div>
        {dismissible && (
          <ButtonIcon
            variant="on-color"
            size="sm"
            icon="close"
            appearance="plain"
            onClick={onClose}
          />
        )}
      </div>

      {hasContent && (
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
