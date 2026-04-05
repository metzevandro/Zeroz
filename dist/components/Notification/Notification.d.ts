import "./Notification.scss";
import React from "react";
import { NotificationProps } from "./Notification.types";
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
declare const Notification: React.FC<NotificationProps>;
export default Notification;
