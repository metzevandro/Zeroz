import React from "react";
import "./SaveBar.scss";
interface SaveBarProps {
    onClickSave: (e: React.MouseEvent) => void;
    onClickCancel: () => void;
    labelSave: string;
    labelCancel: string;
    label: string;
}
declare const SaveBar: React.FC<SaveBarProps>;
export default SaveBar;
