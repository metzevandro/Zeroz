"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _blocks = require("@storybook/blocks");
require("../../styles.scss");
var _SavebarTrigger = _interopRequireDefault(require("./SavebarTrigger"));
var _Input = _interopRequireDefault(require("../Input/Input"));
var _AppShell = _interopRequireDefault(require("../AppShell/AppShell"));
var _Sidebar = _interopRequireWildcard(require("../Sidebar/Sidebar"));
var _Header = _interopRequireWildcard(require("../Header/Header"));
var _Breadcrumb = require("../Breadcrumb/Breadcrumb");
var _Dropdown = _interopRequireWildcard(require("../Dropdown/Dropdown"));
var _Page = _interopRequireDefault(require("../Page/Page"));
var _InputNumber = _interopRequireDefault(require("../InputNumber/InputNumber"));
var _Layout = _interopRequireDefault(require("../Layout/Layout"));
var _DataPicker = _interopRequireDefault(require("../DataPicker/DataPicker"));
var _InputSelect = _interopRequireDefault(require("../InputSelect/InputSelect"));
var _FileUploader = _interopRequireDefault(require("../FileUploader/FileUploader"));
var _ImageUploader = _interopRequireDefault(require("../ImageUploader/ImageUploader"));
var _InputCheckbox = _interopRequireDefault(require("../InputCheckbox/InputCheckbox"));
var _InputRadioButton = _interopRequireDefault(require("../InputRadioButton/InputRadioButton"));
var _Slider = _interopRequireDefault(require("../Slider/Slider"));
var _Switch = _interopRequireDefault(require("../Switch/Switch"));
var _InputTime = _interopRequireDefault(require("../InputTime/InputTime"));
var _InputTextArea = _interopRequireDefault(require("../InputTextArea/InputTextArea"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var meta = {
  title: "Templates/Savebar Trigger",
  component: _SavebarTrigger["default"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Template</_blocks.Subtitle>
          <p>
            The <strong>SavebarTrigger</strong> template is designed to monitor
            changes to inputs within its scope. This template serves as a
            proactive observer, ensuring timely detection and response to
            changes made, facilitating ongoing management of data updates, and
            associated save or cancel processes.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    formChanged: {
      name: "Form Changed",
      description: "Determines if the form content has been changed.",
      type: {
        name: "boolean"
      },
      table: {
        type: {
          summary: "boolean"
        },
        category: "events"
      }
    },
    handleCancel: {
      name: "Handle Cancel",
      description: "Callback function to handle cancel action.",
      action: "clicked",
      table: {
        type: {
          summary: "function"
        },
        category: "events"
      }
    },
    handleSubmit: {
      name: "Handle Submit",
      description: "Callback function to handle submit action.",
      action: "clicked",
      table: {
        type: {
          summary: "function"
        },
        category: "events"
      }
    },
    label: {
      name: "Label",
      description: "Text to display for the savebar trigger.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "Unsaved changes"
      },
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "Unsaved changes"
        },
        category: "content"
      }
    },
    labelCancel: {
      name: "Label Cancel",
      description: "Text for the cancel button in the savebar.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "Cancel"
      },
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "Cancel"
        },
        category: "content"
      }
    },
    labelSave: {
      name: "Label Save",
      description: "Text for the save button in the savebar.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "Save"
      },
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "Save"
        },
        category: "content"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  var _formValues$Checkbox, _formValues$Switch;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenSidebar = _useState2[0],
    setIsOpenSidebar = _useState2[1];
  var _useState3 = (0, _react.useState)({
      ImageUploader: null,
      FileUploader: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formValuesFile = _useState4[0],
    setFormValuesFile = _useState4[1];
  var _useState5 = (0, _react.useState)({
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
      "Text Area": ""
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formValues = _useState6[0],
    setFormValues = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    initialValues = _useState8[0],
    setInitialValues = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    formChanged = _useState10[0],
    setFormChanged = _useState10[1];
  (0, _react.useEffect)(function () {
    setInitialValues(formValues);
  }, []);
  var handleInputChange = function handleInputChange(name, value) {
    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, _defineProperty({}, name, value)));
  };
  var handleFileChange = function handleFileChange(name, files) {
    if (files && files.length > 0) {
      setFormValues(_objectSpread(_objectSpread({}, formValues), {}, _defineProperty({}, name, files)));
    } else {
      setFormValues(_objectSpread(_objectSpread({}, formValues), {}, _defineProperty({}, name, null)));
    }
  };
  var handleDateChange = function handleDateChange(name, newDate) {
    var day = newDate.getDate().toString().padStart(2, "0");
    var month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    var year = newDate.getFullYear().toString();
    var formattedDate = "".concat(day, "/").concat(month, "/").concat(year);
    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, _defineProperty({}, name, formattedDate)));
  };
  var handleSliderChange = function handleSliderChange(value) {
    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, {
      Slider: value
    }));
  };
  var handleSubmit = function handleSubmit() {
    console.log("Formulário enviado!");
    setInitialValues(formValues);
    setFormChanged(false);
  };
  var handleCheckboxChange = function handleCheckboxChange(checked) {
    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, {
      Checkbox: checked
    }));
  };
  var handleRadioChange = function handleRadioChange(checked) {
    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, {
      "Radio Button": checked
    }));
  };
  var handleSwitchChange = function handleSwitchChange(checked) {
    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, {
      Switch: checked
    }));
  };
  var options = ["Option 1", "Option 2", "Option 3"];
  (0, _react.useEffect)(function () {
    var isFormChanged = Object.keys(formValues).some(function (key) {
      return initialValues[key] !== formValues[key];
    });
    setFormChanged(isFormChanged);
  }, [formValues, initialValues]);
  var handleCancel = function handleCancel() {
    console.log("Initial Values:", initialValues);
    setFormValues(initialValues);
    setFormChanged(false);
  };
  (0, _react.useEffect)(function () {
    console.log("Form Values after cancel:", formValues);
  }, [formValues]);
  var toggleSidebar = function toggleSidebar() {
    setIsOpenSidebar(!isOpenSidebar);
  };
  return <>
      <_AppShell.default>
        <_Sidebar.default brandSize="sm" setToggleSidebar={toggleSidebar} brand="/logo-sm.svg" toggle={isOpenSidebar}>
          <_Sidebar.SidebarTitle title="Sidebar"></_Sidebar.SidebarTitle>
          <_Sidebar.SidebarItem icon="settings" fillIcon={true} isActive={true} title="Page Name" />
        </_Sidebar.default>
        <_Header.default breadcrumb={<_Breadcrumb.Breadcrumb items={[]} />} onClick={toggleSidebar}>
          <_Header.HeaderProfile name="Username">
            <_Dropdown.default dropdown>
              <_Dropdown.DropdownTitle content="Settings" />
              <_Dropdown.DropdownItem content="Item 1" />
              <_Dropdown.DropdownItem content="Item 2" />
              <_Dropdown.DropdownItem content="Settings" typeIcon="settings" />
            </_Dropdown.default>
          </_Header.HeaderProfile>
        </_Header.default>
        <_Page.default namePage="Page Name" buttonContentSecondary="Button" withActionSecondary buttonContentPrimary="Button" withActionPrimary withBackButton>
          <_SavebarTrigger.default labelCancel="Cancel" labelSave="Save" label="Unsaved changes" formChanged={formChanged} handleCancel={handleCancel} handleSubmit={handleSubmit}>
            <_Layout.default columns="2 - Symmetric">
              <_Input.default label="Input" placeholder="Placeholder" value={String(formValues["Input"])} onChange={function (e) {
              if (e.target.value !== null) {
                handleInputChange("Input", e.target.value);
              }
            }} />
              <_InputNumber.default label="Input Number" placeholder="Placeholder" min={0} max={10} value={String(formValues["Input Number"])} onChange={function (value) {
              handleInputChange("Input Number", value);
            }} />
              <_InputTime.default label="Input Time" placeholder="Placeholder" value={String(formValues["Input Time"])} onChange={function (value) {
              handleInputChange("Input Time", value);
            }} />
              <_InputSelect.default label="Input Select" value={String(formValues["Input Select"])} onChange={function (value) {
              handleInputChange("Input Select", value);
            }} options={options} />
              <_DataPicker.default label="Data Picker" placeholder="Placeholder" date={String(formValues["Input do DataPicker"])} onDateChange={function (value) {
              return handleDateChange("Input do DataPicker", value);
            }} />
              <_Slider.default value={String(formValues.Slider)} max={10} min={0} step={1} label="Slider" onChange={handleSliderChange} />
              <_InputCheckbox.default label="Checkbox" onUpdate={function (checked) {
              return handleCheckboxChange(checked);
            }} modelValue={(_formValues$Checkbox = formValues["Checkbox"]) !== null && _formValues$Checkbox !== void 0 ? _formValues$Checkbox : false} />

              <_InputRadioButton.default label="Radio Button" onChange={function (checked) {
              return handleRadioChange(checked);
            }} checked={typeof formValues["Radio Button"] === "boolean" ? formValues["Radio Button"] : false} />
              <_Switch.default label="Switch" onUpdate={function (checked) {
              return handleSwitchChange(checked);
            }} modelValue={(_formValues$Switch = formValues["Switch"]) !== null && _formValues$Switch !== void 0 ? _formValues$Switch : false} />
              <_FileUploader.default buttonLabel="Add File" title="File Uploader" typeIconButton="upload_file" maxFileSize={10} multiple={true} value={formValuesFile["FileUploader"]} onChange={function (files) {
              return handleFileChange("FileUploader", files);
            }} />
              <_ImageUploader.default title="Image Uploader" proportion="1/1" labelDropzone={"Drop your images here"} iconDropzone={"add_a_photo"} multiple={true} value={formValuesFile["ImageUploader"]} onChange={function (files) {
              return handleFileChange("ImageUploader", files);
            }} />
              <_InputTextArea.default label="Text Area" placeholder="Placeholder" value={String(formValues["Text Area"])} onChange={function (value) {
              return handleInputChange("Text Area", value);
            }} />
            </_Layout.default>
          </_SavebarTrigger.default>
        </_Page.default>
      </_AppShell.default>
    </>;
};
var Default = exports.Default = Template.bind({});
Default.args = {};