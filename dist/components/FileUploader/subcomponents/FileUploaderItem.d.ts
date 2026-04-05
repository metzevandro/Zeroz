import React from "react";
import { UploadedFile } from "../FileUploader.types";
interface FileUploaderItemProps {
    fileObj: UploadedFile;
    fileNameStyle: React.CSSProperties;
    onRemove: (id: string) => void;
}
/**
 * Renders a single file row in the `FileUploader` list.
 *
 * Displays the filename, an error icon when the file is invalid,
 * and a remove button. Loading state was removed from the per-item
 * level — if a global loading indicator is needed it should live
 * outside this component.
 *
 * The `onRemove` callback receives the file's stable `id` (not its
 * list index) so removal is safe even when items are reordered or
 * when multiple files share the same name.
 */
export declare function FileUploaderItem({ fileObj, fileNameStyle, onRemove, }: FileUploaderItemProps): import("react/jsx-runtime").JSX.Element;
export {};
