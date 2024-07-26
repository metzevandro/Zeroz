"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Loading = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Header = _interopRequireWildcard(require("./Header"));
var _Dropdown = _interopRequireWildcard(require("../Dropdown/Dropdown"));
var _Breadcrumb = require("../Breadcrumb/Breadcrumb");
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var meta = {
  title: "Components/Header",
  component: _Header["default"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong>header</strong> lets users view notifications, access
            menus, and navigate to the home page by clicking the logo. It's
            always there at the top of the screen.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  argTypes: {
    letter: {
      description: "Gets the first letter of the first and last name from the username property of the HeaderProfile component.",
      control: {
        type: "text"
      },
      table: {
        category: "HeaderProfile"
      }
    },
    breadcrumb: {
      description: "Breadcrumb items for navigation.",
      control: {
        type: "object"
      },
      table: {
        category: "Header"
      }
    },
    children: {
      description: "Content for the header profile including username and dropdown.",
      control: {
        type: "text"
      },
      table: {
        category: "HeaderProfile"
      }
    },
    onClick: {
      description: "Toggles the sidebar for mobile or tablet views.",
      table: {
        category: "Header"
      }
    },
    skeleton: {
      description: "Displays the skeleton loader.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Header"
      }
    },
    username: {
      description: "The name of the user.",
      control: {
        type: "text"
      },
      table: {
        category: "HeaderProfile"
      }
    },
    avatar_src: {
      description: "The source URL for the user's avatar image.",
      control: {
        type: "text"
      },
      table: {
        category: "HeaderProfile"
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenHeader = _useState2[0],
    setIsOpenHeader = _useState2[1];
  var toggleHeader = function toggleHeader() {
    setIsOpenHeader(!isOpenHeader);
  };
  return <div style={{
    height: "300px"
  }}>
      <_Header.default skeleton={args.skeleton} breadcrumb={<_Breadcrumb.Breadcrumb items={[{
      pageName: "Home",
      href: "/"
    }]} />} onClick={toggleHeader}>
        <_Header.HeaderProfile skeleton={args.skeleton} name={args.username} letter={args.letter} avatar_src={args.avatar_src}>
          <_Dropdown.default dropdown>
            <_Dropdown.DropdownTitle content="Settings" />
            <_Dropdown.DropdownItem content="Item 1" />
            <_Dropdown.DropdownItem content="Item 2" />
            <_Dropdown.DropdownItem content="Settings" typeIcon="settings" />
          </_Dropdown.default>
        </_Header.HeaderProfile>
      </_Header.default>
    </div>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  username: "Username",
  avatar_src: "",
  skeleton: false
};
var Loading = exports.Loading = Template.bind({});
Loading.args = {
  username: "Username",
  avatar_src: "",
  skeleton: true
};