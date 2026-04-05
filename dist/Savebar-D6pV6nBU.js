'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Button = require('./Button-CzlgwZOQ.js');

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
    return (jsxRuntime.jsx("div", { className: "save-bar", children: jsxRuntime.jsxs("div", { className: "save-bar__content", children: [jsxRuntime.jsx("p", { className: "save-bar__label", children: label }), jsxRuntime.jsxs("div", { className: "save-bar__buttons", children: [jsxRuntime.jsx(Button.Button, { variant: "success", onClick: handleSaveClick, children: labelSave }), jsxRuntime.jsx(Button.Button, { variant: "secondary", onClick: onClickCancel, children: labelCancel })] })] }) }));
};
Savebar.displayName = "Savebar";

exports.Savebar = Savebar;
