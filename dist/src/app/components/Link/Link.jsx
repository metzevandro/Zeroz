var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import "./Link.scss";
import React from "react";
var Link = function (_a) {
    var content = _a.content, disabled = _a.disabled, rest = __rest(_a, ["content", "disabled"]);
    return (<>
      <a className={"link ".concat(disabled ? "disabled" : "")} {...rest}>
        {content}
      </a>
    </>);
};
export default Link;
