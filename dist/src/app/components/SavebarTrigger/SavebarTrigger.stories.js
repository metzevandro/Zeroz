"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = __importStar(require("react"));
var blocks_1 = require("@storybook/blocks");
require("../../styles.scss");
var SavebarTrigger_1 = __importDefault(require("./SavebarTrigger"));
var Input_1 = __importDefault(require("../Input/Input"));
var AppShell_1 = __importDefault(require("../AppShell/AppShell"));
var Sidebar_1 = __importStar(require("../Sidebar/Sidebar"));
var Header_1 = __importStar(require("../Header/Header"));
var Breadcrumb_1 = require("../Breadcrumb/Breadcrumb");
var Dropdown_1 = __importStar(require("../Dropdown/Dropdown"));
var Page_1 = __importDefault(require("../Page/Page"));
var InputNumber_1 = __importDefault(require("../InputNumber/InputNumber"));
var Layout_1 = __importDefault(require("../Layout/Layout"));
var DataPicker_1 = __importDefault(require("../DataPicker/DataPicker"));
var InputSelect_1 = __importDefault(require("../InputSelect/InputSelect"));
var FileUploader_1 = __importDefault(require("../FileUploader/FileUploader"));
var ImageUploader_1 = __importDefault(require("../ImageUploader/ImageUploader"));
var InputCheckbox_1 = __importDefault(require("../InputCheckbox/InputCheckbox"));
var InputRadioButton_1 = __importDefault(require("../InputRadioButton/InputRadioButton"));
var Slider_1 = __importDefault(require("../Slider/Slider"));
var Switch_1 = __importDefault(require("../Switch/Switch"));
var InputTime_1 = __importDefault(require("../InputTime/InputTime"));
var InputTextArea_1 = __importDefault(require("../InputTextArea/InputTextArea"));
var meta = {
    title: "Templates/Savebar Trigger",
    component: SavebarTrigger_1.default,
    parameters: {
        layout: "fullscreen",
        docs: {
            page: function () { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(blocks_1.Title, null),
                react_1.default.createElement(blocks_1.Subtitle, null, "Template"),
                react_1.default.createElement("p", null,
                    "The ",
                    react_1.default.createElement("strong", null, "SavebarTrigger"),
                    " template is designed to monitor changes to inputs within its scope. This template serves as a proactive observer, ensuring timely detection and response to changes made, facilitating ongoing management of data updates, and associated save or cancel processes."),
                react_1.default.createElement(blocks_1.Primary, null),
                react_1.default.createElement(blocks_1.Controls, null),
                react_1.default.createElement(blocks_1.Stories, null))); },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        formChanged: {
            name: "Form Changed",
            description: "Determines if the form content has been changed.",
            type: { name: "boolean" },
            table: {
                type: { summary: "boolean" },
                category: "events",
            },
        },
        handleCancel: {
            name: "Handle Cancel",
            description: "Callback function to handle cancel action.",
            action: "clicked",
            table: {
                type: { summary: "function" },
                category: "events",
            },
        },
        handleSubmit: {
            name: "Handle Submit",
            description: "Callback function to handle submit action.",
            action: "clicked",
            table: {
                type: { summary: "function" },
                category: "events",
            },
        },
        label: {
            name: "Label",
            description: "Text to display for the savebar trigger.",
            type: { name: "string" },
            defaultValue: { summary: "Unsaved changes" },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Unsaved changes" },
                category: "content",
            },
        },
        labelCancel: {
            name: "Label Cancel",
            description: "Text for the cancel button in the savebar.",
            type: { name: "string" },
            defaultValue: { summary: "Cancel" },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Cancel" },
                category: "content",
            },
        },
        labelSave: {
            name: "Label Save",
            description: "Text for the save button in the savebar.",
            type: { name: "string" },
            defaultValue: { summary: "Save" },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Save" },
                category: "content",
            },
        },
    },
};
exports.default = meta;
var Template = function (args) {
    var _a, _b;
    var _c = (0, react_1.useState)(false), isOpenSidebar = _c[0], setIsOpenSidebar = _c[1];
    var _d = (0, react_1.useState)({
        ImageUploader: null,
        FileUploader: null,
    }), formValuesFile = _d[0], setFormValuesFile = _d[1];
    var _e = (0, react_1.useState)({
        Input: "",
        "Input Select": "Option 1",
        "Input Number": "0",
        Checkbox: false,
        Switch: false,
        "Radio Button": false,
        "Input do DataPicker": "",
        ColorPicker: "#FFFFFF",
        Slider: "0",
        "Input Time": "",
        "Text Area": "",
    }), formValues = _e[0], setFormValues = _e[1];
    var _f = (0, react_1.useState)({}), initialValues = _f[0], setInitialValues = _f[1];
    var _g = (0, react_1.useState)(false), formChanged = _g[0], setFormChanged = _g[1];
    (0, react_1.useEffect)(function () {
        setInitialValues(formValues);
    }, []);
    var handleInputChange = function (name, value) {
        var _a;
        setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[name] = value, _a)));
    };
    var handleFileChange = function (name, files) {
        var _a, _b;
        if (files && files.length > 0) {
            setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[name] = files, _a)));
        }
        else {
            setFormValues(__assign(__assign({}, formValues), (_b = {}, _b[name] = null, _b)));
        }
    };
    var handleDateChange = function (name, newDate) {
        var _a;
        var day = newDate.getDate().toString().padStart(2, "0");
        var month = (newDate.getMonth() + 1).toString().padStart(2, "0");
        var year = newDate.getFullYear().toString();
        var formattedDate = "".concat(day, "/").concat(month, "/").concat(year);
        setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[name] = formattedDate, _a)));
    };
    var handleSliderChange = function (value) {
        setFormValues(__assign(__assign({}, formValues), { Slider: value }));
    };
    var handleSubmit = function () {
        console.log("Formulário enviado!");
        setInitialValues(formValues);
        setFormChanged(false);
    };
    var handleCheckboxChange = function (checked) {
        setFormValues(__assign(__assign({}, formValues), { Checkbox: checked }));
    };
    var handleRadioChange = function (checked) {
        setFormValues(__assign(__assign({}, formValues), { "Radio Button": checked }));
    };
    var handleSwitchChange = function (checked) {
        setFormValues(__assign(__assign({}, formValues), { Switch: checked }));
    };
    var options = ["Option 1", "Option 2", "Option 3"];
    (0, react_1.useEffect)(function () {
        var isFormChanged = Object.keys(formValues).some(function (key) { return initialValues[key] !== formValues[key]; });
        setFormChanged(isFormChanged);
    }, [formValues, initialValues]);
    var handleCancel = function () {
        console.log("Initial Values:", initialValues);
        setFormValues(initialValues);
        setFormChanged(false);
    };
    (0, react_1.useEffect)(function () {
        console.log("Form Values after cancel:", formValues);
    }, [formValues]);
    var toggleSidebar = function () {
        setIsOpenSidebar(!isOpenSidebar);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(AppShell_1.default, null,
            react_1.default.createElement(Sidebar_1.default, { brandSize: "sm", setToggleSidebar: toggleSidebar, brand: "/logo-sm.svg", toggle: isOpenSidebar },
                react_1.default.createElement(Sidebar_1.SidebarTitle, { title: "Sidebar" }),
                react_1.default.createElement(Sidebar_1.SidebarItem, { icon: "settings", fillIcon: true, isActive: true, title: "Page Name" })),
            react_1.default.createElement(Header_1.default, { breadcrumb: react_1.default.createElement(Breadcrumb_1.Breadcrumb, { items: [] }), onClick: toggleSidebar },
                react_1.default.createElement(Header_1.HeaderProfile, { name: "Username" },
                    react_1.default.createElement(Dropdown_1.default, { dropdown: true },
                        react_1.default.createElement(Dropdown_1.DropdownTitle, { content: "Settings" }),
                        react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Item 1" }),
                        react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Item 2" }),
                        react_1.default.createElement(Dropdown_1.DropdownItem, { content: "Settings", typeIcon: "settings" })))),
            react_1.default.createElement(Page_1.default, { namePage: "Page Name", buttonContentSecondary: "Button", withActionSecondary: true, buttonContentPrimary: "Button", withActionPrimary: true, withBackButton: true },
                react_1.default.createElement(SavebarTrigger_1.default, { labelCancel: "Cancel", labelSave: "Save", label: "Unsaved changes", formChanged: formChanged, handleCancel: handleCancel, handleSubmit: handleSubmit },
                    react_1.default.createElement(Layout_1.default, { columns: "2 - Symmetric" },
                        react_1.default.createElement(Input_1.default, { label: "Input", placeholder: "Placeholder", value: String(formValues["Input"]), onChange: function (e) {
                                if (e.target.value !== null) {
                                    handleInputChange("Input", e.target.value);
                                }
                            } }),
                        react_1.default.createElement(InputNumber_1.default, { label: "Input Number", placeholder: "Placeholder", min: 0, max: 10, value: String(formValues["Input Number"]), onChange: function (value) {
                                handleInputChange("Input Number", value);
                            } }),
                        react_1.default.createElement(InputTime_1.default, { label: "Input Time", placeholder: "Placeholder", value: String(formValues["Input Time"]), onChange: function (value) {
                                handleInputChange("Input Time", value);
                            } }),
                        react_1.default.createElement(InputSelect_1.default, { label: "Input Select", value: String(formValues["Input Select"]), onChange: function (value) {
                                handleInputChange("Input Select", value);
                            }, options: options }),
                        react_1.default.createElement(DataPicker_1.default, { label: "Data Picker", placeholder: "Placeholder", date: String(formValues["Input do DataPicker"]), onDateChange: function (value) {
                                return handleDateChange("Input do DataPicker", value);
                            } }),
                        react_1.default.createElement(Slider_1.default, { value: String(formValues.Slider), max: 10, min: 0, step: 1, label: "Slider", onChange: handleSliderChange }),
                        react_1.default.createElement(InputCheckbox_1.default, { label: "Checkbox", onUpdate: function (checked) { return handleCheckboxChange(checked); }, modelValue: (_a = formValues["Checkbox"]) !== null && _a !== void 0 ? _a : false }),
                        react_1.default.createElement(InputRadioButton_1.default, { label: "Radio Button", onChange: function (checked) { return handleRadioChange(checked); }, checked: typeof formValues["Radio Button"] === "boolean"
                                ? formValues["Radio Button"]
                                : false }),
                        react_1.default.createElement(Switch_1.default, { label: "Switch", onUpdate: function (checked) { return handleSwitchChange(checked); }, modelValue: (_b = formValues["Switch"]) !== null && _b !== void 0 ? _b : false }),
                        react_1.default.createElement(FileUploader_1.default, { buttonLabel: "Add File", title: "File Uploader", typeIconButton: "upload_file", maxFileSize: 10, multiple: true, value: formValuesFile["FileUploader"], onChange: function (files) {
                                return handleFileChange("FileUploader", files);
                            } }),
                        react_1.default.createElement(ImageUploader_1.default, { title: "Image Uploader", proportion: "1/1", labelDropzone: "Drop your images here", iconDropzone: "add_a_photo", multiple: true, value: formValuesFile["ImageUploader"], onChange: function (files) {
                                return handleFileChange("ImageUploader", files);
                            } }),
                        react_1.default.createElement(InputTextArea_1.default, { label: "Text Area", placeholder: "Placeholder", value: String(formValues["Text Area"]), onChange: function (value) { return handleInputChange("Text Area", value); } })))))));
};
exports.Default = Template.bind({});
exports.Default.args = {};
