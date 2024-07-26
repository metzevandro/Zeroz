"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Welcome = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Welcome.scss");
var _package = _interopRequireDefault(require("../../../../package.json"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
require("../../styles.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Welcome = exports.Welcome = function Welcome() {
  return <>
      <img className="img" src="/favicon.svg" alt="" />
      <div className="welcome">
        <div>
          <h2>@design-system-zeroz</h2>
          <h4>{"v".concat(_package["default"].version)}</h4>
        </div>
        <div className="welcome-container">
          <a href="https://github.com/metzevandro/Zeroz" style={{
          display: "flex"
        }}>
            <p>Github</p>
            <_Icon.default icon="arrow_forward" size="sm" />
          </a>
          <a href="https://www.figma.com/file/oxLCV1zqGHyB88OG91z86s/ZeroZ-Design-System?type=design&node-id=21-4682&mode=design&t=a2ofpy8lnxJjcG1Z-0" style={{
          display: "flex"
        }}>
            <p>Figma</p>
            <_Icon.default icon="arrow_forward" size="sm" />
          </a>
        </div>
      </div>
    </>;
};