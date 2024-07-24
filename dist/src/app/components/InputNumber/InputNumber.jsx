import React, { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import "./InputNumber.scss";
var InputNumber = function (_a) {
    var max = _a.max, min = _a.min, placeholder = _a.placeholder, disabled = _a.disabled, label = _a.label, onChange = _a.onChange, error = _a.error, textError = _a.textError, propValue = _a.value;
    var _b = useState(function () {
        if (min !== undefined) {
            return min;
        }
        return undefined;
    }), numero = _b[0], setNumero = _b[1];
    useEffect(function () {
        if (propValue !== undefined) {
            var parsedValue = parseInt(propValue, 10);
            if (!isNaN(parsedValue)) {
                setNumero(parsedValue);
            }
        }
    }, [propValue]);
    var addNum = function () {
        setNumero(function (prevNumero) {
            if (prevNumero === undefined)
                return min !== undefined ? min : 1;
            var newNum = prevNumero + 1;
            if (max !== undefined && newNum > max) {
                return prevNumero;
            }
            if (onChange) {
                onChange(newNum.toString());
            }
            return newNum;
        });
    };
    var subtractNum = function () {
        setNumero(function (prevNumero) {
            if (prevNumero === undefined)
                return min !== undefined ? min : -1;
            var newNum = prevNumero - 1;
            if (min !== undefined && newNum < min) {
                return prevNumero;
            }
            if (onChange) {
                onChange(newNum.toString());
            }
            return newNum;
        });
    };
    var handleInputChange = function (event) {
        var inputValue = event.target.value;
        var newNum;
        if (inputValue === "") {
            // Se o input estiver vazio, defina como undefined
            newNum = undefined;
        }
        else {
            newNum = parseInt(inputValue, 10);
            if (!isNaN(newNum)) {
                if (max !== undefined && newNum > max) {
                    newNum = max;
                }
                else if (min !== undefined && newNum < min) {
                    newNum = min;
                }
            }
            else {
                newNum = min !== undefined ? min : undefined;
            }
        }
        setNumero(newNum);
        if (onChange) {
            onChange(newNum !== undefined ? newNum.toString() : "");
        }
    };
    return (<div className="input-number-root">
      {label && <label className="input-number-label">{label}</label>}
      <div className={"input-number ".concat(disabled ? "disabled" : "")}>
        <button disabled={disabled} className="subtract" onClick={subtractNum}>
          <Icon size="md" icon="remove"/>
        </button>
        <input className={"input ".concat(error ? "error" : "")} type="number" placeholder={placeholder} onChange={handleInputChange} value={numero !== undefined ? numero : ""} max={max} min={min} disabled={disabled} inputMode="numeric"/>
        <button disabled={disabled} className="add" onClick={addNum}>
          <Icon size="md" icon="add"/>
        </button>
      </div>
      {error && <div className="textError">{textError}</div>}
    </div>);
};
export default InputNumber;
