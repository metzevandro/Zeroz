"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Error = exports.Disabled = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../../styles.scss");
var _InputNumber = _interopRequireDefault(require("./InputNumber"));
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
  title: "Components/Input Number",
  component: _InputNumber["default"],
  parameters: {
    layout: "padded",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Number Input</strong> lets users type numbers and
            increase or decrease using icon buttons.{" "}
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    label: {
      control: "text",
      description: "The text label displayed above the input number field.",
      table: {
        category: "Text"
      }
    },
    placeholder: {
      control: "text",
      description: "The placeholder text displayed inside the input number field when it is empty.",
      table: {
        category: "Text"
      }
    },
    disabled: {
      control: "boolean",
      description: "If true, the input number field will be disabled and unclickable.",
      table: {
        category: "State"
      }
    },
    error: {
      control: "boolean",
      description: "If true, the input number field will be styled to indicate an error state.",
      table: {
        category: "State"
      }
    },
    textError: {
      control: "text",
      description: "The error message text displayed below the input number field when in an error state.",
      table: {
        category: "Text"
      }
    },
    max: {
      control: "number",
      description: "The maximum value allowed for the input number field.",
      table: {
        category: "Validation"
      }
    },
    min: {
      control: "number",
      description: "The minimum value allowed for the input number field.",
      table: {
        category: "Validation"
      }
    },
    initialValue: {
      control: "number",
      description: "The initial value set for the input number field.",
      table: {
        category: "Value"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  var _useState = (0, _react.useState)(args.initialValue.toString()),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var handleInputChange = function handleInputChange(value) {
    setInputValue(value);
  };
  return <_InputNumber.default label={args.label} placeholder={args.placeholder} max={args.max} min={args.min} value={inputValue} onChange={handleInputChange} disabled={args.disabled} error={args.error} textError={args.textError} />;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  initialValue: 0,
  max: 10,
  min: -10,
  disabled: false,
  error: false,
  textError: "Error"
};
var Disabled = exports.Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Label",
  placeholder: "Placeholder",
  initialValue: 0,
  max: 10,
  min: -10
};
var Error = exports.Error = Template.bind({});
Error.args = {
  error: true,
  textError: "Error",
  label: "Label",
  placeholder: "Placeholder",
  initialValue: 0,
  max: 10,
  min: -10
};