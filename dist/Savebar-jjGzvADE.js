import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button } from './Button-CX8HjbAK.js';

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
const Savebar = ({ onClickSave, onClickCancel, label, labelSave, labelCancel, }) => {
    const handleSaveClick = (e) => {
        e.stopPropagation();
        onClickSave(e);
    };
    return (jsx("div", { className: "save-bar", children: jsxs("div", { className: "save-bar__content", children: [jsx("p", { className: "save-bar__label", children: label }), jsxs("div", { className: "save-bar__buttons", children: [jsx(Button, { variant: "success", onClick: handleSaveClick, children: labelSave }), jsx(Button, { variant: "secondary", onClick: onClickCancel, children: labelCancel })] })] }) }));
};
Savebar.displayName = "Savebar";

export { Savebar as S };
