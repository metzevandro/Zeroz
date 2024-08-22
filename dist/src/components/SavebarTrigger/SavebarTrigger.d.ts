import React, { ReactNode } from "react";
import "./SavebarTrigger.scss";
interface SavebarTriggerProps {
    children: ReactNode;
    formChanged: boolean;
    handleSubmit: () => void;
    handleCancel: () => void;
    label: string;
    labelSave: string;
    labelCancel: string;
}
declare const SavebarTrigger: React.FC<SavebarTriggerProps>;
export default SavebarTrigger;
