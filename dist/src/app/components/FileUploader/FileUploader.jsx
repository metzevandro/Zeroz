var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useEffect, useRef } from "react";
import "./FileUploader.scss";
import Loading from "../Loading/Loading";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
var FileUploader = function (_a) {
    var title = _a.title, description = _a.description, multiple = _a.multiple, disabled = _a.disabled, maxFileSize = _a.maxFileSize, buttonLabel = _a.buttonLabel, typeIconButton = _a.typeIconButton, onChange = _a.onChange, value = _a.value;
    var fileInputRef = useRef(null);
    var _b = useState([]), selectedFiles = _b[0], setSelectedFiles = _b[1];
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var maxFileSizeBytes = maxFileSize !== undefined ? maxFileSize * 1024 * 1024 : undefined;
    useEffect(function () {
        // Atualiza os arquivos selecionados quando o valor de fora muda
        if (value && value.length > 0) {
            var updatedFiles_1 = [];
            Array.from(value).forEach(function (file) {
                var hasError = maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes;
                var errorMessage = hasError
                    ? "O tamanho do arquivo \"".concat(file.name, "\" excede o limite de ").concat(maxFileSize, " MB.")
                    : null;
                updatedFiles_1.push({
                    file: file,
                    hasError: hasError,
                    errorMessage: errorMessage,
                });
                if (!hasError) {
                    // Se não houver erro, processa o arquivo
                    handleFile(file);
                }
            });
            setSelectedFiles(updatedFiles_1);
        }
        else {
            setSelectedFiles([]); // Limpa a lista de arquivos se o valor for nulo ou vazio
        }
    }, [value, maxFileSizeBytes]);
    var handleFileChange = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var files, updatedFiles_2, updatedFileList_1;
        return __generator(this, function (_a) {
            files = event.target.files;
            if (files && files.length > 0) {
                updatedFiles_2 = [];
                Array.from(files).forEach(function (file) {
                    var hasError = maxFileSizeBytes !== undefined && file.size > maxFileSizeBytes;
                    var errorMessage = hasError
                        ? "O tamanho do arquivo \"".concat(file.name, "\" excede o limite de ").concat(maxFileSize, " MB.")
                        : null;
                    updatedFiles_2.push({
                        file: file,
                        hasError: hasError,
                        errorMessage: errorMessage,
                    });
                    if (!hasError) {
                        // Se não houver erro, processa o arquivo
                        handleFile(file);
                    }
                });
                // Limpar o valor do campo de entrada de arquivo
                event.target.value = "";
                if (multiple === false) {
                    setSelectedFiles(updatedFiles_2);
                }
                if (multiple === true) {
                    setSelectedFiles(function (prevFiles) { return __spreadArray(__spreadArray([], prevFiles, true), updatedFiles_2, true); });
                }
                updatedFileList_1 = new DataTransfer();
                updatedFiles_2.forEach(function (fileObj) {
                    updatedFileList_1.items.add(fileObj.file);
                });
                // Chama a função onChange com o novo FileList
                onChange(updatedFileList_1.files.length > 0 ? updatedFileList_1.files : null);
            }
            return [2 /*return*/];
        });
    }); };
    var handleFile = function (file) {
        setIsLoading(true); // Corrigido aqui
        var reader = new FileReader();
        reader.onload = function () {
            setIsLoading(false);
        };
        reader.onerror = function () {
            setIsLoading(false);
            // Tratar erro aqui se necessário
        };
        reader.readAsDataURL(file);
    };
    var handleButtonClick = function () {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    var handleRemoveFile = function (index) {
        var updatedFiles = __spreadArray([], selectedFiles, true);
        var removedFile = updatedFiles.splice(index, 1)[0];
        setSelectedFiles(updatedFiles);
        var updatedFileList = updatedFiles.map(function (fileObj) { return fileObj.file; });
        var updatedFileListAsFileList = new DataTransfer();
        updatedFileList.forEach(function (file) {
            updatedFileListAsFileList.items.add(file);
        });
        onChange(updatedFileListAsFileList.files.length > 0
            ? updatedFileListAsFileList.files
            : null);
    };
    var _d = useState(null), tamanhoPai = _d[0], setTamanhoPai = _d[1];
    useEffect(function () {
        var updateTamanhoPai = function () {
            var paiElement = document.querySelector(".file-uploader");
            if (paiElement) {
                setTamanhoPai(paiElement.offsetWidth);
            }
        };
        updateTamanhoPai();
        window.addEventListener("resize", updateTamanhoPai);
        return function () {
            window.removeEventListener("resize", updateTamanhoPai);
        };
    }, []);
    var estiloFilha = tamanhoPai
        ? { maxWidth: "calc(".concat(tamanhoPai, "px - 60px)") }
        : {};
    return (<>
      <div className="file-uploader">
        <div className="file-uploader-header">
          <h1>{title}</h1>
          <div className="file-uploader-button">
            <input disabled={disabled} type="file" ref={fileInputRef} multiple={!!multiple} style={{ display: "none" }} onChange={handleFileChange}/>
            <Button variant="primary" disabled={disabled} onClick={handleButtonClick} label={buttonLabel} typeIcon={typeIconButton} size="md"/>
          </div>
        </div>
        <div className="file-uploader-footer">
          <p>{description}</p>
          {selectedFiles.length > 0 && (<ul className="file-uploader-items">
              {selectedFiles.map(function (fileObj, index) { return (<li className={"file-uploader-item ".concat(fileObj.hasError ? "file-uploader-item-error" : "")} key={index}>
                  <div className={"file-uploaded ".concat(fileObj.hasError ? "file-uploaded-error" : "")}>
                    <p style={estiloFilha}>{fileObj.file.name}</p>
                    <p className="file-uploaded-icon">
                      {isLoading && <Loading variant="default"/>}
                      <div className="file-uploader-icon-error">
                        {fileObj.hasError && (<Icon icon="error_outline" size="sm"/>)}
                      </div>
                      <ButtonIcon variant="primary" buttonType="plain" onClick={function () { return handleRemoveFile(index); }} size="sm" typeIcon="close"/>
                    </p>
                  </div>
                  {fileObj.hasError && fileObj.errorMessage && (<p className="file-uploader-error">
                      {fileObj.errorMessage}
                    </p>)}
                </li>); })}
            </ul>)}
        </div>
      </div>
    </>);
};
export default FileUploader;
