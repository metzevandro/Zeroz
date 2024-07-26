"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AsideFooter = exports.AsideContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon/ButtonIcon"));
require("./Aside.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Aside = function Aside(_ref) {
  var title = _ref.title,
    isOpen = _ref.isOpen,
    description = _ref.description,
    toggleAside = _ref.toggleAside,
    footer = _ref.footer,
    content = _ref.content;
  return <>
      <div className={"aside-overlay ".concat(isOpen ? "open" : "hidden")} onClick={toggleAside} />
      <div className={"aside-root ".concat(isOpen ? "open" : "")}>
        <div className="aside">
          <header className="aside-header">
            <div className="aside-title">
              <div>{title}</div>
              <_ButtonIcon.default buttonType="plain" variant="primary" typeIcon="close" size="md" onClick={toggleAside} />
            </div>
            <div className="aside-description">{description}</div>
          </header>
          <main className="aside-children">{content}</main>
          <footer className="aside-footer">{footer}</footer>
        </div>
      </div>
    </>;
};
var _default = exports["default"] = Aside;
var AsideContent = exports.AsideContent = function AsideContent(_ref2) {
  var children = _ref2.children;
  return <div className="aside-content">{children}</div>;
};
var AsideFooter = exports.AsideFooter = function AsideFooter(_ref3) {
  var children = _ref3.children;
  return <div>{children}</div>;
};