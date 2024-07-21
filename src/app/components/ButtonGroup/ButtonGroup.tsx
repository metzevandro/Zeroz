import Button from "../Button/Button";
import "./ButtonGroup.scss";
import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "is-loading";

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

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  direction,
  onClickSecondButton,
  typeIconSecondButton,
  contentSecondButton,
  variantSecondButton,
  disableSecondButton,
  disableFirstButton,
  onClickFirstButton,
  contentFirstButton,
  typeIconFirstButton,
  variantFirstButton,
  skeletonFirstButton,
  skeletonSecondButton,
}) => {
  return (
    <>
      <div className={`button-group ${direction}`}>
        <Button
          size="md"
          disabled={disableFirstButton}
          onClick={onClickFirstButton}
          label={contentFirstButton}
          typeIcon={typeIconFirstButton}
          variant={variantFirstButton}
          skeleton={skeletonFirstButton}
        />
        <Button
          size="md"
          disabled={disableSecondButton}
          onClick={onClickSecondButton}
          label={contentSecondButton}
          typeIcon={typeIconSecondButton}
          variant={variantSecondButton}
          skeleton={skeletonSecondButton}
        />
      </div>
    </>
  );
};

export default ButtonGroup;
