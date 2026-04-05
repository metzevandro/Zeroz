'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Icon = require('./Icon-BUoiqqF-.js');
var Loading = require('./Loading-DUId8axY.js');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var React = require('react');

/**
 * Converte um arquivo para uma Data URL via FileReader.
 */
function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === "string") {
                resolve(reader.result);
            }
            else {
                reject(new Error("Failed to convert file to data URL."));
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
/**
 * Combina uma lista existente de Files com novos arquivos,
 * retornando um novo FileList via DataTransfer.
 */
function mergeFileLists(existing, incoming) {
    const transfer = new DataTransfer();
    Array.from(existing ?? []).forEach((f) => transfer.items.add(f));
    incoming.forEach((f) => transfer.items.add(f));
    return transfer.files;
}
/**
 * Remove um arquivo de uma FileList pelo índice,
 * retornando um novo FileList via DataTransfer.
 */
function removeFileAtIndex(files, index) {
    const transfer = new DataTransfer();
    Array.from(files ?? [])
        .filter((_, i) => i !== index)
        .forEach((f) => transfer.items.add(f));
    return transfer.files;
}
/**
 * Converte bytes para megabytes.
 */
function toBytes(mb) {
    return mb * 1024 * 1024;
}

/**
 * Encapsula toda a lógica de estado e manipulação de arquivos do ImageUploader.
 * Mantém sincronização com o valor externo (prop `value`) e gerencia
 * previews, loading, erros e operações de drag-and-drop.
 */
function useImageUploader({ value, onChange, maxFileSize, multiple, }) {
    const [selectedFiles, setSelectedFiles] = React.useState(value ?? null);
    const [imagePreviews, setImagePreviews] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const fileInputRef = React.useRef(null);
    const maxFileSizeBytes = maxFileSize !== undefined ? toBytes(maxFileSize) : undefined;
    // Sincroniza estado interno com valor externo
    React.useEffect(() => {
        setSelectedFiles(value ?? null);
    }, [value]);
    // Gera previews sempre que a lista de arquivos muda
    React.useEffect(() => {
        if (!selectedFiles) {
            setImagePreviews([]);
            return;
        }
        Promise.all(Array.from(selectedFiles).map(readFileAsDataURL))
            .then(setImagePreviews)
            .catch((error) => {
            console.error("Error loading image previews:", error);
            setImagePreviews([]);
        });
    }, [selectedFiles]);
    const applyFiles = React.useCallback((newFileList) => {
        setSelectedFiles(newFileList);
        onChange(newFileList);
    }, [onChange]);
    const handleButtonClick = React.useCallback(() => {
        fileInputRef.current?.click();
    }, []);
    const handleFileChange = React.useCallback(async (event) => {
        const incoming = Array.from(event.target.files ?? []);
        if (!incoming.length)
            return;
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const validFiles = incoming.filter((file) => {
                if (maxFileSizeBytes && file.size > maxFileSizeBytes) {
                    setErrorMessage(`File ${file.name} exceeds the maximum file size limit.`);
                    return false;
                }
                return true;
            });
            applyFiles(mergeFileLists(selectedFiles, validFiles));
            event.target.value = "";
        }
        catch {
            setErrorMessage("Error handling files.");
        }
        finally {
            setIsLoading(false);
        }
    }, [selectedFiles, maxFileSizeBytes, applyFiles]);
    const handleRemoveFile = React.useCallback((index) => {
        applyFiles(removeFileAtIndex(selectedFiles, index));
    }, [selectedFiles, applyFiles]);
    const handleDragOver = React.useCallback((event) => {
        event.preventDefault();
    }, []);
    const handleDrop = React.useCallback(async (event) => {
        event.preventDefault();
        const incoming = Array.from(event.dataTransfer.files);
        if (!incoming.length)
            return;
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const filesToAdd = multiple ? incoming : [incoming[0]];
            applyFiles(mergeFileLists(selectedFiles, filesToAdd));
        }
        catch {
            setErrorMessage("Error handling dropped files.");
        }
        finally {
            setIsLoading(false);
        }
    }, [selectedFiles, multiple, applyFiles]);
    return {
        selectedFiles,
        imagePreviews,
        isLoading,
        errorMessage,
        fileInputRef,
        handleButtonClick,
        handleFileChange,
        handleRemoveFile,
        handleDragOver,
        handleDrop,
    };
}

/**
 * ## ImageUploader
 *
 * Componente para upload de imagens via clique ou drag-and-drop.
 * Suporta múltiplos arquivos, validação de tamanho, preview inline e remoção individual.
 *
 * ### Quando usar
 * - Upload de imagens em formulários (avatar, galeria, banner)
 * - Cenários onde o usuário precisa visualizar as imagens antes de enviar
 *
 * ### Quando não usar
 * - Upload de arquivos não-imagem → use um componente `FileUploader` genérico
 * - Upload direto para storage sem preview → considere uma solução mais simples
 *
 * @example
 * // Uso básico controlado
 * const [files, setFiles] = useState<FileList | null>(null);
 *
 * <ImageUploader
 *   proportion="16/9"
 *   labelDropzone="Clique ou arraste"
 *   iconDropzone="upload"
 *   value={files}
 *   onChange={setFiles}
 * />
 *
 * @example
 * // Múltiplos arquivos com limite de tamanho
 * <ImageUploader
 *   proportion="1/1"
 *   labelDropzone="Adicionar imagens"
 *   iconDropzone="add_photo_alternate"
 *   multiple
 *   maxFileSize={2}
 *   onChange={handleChange}
 * />
 */
const ImageUploader = ({ proportion, description, title, disabled = false, multiple = false, maxFileSize, labelDropzone, iconDropzone, onChange, value, }) => {
    const { selectedFiles, imagePreviews, isLoading, errorMessage, fileInputRef, handleButtonClick, handleFileChange, handleRemoveFile, handleDragOver, handleDrop, } = useImageUploader({ value, onChange, maxFileSize, multiple });
    const hasFiles = selectedFiles && selectedFiles.length > 0;
    const aspectRatio = `calc(${proportion})`;
    const showDropzone = multiple || !hasFiles;
    return (jsxRuntime.jsxs("div", { className: "image-uploader", onDragOver: handleDragOver, onDrop: handleDrop, children: [title && jsxRuntime.jsx("p", { className: "image-uploader-title", children: title }), jsxRuntime.jsxs("div", { className: "image-previews", children: [hasFiles &&
                        !isLoading &&
                        Array.from(selectedFiles).map((_, index) => (jsxRuntime.jsxs("div", { className: "image-uploader-item", children: [jsxRuntime.jsx("div", { className: "delete-button-container", children: jsxRuntime.jsx("div", { className: "delete-button", children: jsxRuntime.jsx(ButtonIcon.ButtonIcon, { size: "sm", appearance: "default", variant: "secondary", icon: "delete", onClick: () => handleRemoveFile(index), disabled: disabled }) }) }), jsxRuntime.jsx("img", { style: { aspectRatio }, src: imagePreviews[index] ?? "", alt: "Preview", className: "image-preview" })] }, index))), showDropzone && (jsxRuntime.jsxs("div", { className: `image-uploader-content ${disabled ? "image-uploader-content-disabled" : ""}`, style: { aspectRatio }, children: [jsxRuntime.jsx("input", { type: "file", accept: "image/*", ref: fileInputRef, disabled: disabled, multiple: multiple, onChange: handleFileChange, style: { display: "none" } }), !isLoading && (jsxRuntime.jsx("div", { className: "uploader-item", children: jsxRuntime.jsxs("button", { onClick: handleButtonClick, style: { aspectRatio }, className: `image-uploader-dropzone ${disabled ? "image-uploader-dropzone-disabled" : ""}`, children: [jsxRuntime.jsx(Icon.Icon, { icon: iconDropzone, size: "md" }), jsxRuntime.jsx("p", { children: labelDropzone })] }) })), isLoading && (jsxRuntime.jsx("div", { className: "loading-screen", children: jsxRuntime.jsx(Loading.Loading, { variant: "default" }) }))] }))] }), errorMessage && (jsxRuntime.jsx("p", { className: "image-uploader-error-message", children: errorMessage })), description && (jsxRuntime.jsx("p", { className: "image-uploader-description", children: description }))] }));
};
ImageUploader.displayName = "ImageUploader";

exports.ImageUploader = ImageUploader;
