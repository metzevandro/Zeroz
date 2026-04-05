import { NotificationVariant, NotificationType } from "../Notification.types";

/**
 * Builds the CSS class string for the notification root element.
 * The `open` class is always included when the component is rendered
 * (since `isOpen` guards the render itself) — it's needed to trigger
 * the float animation on `.float.open`.
 */
export function getNotificationClass(
  variant: NotificationVariant,
  type: NotificationType,
  dismissible: boolean,
  isExiting: boolean,
): string {
  return [
    "notification",
    variant,
    type,
    "open",
    dismissible && "dismissible",
    isExiting && "exiting",
  ]
    .filter(Boolean)
    .join(" ");
}
