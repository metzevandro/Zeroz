export interface FileUploaderProps {
    /**
     * Heading displayed at the top of the uploader.
     */
    title: string;
    /**
     * Supporting text displayed below the file list.
     * Typically used to communicate accepted formats or size limits.
     */
    description?: string;
    /**
     * When `true`, allows selecting multiple files at once and appends new
     * selections to the existing list. When `false` (default), each new
     * selection replaces the current file.
     * @default false
     */
    multiple?: boolean;
    /**
     * Disables the upload button and the file input.
     * @default false
     */
    disabled?: boolean;
    /**
     * Maximum allowed file size in **megabytes**.
     * Files exceeding this limit are shown with an error message.
     * When omitted, no size validation is applied.
     */
    maxFileSize?: number;
    /**
     * Restricts which file types the system picker shows.
     * Accepts the same values as the native `<input accept>` attribute:
     * MIME types (e.g. `"image/png"`, `"application/pdf"`),
     * extensions (e.g. `".pdf,.png"`), or wildcards (e.g. `"image/*"`).
     * Multiple values can be comma-separated: `"image/*,.pdf"`.
     *
     * @example
     * accept="image/*"
     * accept=".pdf,.docx"
     * accept="image/png,image/jpeg,application/pdf"
     */
    accept?: string;
    /**
     * Label text rendered inside the upload button.
     */
    buttonLabel: string;
    /**
     * Material Symbol icon name rendered inside the upload button.
     */
    typeIconButton: string;
    /**
     * Callback fired whenever the file list changes (add or remove).
     * Receives the current `FileList`, or `null` when all files are removed.
     */
    onChange: (files: FileList | null) => void;
    /**
     * Externally controlled file list.
     * Pass `null` to programmatically clear the file list (e.g. after form submit).
     * Non-null values are ignored to prevent state loops — internal state is
     * always the source of truth for the rendered list.
     */
    value?: FileList | null;
}
export interface UploadedFile {
    /**
     * Stable unique identifier generated at validation time.
     * Used as the React key and for id-based removal.
     */
    id: string;
    /** The native `File` object. */
    file: File;
    /** Whether this file failed validation (e.g. exceeded `maxFileSize`). */
    hasError: boolean;
    /** Human-readable error message shown below the file row. `null` when valid. */
    errorMessage: string | null;
}
