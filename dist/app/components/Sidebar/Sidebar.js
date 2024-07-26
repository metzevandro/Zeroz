"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SidebarTitle = exports.SidebarSubItem = exports.SidebarItem = void 0;
require("./Sidebar.scss");
var _Brand = _interopRequireDefault(require("../Brand/Brand"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon/ButtonIcon"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Sidebar = function Sidebar(_ref) {
  var brand = _ref.brand,
    brandSize = _ref.brandSize,
    children = _ref.children,
    toggle = _ref.toggle,
    setToggleSidebar = _ref.setToggleSidebar;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeItem = _useState2[0],
    setActiveItem = _useState2[1];
  var closeSidebar = function closeSidebar() {
    setToggleSidebar(false);
  };
  return <>
      <div className={"Sidebar ".concat(toggle ? "open" : "close")}>
        <div className="brand">
          <_Brand.default alt="Logo-marca" src={brand} size={brandSize} />
        </div>
        <div className="Sidebar-list">
          {_react["default"].Children.map(children, function (child, index) {
          return _react["default"].isValidElement(child) && child.type === SidebarItem && child.props.children ? _react["default"].cloneElement(child, {
            isActive: activeItem === String(index),
            onClick: function onClick() {
              return setActiveItem(activeItem === String(index) ? null : String(index));
            }
          }) : child;
        })}
        </div>
      </div>
      <div onClick={closeSidebar} className={"Sidebar-overlay ".concat(toggle ? "open" : "close")}>
        <_ButtonIcon.default variant="secondary" onClick={closeSidebar} buttonType="default" size="md" typeIcon="close" />
      </div>
    </>;
};
var SidebarTitle = exports.SidebarTitle = function SidebarTitle(_ref2) {
  var title = _ref2.title;
  return <h1 className="Sidebar-list-title">{title}</h1>;
};
var SidebarItem = exports.SidebarItem = function SidebarItem(_ref3) {
  var title = _ref3.title,
    icon = _ref3.icon,
    fillIcon = _ref3.fillIcon,
    children = _ref3.children,
    onClick = _ref3.onClick,
    isActive = _ref3.isActive;
  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === "Enter" && children) {
      onClick === null || onClick === void 0 || onClick();
    }
  };
  return <>
      <div className={"Sidebar-item ".concat(children ? "with-sub-item" : "", " ").concat(children ? "" : isActive ? "active" : "")} onClick={onClick} tabIndex={0} onKeyDown={handleKeyPress}>
        <div className="Sidebar-item-header">
          <_Icon.default size="sm" icon={icon} fill={fillIcon} />
          <div>{title}</div>
        </div>
        {children && <div onKeyDown={handleKeyPress} onClick={onClick} className={"".concat(isActive ? "Sidebar-item-with-action-open" : "Sidebar-item-with-action-close")}>
            <_Icon.default size="sm" icon="keyboard_arrow_down" />
          </div>}
      </div>
      {isActive && <div>{children}</div>}
    </>;
};
var SidebarSubItem = exports.SidebarSubItem = function SidebarSubItem(_ref4) {
  var title = _ref4.title,
    onClick = _ref4.onClick,
    active = _ref4.active;
  return <>
      <div className={"Sidebar-sub-item ".concat(active && "active")} tabIndex={0} onClick={onClick}>
        <div style={active === true ? {
        opacity: 1
      } : undefined}>
          <_Icon.default size="sm" icon="subdirectory_arrow_right" fill={true} />
        </div>
        <div>{title}</div>
      </div>
    </>;
};
var _default = exports["default"] = Sidebar;