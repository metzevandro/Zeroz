import React from "react";
import { NotificationContainerProps } from "../Notification.types";
/**
 * `NotificationContainer` renders a fixed portal that stacks float
 * notifications in a column, managing their enter/exit/reorder animations.
 *
 * - **New entries** slide in from below
 * - **Dismissed entries** scale down + fade, then remaining items collapse smoothly
 * - **Order** reflects the `notifications` array order
 */
export declare function NotificationContainer({ notifications, }: NotificationContainerProps): React.ReactPortal;
