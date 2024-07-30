import "./ButtonGroup.scss";
import React from "react";
type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "is-loading";
interface ButtonGroupProps {
    disableFirstButton?: boolean;
    disableSecondButton?: boolean;
    direction: "row" | "column";
    variantFirstButton: ButtonVariant;
    variantSecondButton: ButtonVariant;
    contentFirstButton: string;
    contentSecondButton: string;
    typeIconFirstButton?: string;
    typeIconSecondButton?: string;
    onClickFirstButton?: (e: React.MouseEvent) => void;
    onClickSecondButton?: (e: React.MouseEvent) => void;
    skeletonFirstButton?: boolean;
    skeletonSecondButton?: boolean;
}
declare const ButtonGroup: React.FC<ButtonGroupProps>;
export default ButtonGroup;
