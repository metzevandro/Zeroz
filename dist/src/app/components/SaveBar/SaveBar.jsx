import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "./SaveBar.scss";
var SaveBar = function (_a) {
  var onClickSave = _a.onClickSave,
    onClickCancel = _a.onClickCancel,
    label = _a.label,
    labelSave = _a.labelSave,
    labelCancel = _a.labelCancel;
  var handleSaveClick = function (e) {
    e.stopPropagation();
    onClickSave(e);
  };
  return (
    <div className="save-bar">
      <div className="save-bar-content">
        <p className="save-bar-label">{label}</p>
        <div className="save-bar-buttons">
          <ButtonGroup
            variantFirstButton="secondary"
            variantSecondButton="success"
            direction="row"
            contentFirstButton={labelCancel}
            contentSecondButton={labelSave}
            onClickFirstButton={onClickCancel}
            onClickSecondButton={handleSaveClick}
          />
        </div>
      </div>
    </div>
  );
};
export default SaveBar;
