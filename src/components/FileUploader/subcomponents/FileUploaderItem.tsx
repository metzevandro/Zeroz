import React from "react";
import Icon from "../../Icon/Icon";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
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
export function FileUploaderItem({
  fileObj,
  fileNameStyle,
  onRemove,
}: FileUploaderItemProps) {
  return (
    <li
      className={`file-uploader-item ${fileObj.hasError ? "file-uploader-item-error" : ""}`}
    >
      <div
        className={`file-uploaded ${fileObj.hasError ? "file-uploaded-error" : ""}`}
      >
        <p style={fileNameStyle}>{fileObj.file.name}</p>
        <p className="file-uploaded-icon">
          <div className="file-uploader-icon-error">
            {fileObj.hasError && <Icon icon="error_outline" size="sm" />}
          </div>
          <ButtonIcon
            variant="primary"
            appearance="plain"
            size="sm"
            icon="close"
            onClick={() => onRemove(fileObj.id)}
          />
        </p>
      </div>
      {fileObj.hasError && fileObj.errorMessage && (
        <p className="file-uploader-error">{fileObj.errorMessage}</p>
      )}
    </li>
  );
}
