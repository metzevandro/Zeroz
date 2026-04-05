import React from "react";
import "./Savebar.scss";
import type { SavebarProps } from "./Savebar.types";
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
declare const Savebar: React.FC<SavebarProps>;
export default Savebar;
