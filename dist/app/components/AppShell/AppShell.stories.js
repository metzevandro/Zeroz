"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../../styles.scss");
var _blocks = require("@storybook/blocks");
var _AppShell = _interopRequireDefault(require("./AppShell"));
var _Sidebar = _interopRequireWildcard(require("../Sidebar/Sidebar"));
var _Header = _interopRequireWildcard(require("../Header/Header"));
var _Dropdown = _interopRequireWildcard(require("../Dropdown/Dropdown"));
var _Page = _interopRequireDefault(require("../Page/Page"));
var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb/Breadcrumb"));
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
  title: "Templates/AppShell",
  component: _AppShell["default"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: function page() {
        return <>
          <_blocks.Title />
          <_blocks.Subtitle>Template</_blocks.Subtitle>
          <p>
            The <strong>AppShell</strong> template serves as the primary outer
            framework for an application, furnishing the fundamental structure
            to develop applications.
          </p>
          <div></div>
          <_blocks.Primary />
          <_blocks.Controls />
          <_blocks.Stories />
        </>;
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    username: {
      name: "Username",
      description: "Username displayed in the header profile.",
      type: {
        name: "string"
      },
      table: {
        category: "Data",
        type: {
          summary: "string"
        }
      }
    },
    pageName: {
      name: "Page Name",
      description: "Page name displayed in the header and sidebar item.",
      type: {
        name: "string"
      },
      table: {
        category: "Data",
        type: {
          summary: "string"
        }
      }
    },
    description: {
      name: "Page Description",
      description: "Page description displayed in the Page component.",
      type: {
        name: "string"
      },
      table: {
        category: "Data",
        type: {
          summary: "string"
        }
      }
    },
    sidebarItemIcon: {
      name: "Sidebar Icon",
      description: "Icon displayed in the sidebar item.",
      type: {
        name: "string"
      },
      table: {
        category: "Appearance",
        type: {
          summary: "string"
        }
      }
    },
    buttonContentPrimary: {
      name: "Primary Button Content",
      description: "Text displayed in the primary button.",
      type: {
        name: "string"
      },
      table: {
        category: "Actions",
        type: {
          summary: "string"
        }
      }
    },
    buttonContentSecondary: {
      name: "Secondary Button Content",
      description: "Text displayed in the secondary button.",
      type: {
        name: "string"
      },
      table: {
        category: "Actions",
        type: {
          summary: "string"
        }
      }
    },
    withActionPrimary: {
      name: "Enable Primary Action",
      description: "Determines if the primary action is enabled.",
      type: {
        name: "boolean"
      },
      table: {
        category: "Actions",
        type: {
          summary: "boolean"
        }
      }
    },
    withActionSecondary: {
      name: "Enable Secondary Action",
      description: "Determines if the secondary action is enabled.",
      type: {
        name: "boolean"
      },
      table: {
        category: "Actions",
        type: {
          summary: "boolean"
        }
      }
    },
    withBackButton: {
      name: "Enable Back Button",
      description: "Determines if the back button is present.",
      type: {
        name: "boolean"
      },
      table: {
        category: "Actions",
        type: {
          summary: "boolean"
        }
      }
    },
    onClick: {
      name: "On Click",
      description: "Callback function triggered when clicking on the header.",
      action: "clicked",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void"
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
      <_AppShell.default>
        <_Sidebar.default brandSize="sm" setToggleSidebar={toggleSidebar} brand="/logo-sm.svg" toggle={isOpenSidebar}>
          <_Sidebar.SidebarTitle title="Pages" />
          <_Sidebar.SidebarItem fillIcon={true} isActive={true} icon={args.sidebarItemIcon} title={args.pageName} />
        </_Sidebar.default>
        <_Header.default breadcrumb={<>
              <_Breadcrumb.default items={[{
          pageName: args.pageName,
          href: "/"
        }]} />
            </>} onClick={toggleSidebar}>
          <_Header.HeaderProfile letter={args.username} name={args.username}>
            <_Dropdown.default dropdown>
              <_Dropdown.DropdownTitle content="Settings" />
              <_Dropdown.DropdownItem content="Settings" typeIcon="settings" />
            </_Dropdown.default>
          </_Header.HeaderProfile>
        </_Header.default>
        <_Page.default namePage={args.pageName} buttonContentPrimary={args.buttonContentPrimary} buttonContentSecondary={args.buttonContentSecondary} withActionPrimary={args.withActionPrimary} withActionSecondary={args.withActionSecondary} withBackButton={args.withBackButton} description={args.description}></_Page.default>
      </_AppShell.default>
    </>;
};
var Default = exports.Default = Template.bind({});
Default.args = {
  username: "Username",
  description: "Description",
  pageName: "Page name",
  sidebarItemIcon: "home",
  withBackButton: true,
  withActionPrimary: true,
  withActionSecondary: true,
  buttonContentPrimary: "Button",
  buttonContentSecondary: "Button"
};