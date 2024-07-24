import React, { useState, useRef, useEffect } from "react";
import "./InputSelect.scss";
var InputSelect = function (_a) {
  var options = _a.options,
    label = _a.label,
    error = _a.error,
    errorMessage = _a.errorMessage,
    disabled = _a.disabled,
    onChange = _a.onChange,
    value = _a.value;
  var _b = useState(false),
    isOpen = _b[0],
    setIsOpen = _b[1];
  var _c = useState(value || undefined),
    selectedOption = _c[0],
    setSelectedOption = _c[1]; // Defina o valor inicial com a propriedade value
  useEffect(
    function () {
      // Atualiza o estado selectedOption quando a propriedade value mudar
      setSelectedOption(value || undefined);
    },
    [value],
  );
  var handleOptionChange = function (event) {
    var newValue = event.target.value;
    setSelectedOption(newValue);
    onChange(newValue);
  };
  var dropdownRef = useRef(null);
  var handleClickOutside = function (event) {
    if (
      isOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(
    function () {
      document.addEventListener("mousedown", handleClickOutside);
      return function () {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [isOpen],
  );
  return (
    <div className="input-select-root">
      <div className="input-select-label">{label}</div>
      <div className="input-select">
        <div
          className={"input-select-button "
            .concat(selectedOption && "option", " ")
            .concat(error && "error", " ")
            .concat(disabled && "disabled")}
        >
          <select
            className={"".concat(error && "select-error")}
            value={selectedOption || ""}
            onChange={handleOptionChange}
            disabled={disabled || error}
          >
            {options.map(function (option, index) {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {error && <p className="input-select-error-message">{errorMessage}</p>}
    </div>
  );
};
export default InputSelect;
