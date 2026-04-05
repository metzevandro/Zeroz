import React from "react";
import "./Savebar.scss";
import { Button } from "../Button";
import type { SavebarProps } from "./Savebar.types";

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * `SaveBar` is a sticky action bar used to confirm or discard unsaved changes.
 *
 * It renders a full-width bar with a descriptive label on the left and
 * Save / Cancel action buttons on the right.
 *
 * ### Usage
 * ```tsx
 * <SaveBar
 *   label="You have unsaved changes"
 *   labelSave="Save"
 *   labelCancel="Discard"
 *   onClickSave={(e) => handleSave(e)}
 *   onClickCancel={handleCancel}
 * />
 * ```
 *
 * ### Best practices
 * - Display only when there are pending changes to confirm.
 * - Keep `label` short and informative (e.g. "Unsaved changes").
 * - `onClickSave` receives the mouse event so callers can use it if needed.
 */
const Savebar: React.FC<SavebarProps> = ({
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
      <div className="save-bar__content">
        <p className="save-bar__label">{label}</p>
        <div className="save-bar__buttons">
          <Button variant="success" onClick={handleSaveClick}>
            {labelSave}
          </Button>
          <Button variant="secondary" onClick={onClickCancel}>
            {labelCancel}
          </Button>
        </div>
      </div>
    </div>
  );
};

Savebar.displayName = "Savebar";

export default Savebar;
