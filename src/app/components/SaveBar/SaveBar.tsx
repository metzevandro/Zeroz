import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "./SaveBar.scss";

interface SaveBarProps {
  onClickSave: (e: React.MouseEvent) => void;
  onClickCancel: () => void;
}

const SaveBar: React.FC<SaveBarProps> = ({ onClickSave, onClickCancel }) => {
  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClickSave(e);
  };

  return (
    <div className="save-bar">
      <div className="save-bar-content">
        <p className="save-bar-label">Unsaved changes</p>
        <div className="save-bar-buttons">
          <ButtonGroup
            variantFirstButton="secondary"
            variantSecondButton="success"
            direction="row"
            contentFirstButton="Cancel"
            contentSecondButton="Save"
            onClickFirstButton={onClickCancel}
            onClickSecondButton={handleSaveClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SaveBar;
