import React, { useState, useRef } from "react";
import Icon from "../Icon/Icon";
import "./InputSearch.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
var InputSearch = function (props) {
    var _a = useState(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState(false), isActive = _b[0], setIsActive = _b[1];
    var inputRef = useRef(null);
    var handleChange = function (event) {
        var value = event.target.value;
        setInputValue(value);
        if (props.onChange) {
            props.onChange(value);
        }
    };
    var handleInputClick = function () {
        setIsActive(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    var handleInputBlur = function () {
        setIsActive(false);
    };
    var handleClearClick = function () {
        setInputValue("");
        if (props.onChange) {
            props.onChange("");
        }
    };
    return (<div className={"input-search-root ".concat(props.disabled ? "disabled" : "")} onClick={handleInputClick}>
      <div className="input-search">
        <Icon size="md" icon="search"/>
        <input disabled={props.disabled} size={1000} type="text" placeholder={props.placeholder} value={inputValue} onChange={handleChange} onBlur={handleInputBlur} ref={inputRef}/>
        {inputValue && (<button className={"input-search-button-close ".concat(inputValue && "visible")} onClick={handleClearClick}>
            <ButtonIcon variant="primary" typeIcon="close" buttonType="plain" size="sm"/>
          </button>)}
      </div>
    </div>);
};
export default InputSearch;
