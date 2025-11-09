import React from "react";
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
declare const Notification: React.FC<NotificationProps>;
export default Notification;
