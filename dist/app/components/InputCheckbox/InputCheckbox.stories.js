"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NoEvents = exports.Indeterminate = exports.Disabled = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _InputCheckbox = _interopRequireDefault(require("./InputCheckbox"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var meta = {
  title: "Components/Input Checkbox",
  component: _InputCheckbox["default"],
  parameters: {
    layout: "centered",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Checkboxes</strong> are used when there are multiple
            items to select in a list or when users need to show they agree to
            specific terms or services.{" "}
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
    modelValue: {
      control: "text",
      description: "The bound value of the checkbox, used for two-way data binding.",
      table: {
        category: "Value"
      }
    },
    value: {
      control: "text",
      description: "The current value of the checkbox. Typically a boolean indicating whether it is checked.",
      table: {
        category: "Value"
      }
    },
    label: {
      control: "text",
      description: "The text label displayed next to the checkbox.",
      table: {
        category: "Appearance"
      }
    },
    id: {
      control: "text",
      description: "The unique identifier for the checkbox input element.",
      table: {
        category: "Attributes"
      }
    },
    name: {
      control: "text",
      description: "The name attribute for the checkbox input element, used to identify the checkbox in form submissions.",
      table: {
        category: "Attributes"
      }
    },
    required: {
      control: "boolean",
      description: "Specifies whether the checkbox must be checked before submitting the form.",
      table: {
        category: "Validation"
      }
    },
    indeterminate: {
      control: "boolean",
      description: 'If true, the checkbox will be in an indeterminate state, often used to indicate a "partially selected" state in a list.',
      table: {
        category: "State"
      }
    },
    noEvents: {
      control: "boolean",
      description: "When true, the checkbox will not trigger any events.",
      table: {
        category: "Behavior"
      }
    },
    disabled: {
      control: "boolean",
      description: "If true, the checkbox will be disabled and unclickable.",
      table: {
        category: "State"
      }
    },
    onUpdate: {
      action: "onUpdate",
      description: "Callback function that is called when the checkbox value changes.",
      table: {
        category: "Events"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setChecked = _useState2[1];
  var handleInputCheckboxChange = function handleInputCheckboxChange() {
    setChecked(function (prevChecked) {
      return !prevChecked;
    });
    if (props.onUpdate) {
      props.onUpdate(!isChecked);
    }
  };
  return <_InputCheckbox.default {...props} value={isChecked} onUpdate={handleInputCheckboxChange} />;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  label: "Label",
  disabled: false,
  indeterminate: false
};
var Disabled = exports.Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  disabled: true
};
var Indeterminate = exports.Indeterminate = Template.bind({});
Indeterminate.args = {
  label: "Label",
  indeterminate: true
};
var NoEvents = exports.NoEvents = Template.bind({});
NoEvents.args = {
  label: "Label",
  noEvents: true
};