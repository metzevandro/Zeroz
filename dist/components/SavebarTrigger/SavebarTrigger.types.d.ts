import { ReactNode } from "react";
/**
 * Generic map of form field values keyed by field `name` attribute.
 */
export interface FormData {
    [key: string]: string;
}
export interface SavebarTriggerProps {
    /**
     * Form fields or any renderable content wrapped by the trigger.
     * Direct children with a `name` prop are automatically made controlled —
     * `SavebarTrigger` injects `value` and `onChange` into them.
     */
    children: ReactNode;
    /**
     * The last-saved (or initial) values of the form fields.
     * `SavebarTrigger` compares current values against this to determine
     * whether there are unsaved changes.
     *
     * @example
     * ```tsx
     * <SavebarTrigger
     *   initialValues={{ name: "Jane", email: "jane@example.com" }}
     *   onSubmit={handleSave}
     * >
     *   <Input name="name"  />
     *   <Input name="email" />
     * </SavebarTrigger>
     * ```
     */
    initialValues: FormData;
    /**
     * Callback fired when the user clicks save.
     * Receives the current form values.
     */
    onSubmit: (values: FormData) => void;
    /**
     * Callback fired when the user clicks cancel.
     * The form is reset to `initialValues` automatically.
     */
    onCancel?: () => void;
    /** Text shown on the left of the SaveBar. @default "You have unsaved changes" */
    label?: string;
    /** Save button label. @default "Save" */
    labelSave?: string;
    /** Cancel button label. @default "Cancel" */
    labelCancel?: string;
}
