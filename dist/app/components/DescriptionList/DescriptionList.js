"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./DescriptionList.scss");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DescriptionList = function DescriptionList(_ref) {
  var items = _ref.items,
    direction = _ref.direction;
  return <>
      {items.map(function (item, index) {
      return <_react.default.Fragment key={index}>
          <div className={"description-list-root ".concat(direction)} style={index < items.length - 1 ? {
          borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)"
        } : undefined}>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
        </_react.default.Fragment>;
    })}
    </>;
};
var _default = exports["default"] = DescriptionList;