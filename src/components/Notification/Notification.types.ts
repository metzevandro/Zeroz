export type NotificationVariant =
  | "primary"
  | "secondary"
  | "warning"
  | "success";
export type NotificationType = "float" | "inline";

export interface NotificationProps {
  icon?: string;
  title: string;
  description?: string;
  variant: NotificationVariant;
  type: NotificationType;
  /** @default false */
  isOpen?: boolean;
  /**
   * When `true`, plays the exit animation (slide up + fade).
   * Managed internally by `NotificationContainer` — do not set manually.
   * @default false
   */
  isExiting?: boolean;
  /** @default false */
  dismissible?: boolean;
  /** @default false */
  withAction?: boolean;
  /** @default false */
  disableButton?: boolean;
  buttonLabel?: string;
  onClickButton?: () => void;
  onClose?: () => void;
}

export interface NotificationEntry extends Omit<
  NotificationProps,
  "type" | "isOpen" | "isExiting"
> {
  /** Unique stable key for this notification. */
  id: string;
}

export interface NotificationContainerProps {
  /**
   * List of float notifications to display.
   * Add entries to show notifications, remove entries to destroy them.
   */
  notifications: NotificationEntry[];
}
