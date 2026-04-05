import React from "react";
export interface SavebarProps {
    /** Callback fired when the save button is clicked. Receives the mouse event. */
    onClickSave: (e: React.MouseEvent) => void;
    /** Callback fired when the cancel button is clicked. */
    onClickCancel: () => void;
    /** Label text displayed on the save button. */
    labelSave: string;
    /** Label text displayed on the cancel button. */
    labelCancel: string;
    /** Descriptive text shown on the left side of the bar. */
    label: string;
}
