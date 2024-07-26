"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Aside = _interopRequireWildcard(require("./Aside"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
require("./Aside.scss");
var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));
var _Button = _interopRequireDefault(require("../Button/Button"));
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
  title: "Components/Aside",
  component: _Aside["default"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>Aside</strong> is an overlay component designed to
            display settings or additional content that complements the main
            information on the screen.
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
    buttonLabel: {
      name: "Button Label",
      description: "The label of the button that opens/closes the Aside component.",
      control: "text",
      table: {
        category: "Data",
        type: {
          summary: "string"
        }
      }
    },
    isOpen: {
      name: "Is Open",
      description: "Indicates whether the Aside component is open or closed.",
      control: "boolean",
      table: {
        category: "State",
        type: {
          summary: "boolean"
        }
      }
    },
    toggleAside: {
      name: "Toggle Aside",
      description: "Action to open and close the aside component.",
      action: "toggled",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void"
        }
      }
    },
    title: {
      name: "Title",
      description: "The title displayed in the Aside component.",
      control: "text",
      table: {
        category: "Data",
        type: {
          summary: "string"
        }
      }
    },
    description: {
      name: "Description",
      description: "The description displayed in the Aside component.",
      control: "text",
      table: {
        category: "Data",
        type: {
          summary: "string"
        }
      }
    },
    content: {
      name: "Content",
      description: "Content of the aside component.",
      table: {
        category: "Content",
        type: {
          summary: "React.ReactNode"
        }
      }
    },
    footer: {
      name: "Footer",
      description: "Footer of the aside component.",
      table: {
        category: "Content",
        type: {
          summary: "React.ReactNode"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  var _useState = (0, _react.useState)(args.isOpen),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenAside = _useState2[0],
    setIsOpenAside = _useState2[1];
  var toggleAside = function toggleAside() {
    setIsOpenAside(!isOpenAside);
  };
  return <div style={{
    height: "500px",
    padding: "var(--s-spacing-medium)"
  }}>
      <div style={{
      width: "min-content"
    }}>
        <_Button.default size="md" variant="primary" label={args.buttonLabel} onClick={toggleAside} />
      </div>
      <_Aside.default isOpen={isOpenAside || args.isOpen} toggleAside={toggleAside} title={args.title} description={args.description} content={<_Aside.AsideContent>
            <div className="slot">
              <_Icon.default icon="refresh" size="md" />
              Slot Content
            </div>
          </_Aside.AsideContent>} footer={<_Aside.AsideFooter>
            <div style={{
        width: "min-content"
      }}>
              <_ButtonGroup.default direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />
            </div>
          </_Aside.AsideFooter>} />
    </div>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  title: "Title aside here!",
  description: "Aside description",
  isOpen: false,
  buttonLabel: "Click here!"
};