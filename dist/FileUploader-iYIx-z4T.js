import { jsxs, jsx } from 'react/jsx-runtime';
import { B as Button } from './Button-CX8HjbAK.js';
import { useRef, useState, useEffect } from 'react';
import { I as Icon } from './Icon-93G3RH-i.js';
import { B as ButtonIcon } from './ButtonIcon-DWB2zXvl.js';

function toBytes(mb) {
    return mb !== undefined ? mb * 1024 * 1024 : undefined;
}
function generateId(file) {
    return `${file.name}-${file.size}-${Math.random().toString(36).slice(2, 9)}`;
}
function validateFile(file, maxFileSizeBytes, maxFileSizeMb) {
    const hasError = maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes;
    const result = {
        id: generateId(file),
        file,
        hasError,
        errorMessage: hasError
            ? `File "${file.name}" exceeds the ${maxFileSizeMb} MB size limit.`
            : null,
    };
    return result;
}
function toFileList(files) {
    const dt = new DataTransfer();
    files.forEach(({ file }) => dt.items.add(file));
    const result = dt.files.length > 0 ? dt.files : null;
    return result;
}
function validateFileList(files, maxFileSizeBytes, maxFileSizeMb) {
    const arr = Array.isArray(files) ? files : Array.from(files);
    return arr.map((file) => validateFile(file, maxFileSizeBytes, maxFileSizeMb));
}

function useFileUploader({ multiple, maxFileSize, onChange, value, }) {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const maxFileSizeBytes = toBytes(maxFileSize);
    const prevValueRef = useRef(undefined);
    useEffect(() => {
        const isEmpty = value === null || (value !== undefined && value.length === 0);
        if (!isEmpty) {
            return;
        }
        if (value === prevValueRef.current) {
            return;
        }
        prevValueRef.current = value;
        setSelectedFiles([]);
    }, [value]);
    const handleFileChange = (event) => {
        // Convert to array BEFORE resetting the input — resetting clears event.target.files
        // in some browsers, making the FileList empty even if files were selected.
        const filesArray = Array.from(event.target.files ?? []);
        event.target.value = "";
        if (filesArray.length === 0) {
            return;
        }
        const validated = validateFileList(filesArray, maxFileSizeBytes, maxFileSize);
        setSelectedFiles((prev) => {
            const newState = multiple ? [...prev, ...validated] : validated;
            onChange(toFileList(newState));
            return newState;
        });
    };
    const handleTriggerInput = () => {
        fileInputRef.current?.click();
    };
    const handleRemoveFile = (id) => {
        setSelectedFiles((prev) => {
            const updated = prev.filter((f) => f.id !== id);
            onChange(toFileList(updated));
            return updated;
        });
    };
    return {
        fileInputRef,
        selectedFiles,
        handleFileChange,
        handleTriggerInput,
        handleRemoveFile,
    };
}

/**
 * Measures the uploader container's width and returns a `maxWidth` style
 * for the filename element, preventing long filenames from overflowing
 * the row when a close button and error icon are also present.
 *
 * Uses a `ResizeObserver` (falling back to a `resize` window listener)
 * for accurate tracking when the container is resized.
 */
function useContainerWidth() {
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(null);
    useEffect(() => {
        const el = containerRef.current;
        if (!el)
            return;
        const update = () => setContainerWidth(el.offsetWidth);
        update();
        if (typeof ResizeObserver !== "undefined") {
            const observer = new ResizeObserver(update);
            observer.observe(el);
            return () => observer.disconnect();
        }
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    const fileNameMaxWidth = containerWidth
        ? { maxWidth: `calc(${containerWidth}px - 60px)` }
        : {};
    return { containerRef, fileNameMaxWidth };
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
function FileUploaderItem({ fileObj, fileNameStyle, onRemove, }) {
    return (jsxs("li", { className: `file-uploader-item ${fileObj.hasError ? "file-uploader-item-error" : ""}`, children: [jsxs("div", { className: `file-uploaded ${fileObj.hasError ? "file-uploaded-error" : ""}`, children: [jsx("p", { style: fileNameStyle, children: fileObj.file.name }), jsxs("p", { className: "file-uploaded-icon", children: [jsx("div", { className: "file-uploader-icon-error", children: fileObj.hasError && jsx(Icon, { icon: "error_outline", size: "sm" }) }), jsx(ButtonIcon, { variant: "primary", appearance: "plain", size: "sm", icon: "close", onClick: () => onRemove(fileObj.id) })] })] }), fileObj.hasError && fileObj.errorMessage && (jsx("p", { className: "file-uploader-error", children: fileObj.errorMessage }))] }));
}

const FileUploader = ({ title, description, multiple = false, disabled = false, maxFileSize, accept, buttonLabel, typeIconButton, onChange, value, }) => {
    const { fileInputRef, selectedFiles, handleFileChange, handleTriggerInput, handleRemoveFile, } = useFileUploader({ multiple, maxFileSize, onChange, value});
    const { containerRef, fileNameMaxWidth } = useContainerWidth();
    return (jsxs("div", { className: "file-uploader", ref: containerRef, children: [jsxs("div", { className: "file-uploader-header", children: [jsx("h1", { children: title }), jsxs("div", { className: "file-uploader-button", children: [jsx("input", { type: "file", ref: fileInputRef, multiple: multiple, disabled: disabled, accept: accept, style: { display: "none" }, onChange: handleFileChange }), jsx(Button, { variant: "primary", disabled: disabled, onClick: handleTriggerInput, icon: typeIconButton, size: "md", children: buttonLabel })] })] }), jsxs("div", { className: "file-uploader-footer", children: [description && jsx("p", { children: description }), selectedFiles.length > 0 && (jsx("ul", { className: "file-uploader-items", children: selectedFiles.map((fileObj) => (jsx(FileUploaderItem, { fileObj: fileObj, fileNameStyle: fileNameMaxWidth, onRemove: handleRemoveFile }, fileObj.id))) }))] })] }));
};

export { FileUploader as F };
