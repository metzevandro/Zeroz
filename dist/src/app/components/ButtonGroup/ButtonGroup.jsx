import Button from "../Button/Button";
import "./ButtonGroup.scss";
import React from "react";
var ButtonGroup = function (_a) {
  var direction = _a.direction,
    onClickSecondButton = _a.onClickSecondButton,
    typeIconSecondButton = _a.typeIconSecondButton,
    contentSecondButton = _a.contentSecondButton,
    variantSecondButton = _a.variantSecondButton,
    disableSecondButton = _a.disableSecondButton,
    disableFirstButton = _a.disableFirstButton,
    onClickFirstButton = _a.onClickFirstButton,
    contentFirstButton = _a.contentFirstButton,
    typeIconFirstButton = _a.typeIconFirstButton,
    variantFirstButton = _a.variantFirstButton,
    skeletonFirstButton = _a.skeletonFirstButton,
    skeletonSecondButton = _a.skeletonSecondButton;
  return (
    <>
      <div className={"button-group ".concat(direction)}>
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
