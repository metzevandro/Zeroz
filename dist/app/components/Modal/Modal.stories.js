"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Dismissible = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Modal = _interopRequireWildcard(require("./Modal"));
var _Button = _interopRequireDefault(require("../Button/Button"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));
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
  title: "Components/Modal",
  component: _Modal["default"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: function page() {
        return <div>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong> Modals </strong> are overlays strategically designed to
            focus the user's attention on a specific task or piece of
            information.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </div>;
      }
    }
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the modal.",
      table: {
        category: "Content"
      }
    },
    description: {
      control: "text",
      description: "The description text displayed in the modal.",
      table: {
        category: "Content"
      }
    },
    dismissible: {
      control: "boolean",
      description: "If true, the modal can be dismissed by the user.",
      table: {
        category: "State"
      }
    },
    content: {
      control: "object",
      description: "The content of the modal.",
      table: {
        category: "Content"
      }
    },
    footer: {
      control: "object",
      description: "The footer of the modal.",
      table: {
        category: "Content"
      }
    },
    hideModal: {
      action: "hideModal",
      description: "Callback function to hide the modal.",
      table: {
        category: "Actions"
      }
    },
    isOpen: {
      control: "boolean",
      description: "If true, the modal is open.",
      table: {
        category: "State"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleModal = function toggleModal() {
    setIsOpen(!isOpen);
  };
  return <div style={{
    height: "100vh",
    padding: "var(--s-spacing-small)"
  }}>
      <div style={{
      width: "min-content"
    }}>
        <_Button.default size="md" variant="primary" label="Click here!" onClick={toggleModal} />
      </div>

      <_Modal.default dismissible={args.dismissible} description={args.description} hideModal={toggleModal} title={args.title} isOpen={isOpen} content={args.content} footer={args.footer} />
    </div>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  dismissible: false,
  content: <_Modal.ContentModal>
      <div className="slot">
        <_Icon.default icon="refresh" size="md" />
        Slot Content
      </div>
    </_Modal.ContentModal>,
  footer: <_Modal.FooterModal>
      <div style={{
      width: "min-content"
    }}>
        <_ButtonGroup.default direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />
      </div>
    </_Modal.FooterModal>
};
var Dismissible = exports.Dismissible = Template.bind({});
Dismissible.args = {
  title: "Title",
  description: "Description",
  dismissible: true,
  content: <_Modal.ContentModal>
      <div className="slot">
        <_Icon.default icon="refresh" size="md" />
        Slot Content
      </div>
    </_Modal.ContentModal>,
  footer: <_Modal.FooterModal>
      <div style={{
      width: "min-content"
    }}>
        <_ButtonGroup.default direction="row" variantFirstButton="primary" variantSecondButton="secondary" contentFirstButton="Button" contentSecondButton="Button" />
      </div>
    </_Modal.FooterModal>
};