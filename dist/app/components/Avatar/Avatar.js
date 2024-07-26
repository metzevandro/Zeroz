"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
require("./Avatar.scss");
var _react = _interopRequireDefault(require("react"));
var _Skeleton = _interopRequireDefault(require("../Skeleton/Skeleton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Avatar = function Avatar(_ref) {
  var _getLetter;
  var size = _ref.size,
    src = _ref.src,
    skeleton = _ref.skeleton,
    letter = _ref.letter;
  var getSize = function getSize(size) {
    switch (size) {
      case "sm":
        return 24;
      case "md":
        return 40;
      case "lg":
        return 64;
      default:
        return 32;
    }
  };
  var sizeInPixels = getSize(size);
  var getLetter = function getLetter(letter) {
    if (letter && letter.includes(" ")) {
      var _letter$split = letter.split(" "),
        _letter$split2 = _slicedToArray(_letter$split, 2),
        firstName = _letter$split2[0],
        lastName = _letter$split2[1];
      return "".concat(firstName === null || firstName === void 0 ? void 0 : firstName.charAt(0)).concat(lastName === null || lastName === void 0 ? void 0 : lastName.charAt(0));
    } else if (letter && letter.length > 1) {
      return letter.charAt(0);
    }
    return letter;
  };
  return <div className="avatar">
      {skeleton ? <_Skeleton.default height={"".concat(sizeInPixels)} circle={true} width={"".concat(sizeInPixels)} /> : <>
          {src ? <label className="avatar-image">
              <img className={size} src={src} alt="Avatar" />
            </label> : <>
              {letter ? <label className={"avatar-letter ".concat(size)}>
                  {(_getLetter = getLetter(letter)) === null || _getLetter === void 0 ? void 0 : _getLetter.toLocaleUpperCase()}
                </label> : <label className={"avatar-icon ".concat(size)}>
                  <_Icon.default size={size} icon="person" />
                </label>}
            </>}
        </>}
    </div>;
};
var _default = exports["default"] = Avatar;