import "./SavebarTrigger.scss";
import React from "react";
import SaveBar from "../Savebar/Savebar";
import Progress from "../Progress/Progress";
import { SavebarTriggerProps } from "./SavebarTrigger.types";
import { useHeaderWidth } from "./hooks/useHeaderWidth";
import { useSaveProgress } from "./hooks/useSaveProgress";
import { useFormTracker } from "./hooks/useFormTracker";

/**
 * `SavebarTrigger` is a form wrapper that automatically shows a fixed `SaveBar`
 * when any named child input differs from `initialValues`.
 *
 * Pass `initialValues` with the last-saved field values. The component
 * compares current input values against them on every keystroke — the SaveBar
 * appears when anything changes and disappears when everything is reverted.
 *
 * @example
 * ```tsx
 * const [saved, setSaved] = useState({ name: "Jane", email: "jane@example.com" });
 *
 * <SavebarTrigger
 *   initialValues={saved}
 *   onSubmit={(values) => setSaved(values)}
 *   label="You have unsaved changes"
 *   labelSave="Save"
 *   labelCancel="Cancel"
 * >
 *   <Input name="name"  label="Name"  />
 *   <Input name="email" label="Email" />
 * </SavebarTrigger>
 * ```
 */
const SavebarTrigger: React.FC<SavebarTriggerProps> = ({
  children,
  initialValues,
  onSubmit,
  onCancel,
  label = "You have unsaved changes",
  labelSave = "Save",
  labelCancel = "Cancel",
}) => {
  const headerWidth = useHeaderWidth();
  const { saving, progressValue, startSave, resetSave } = useSaveProgress();
  const {
    formData,
    formChanged,
    resetToInitial,
    commitSaved,
    injectControlledProps,
  } = useFormTracker({ initialValues });

  const saveBarStyle = headerWidth ? { width: `${headerWidth}px` } : {};

  const handleSave = () => {
    startSave(() => {
      commitSaved();
      onSubmit(formData);
    });
  };

  const handleCancel = () => {
    resetSave();
    resetToInitial();
    onCancel?.();
  };

  const modifiedChildren = React.Children.map(children, injectControlledProps);

  return (
    <div className="form-register-root">
      {saving && (
        <div className="form-register-progress">
          <Progress value={progressValue} />
        </div>
      )}

      <div className="form-register-save-bar" style={saveBarStyle}>
        {formChanged && !saving && (
          <SaveBar
            label={label}
            labelSave={labelSave}
            labelCancel={labelCancel}
            onClickSave={handleSave}
            onClickCancel={handleCancel}
          />
        )}
      </div>

      <div>{modifiedChildren}</div>
    </div>
  );
};

SavebarTrigger.displayName = "SavebarTrigger";

export default SavebarTrigger;
