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
import React, { useState, useRef, useEffect, } from "react";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";
import "./ImageUploader.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
var ImageUploader = function (_a) {
    var proportion = _a.proportion, maxFileSize = _a.maxFileSize, description = _a.description, title = _a.title, disabled = _a.disabled, multiple = _a.multiple, labelDropzone = _a.labelDropzone, iconDropzone = _a.iconDropzone, onChange = _a.onChange, value = _a.value;
    var _b = useState(value !== undefined ? value : null), selectedFiles = _b[0], setSelectedFiles = _b[1];
    var _c = useState([]), imagePreviews = _c[0], setImagePreviews = _c[1];
    var _d = useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var fileInputRef = useRef(null);
    var maxFileSizeBytes = maxFileSize !== undefined ? maxFileSize * 1024 * 1024 : undefined;
    var _e = useState(null), errorMessage = _e[0], setErrorMessage = _e[1];
    var _f = useState(false), fileRemoved = _f[0], setFileRemoved = _f[1];
    useEffect(function () {
        setSelectedFiles(value !== undefined ? value : null);
    }, [value]);
    useEffect(function () {
        if (!selectedFiles) {
            setImagePreviews([]);
            return;
        }
        var readerPromises = [];
        Array.from(selectedFiles).forEach(function (file) {
            readerPromises.push(new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function () {
                    if (typeof reader.result === "string") {
                        resolve(reader.result);
                    }
                    else {
                        reject(new Error("Failed to convert file to data URL."));
                    }
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            }));
        });
        Promise.all(readerPromises)
            .then(function (results) {
            setImagePreviews(results);
        })
            .catch(function (error) {
            console.error("Error loading image previews:", error);
            setImagePreviews([]);
        });
    }, [selectedFiles]);
    var handleButtonClick = function () {
        var _a;
        (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleFileChange = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var files, updatedFiles_1, promises, newFileList_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = event.target.files;
                    setIsLoading(true);
                    setFileRemoved(false);
                    if (!(files && files.length > 0)) return [3 /*break*/, 5];
                    updatedFiles_1 = selectedFiles ? Array.from(selectedFiles) : [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    promises = Array.from(files).map(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (file.size > (maxFileSizeBytes || Infinity)) {
                                        setErrorMessage("File ".concat(file.name, " exceeds the maximum file size limit."));
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, handleFile(file)];
                                case 1:
                                    _a.sent();
                                    updatedFiles_1.push(file);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(promises)];
                case 2:
                    _a.sent();
                    newFileList_1 = new DataTransfer();
                    updatedFiles_1.forEach(function (file) { return newFileList_1.items.add(file); });
                    setSelectedFiles(newFileList_1.files);
                    onChange(newFileList_1.files);
                    event.target.value = "";
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setErrorMessage("Error handling files.");
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleFile = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        setImagePreviews(function (prevPreviews) { return __spreadArray(__spreadArray([], prevPreviews, true), [
                            reader.result,
                        ], false); });
                        resolve();
                    };
                    reader.onerror = function () {
                        reject(new Error("Failed to read the file."));
                    };
                    reader.readAsDataURL(file);
                })];
        });
    }); };
    var handleRemoveFile = function (index) {
        var updatedFiles = Array.from(selectedFiles || []);
        updatedFiles.splice(index, 1);
        var dataTransfer = new DataTransfer();
        updatedFiles.forEach(function (file) { return dataTransfer.items.add(file); });
        var newFileList = dataTransfer.files;
        setSelectedFiles(newFileList);
        onChange(newFileList);
        setImagePreviews(function (prevPreviews) {
            var newPreviews = __spreadArray([], prevPreviews, true);
            newPreviews.splice(index, 1);
            return newPreviews;
        });
        setFileRemoved(true);
    };
    var handleDragOver = function (event) {
        event.preventDefault();
    };
    var handleDrop = function (event) {
        event.preventDefault();
        var files = event.dataTransfer.files;
        if (files && files.length > 0) {
            handleFile(files[0]);
        }
    };
    var handleCancel = function () {
        setSelectedFiles(null);
        setImagePreviews([]);
        setErrorMessage(null);
    };
    return (<div className="image-uploader" onDragOver={handleDragOver} onDrop={handleDrop}>
      <p className="image-uploader-title">{title}</p>
      <div className="image-previews">
        {selectedFiles && imagePreviews && !isLoading && (<>
            {Array.from(selectedFiles).map(function (file, index) { return (<div key={index} className="image-uploader-item">
                <div className="delete-button-container">
                  <div className="delete-button">
                    <ButtonIcon size="sm" buttonType="default" variant="secondary" typeIcon="delete" onClick={function () { return handleRemoveFile(index); }} disabled={disabled}/>
                  </div>
                </div>
                <img style={{
                    aspectRatio: "calc(".concat(proportion, ")"),
                }} src={imagePreviews && imagePreviews[index]
                    ? imagePreviews[index]
                    : ""} alt="Preview" className="image-preview"/>
              </div>); })}
          </>)}
        {(multiple || !selectedFiles || selectedFiles.length === 0) && (<div className={"image-uploader-content ".concat(disabled ? "image-uploader-content-disabled" : "", " ").concat((!multiple && fileRemoved) ||
                (multiple && (!selectedFiles || selectedFiles.length === 0))
                ? ""
                : "hidden")} style={{
                aspectRatio: "calc(".concat(proportion, ")"),
            }}>
            <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} disabled={disabled} style={{ display: "none" }} multiple={multiple}/>
            <div className={"".concat(isLoading ? "hidden" : "uploader-item")}>
              <button onClick={handleButtonClick} style={{ aspectRatio: "calc(".concat(proportion, ")") }} className={"image-uploader-dropzone ".concat(disabled ? "image-uploader-dropzone-disabled" : "")}>
                <Icon icon={iconDropzone} size="md"/>
                <p>{labelDropzone}</p>
              </button>
            </div>
            {isLoading && (<div className="loading-screen">
                <Loading variant="default"/>
              </div>)}
          </div>)}
      </div>
      {errorMessage && (<p className="image-uploader-error-message">{errorMessage}</p>)}
      {description && (<p className="image-uploader-description">{description}</p>)}
    </div>);
};
export default ImageUploader;
