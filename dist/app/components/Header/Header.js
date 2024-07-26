"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HeaderProfile = void 0;
require("./Header.scss");
var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _react = _interopRequireWildcard(require("react"));
var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon/ButtonIcon"));
var _Skeleton = _interopRequireDefault(require("../Skeleton/Skeleton"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Header = function Header(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    breadcrumb = _ref.breadcrumb;
  return <>
      <header className="header-root">
        <div>
          <div className="header-action">
            <_ButtonIcon.default variant="primary" buttonType="plain" size="md" typeIcon="menu" onClick={onClick} />
          </div>
          <div className="header-breadcrumb">{breadcrumb}</div>
        </div>
        {children}
      </header>
    </>;
};
var HeaderProfile = exports.HeaderProfile = function HeaderProfile(_ref2) {
  var name = _ref2.name,
    children = _ref2.children,
    avatar_src = _ref2.avatar_src,
    skeleton = _ref2.skeleton,
    letter = _ref2.letter;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropDownOpen = _useState2[0],
    setIsDropDownOpen = _useState2[1];
  var dropdownRef = (0, _react.useRef)(null);
  var toggleDropDown = function toggleDropDown() {
    setIsDropDownOpen(!isDropDownOpen);
  };
  var handleClickOutside = function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return <>
      <div ref={dropdownRef} className="profile-root">
        <div className="profile" tabIndex={0} onClick={toggleDropDown}>
          <div className="avatar">
            <_Avatar.default skeleton={skeleton} size="md" src={avatar_src} letter={letter} />
          </div>
          {skeleton ? <>
              <_Skeleton.default height="24" width="70" />
            </> : <>
              <h1 className="name">{name}</h1>
            </>}

          <div className={"icon ".concat(isDropDownOpen ? "open" : "close")}>
            <_Icon.default size="sm" icon="keyboard_arrow_down" />
          </div>
        </div>
        <div className={"dropdown ".concat(isDropDownOpen ? "open" : "close")}>
          {children}
        </div>
      </div>
    </>;
};
var _default = exports["default"] = Header;