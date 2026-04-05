import "./SavebarTrigger.scss";
import React from "react";
import { SavebarTriggerProps } from "./SavebarTrigger.types";
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
declare const SavebarTrigger: React.FC<SavebarTriggerProps>;
export default SavebarTrigger;
