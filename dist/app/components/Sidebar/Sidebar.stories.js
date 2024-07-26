"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Sidebar = _interopRequireWildcard(require("./Sidebar"));
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
  title: "Components/Sidebar",
  component: _Sidebar["default"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Component</_blocks.Subtitle>
          <p>
            The <strong> Sidebar </strong> is the principal navigation to the
            pages.
          </p>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  args: {
    toggle: false
  },
  tags: ["autodocs"],
  argTypes: {
    toggle: {
      description: "Controls the sidebar visibility.",
      type: {
        name: "boolean"
      },
      defaultValue: {
        summary: false
      },
      table: {
        category: "Sidebar",
        type: {
          summary: "boolean"
        }
      }
    },
    setToggleSidebar: {
      description: "Function to control the sidebar visibility.",
      type: {
        name: "function"
      },
      table: {
        category: "Sidebar",
        type: {
          summary: "function"
        }
      }
    },
    titleSidebar: {
      description: "The title to display for the sidebar.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "Sidebar"
      },
      table: {
        category: "Sidebar",
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "Sidebar"
        }
      }
    },
    brand: {
      name: "Brand",
      description: "URL or path to the brand/logo image.",
      type: {
        name: "string"
      },
      defaultValue: {
        summary: "/logo-sm.svg"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "/logo-sm.svg"
        }
      }
    },
    brandSize: {
      name: "Brand Size",
      description: "The size of the brand/logo image.",
      control: {
        type: "select"
      },
      options: ["sm", "md", "lg"],
      defaultValue: {
        summary: "sm"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "'sm' | 'md' | 'lg'"
        },
        defaultValue: {
          summary: "sm"
        }
      }
    }
  }
};
var _default = exports["default"] = meta;
var Template = function Template(args) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenSidebar = _useState2[0],
    setIsOpenSidebar = _useState2[1];
  var toggleSidebar = function toggleSidebar() {
    setIsOpenSidebar(!isOpenSidebar);
  };
  return <>
      <_Sidebar.default brandSize={args.brandSize} brand={args.brand} setToggleSidebar={toggleSidebar} toggle={true}>
        <_Sidebar.SidebarTitle title={args.titleSidebar} />
        <_Sidebar.SidebarItem isActive={true} fillIcon={true} icon="home" title="Home" />
        <_Sidebar.SidebarItem fillIcon icon="settings" title="Settings">
          <_Sidebar.SidebarSubItem active={false} title="Sub Item 1" />
        </_Sidebar.SidebarItem>

        <_Sidebar.SidebarTitle title={args.titleSidebar} />
        <_Sidebar.SidebarItem fillIcon={true} icon="home" title="Home" />
        <_Sidebar.SidebarItem fillIcon icon="settings" title="Settings">
          <_Sidebar.SidebarSubItem active={false} title="Sub Item 1" />
          <_Sidebar.SidebarSubItem active={false} title="Sub Item 2" />
          <_Sidebar.SidebarSubItem active={false} title="Sub Item 3" />
        </_Sidebar.SidebarItem>
      </_Sidebar.default>
    </>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  titleSidebar: "Sidebar",
  brand: "/logo-sm.svg",
  brandSize: "sm"
};