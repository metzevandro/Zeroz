import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "./SaveBar.scss";

interface SaveBarProps {
  onClickSave: (e: React.MouseEvent) => void;
  onClickCancel: () => void;
  labelSave: string;
  labelCancel: string;
  label: string;
}

const SaveBar: React.FC<SaveBarProps> = ({
  onClickSave,
  onClickCancel,
  label,
  labelSave,
  labelCancel,
}) => {
  const handleSaveClick = (e: React.MouseEvent) => {
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
