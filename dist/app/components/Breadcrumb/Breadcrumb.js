"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Breadcrumb = void 0;
require("./Breadcrumb.scss");
var _Link = _interopRequireDefault(require("../Link/Link"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Breadcrumb = exports.Breadcrumb = function Breadcrumb(_ref) {
  var items = _ref.items;
  return <div className="breadcrumb">
      {items.map(function (item, index) {
      return <_react.default.Fragment key={index}>
          <_Link.default content={item.pageName} href={item.href} />
          {index < items.length - 1 && <_Icon.default icon="keyboard_arrow_right" size="sm" />}
        </_react.default.Fragment>;
    })}
    </div>;
};
var _default = exports["default"] = Breadcrumb;