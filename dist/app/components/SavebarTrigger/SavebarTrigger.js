"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SaveBar = _interopRequireDefault(require("../SaveBar/SaveBar"));
var _Progress = _interopRequireDefault(require("../Progress/Progress"));
require("./SavebarTrigger.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SavebarTrigger = function SavebarTrigger(_ref) {
  var children = _ref.children,
    formChanged = _ref.formChanged,
    handleSubmit = _ref.handleSubmit,
    label = _ref.label,
    handleCancelProp = _ref.handleCancel,
    labelSave = _ref.labelSave,
    labelCancel = _ref.labelCancel;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    tamanhoPai = _useState4[0],
    setTamanhoPai = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    saving = _useState6[0],
    setSaving = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    progressValue = _useState8[0],
    setProgressValue = _useState8[1]; // Progresso inicial é 0%
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    elapsedTime = _useState10[0],
    setElapsedTime = _useState10[1];
  (0, _react.useEffect)(function () {
    var updateTamanhoPai = function updateTamanhoPai() {
      var paiElement = document.querySelector(".header-root");
      if (paiElement) {
        setTamanhoPai(paiElement.offsetWidth);
      }
    };
    updateTamanhoPai();
    window.addEventListener("resize", updateTamanhoPai);
    return function () {
      window.removeEventListener("resize", updateTamanhoPai);
    };
  }, []);
  var estiloFilha = tamanhoPai ? {
    width: "calc(".concat(tamanhoPai, "px)")
  } : {};
  var handleInputChange = function handleInputChange(name, value) {
    setFormData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, name, value));
    });
  };
  var handleCancel = function handleCancel() {
    console.log("Alterações canceladas");
    setSaving(false);
    setProgressValue(0);
    setElapsedTime(null);
    // Chame a função handleCancel recebida por props
    handleCancelProp();
  };
  var handleSave = function handleSave() {
    setSaving(true); // Define saving como true ao clicar em Save
    var totalTime = 500; // Tempo total em milissegundos para alcançar 100%
    var incrementInterval = 50; // Intervalo de tempo em milissegundos entre cada incremento
    var totalIncrements = totalTime / incrementInterval; // Número total de incrementos
    var incrementAmount = 100 / totalIncrements; // Quantidade de incremento para cada intervalo

    var currentProgress = 0; // Inicializa o progresso atual como 0
    var intervalId = setInterval(function () {
      // Aumenta o valor do progresso gradualmente até 100%
      currentProgress += incrementAmount;
      setProgressValue(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(intervalId); // Limpa o intervalo quando o progresso atinge 100%
        setTimeout(function () {
          // Após um breve intervalo, redefine os estados para o estado inicial
          setSaving(false);
          setProgressValue(0);
        }, 500); // Define aqui o tempo em milissegundos antes de redefinir o estado
      }
      handleSubmit();
    }, incrementInterval); // Define aqui o intervalo de tempo entre cada aumento do progresso
  };
  var modifyChild = function modifyChild(child, index) {
    if (_react["default"].isValidElement(child)) {
      var name = child.props.name;
      return _react["default"].cloneElement(child, {
        onChange: function onChange(e) {
          handleInputChange(name, e.target.value);
        },
        value: formData[name] || "",
        // Atualiza o valor do input de acordo com o estado atual do formulário
        name: name
      });
    }
    return child;
  };
  var modifiedChildren = _react["default"].Children.map(children, modifyChild);
  return <div className="form-register-root">
      {saving && <div className="form-register-progress">
          <_Progress.default value={progressValue} />
        </div>}
      <div className="form-register-save-bar" style={estiloFilha}>
        {formChanged && !saving && <_SaveBar.default labelCancel={labelCancel} labelSave={labelSave} label={label} onClickCancel={handleCancel} onClickSave={handleSave} />}
      </div>
      <div>{modifiedChildren}</div>
    </div>;
};
var _default = exports["default"] = SavebarTrigger;