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
import React from "react";
import "./Brand.scss";
var Brand = function (_a) {
    var src = _a.src, alt = _a.alt, size = _a.size, rest = __rest(_a, ["src", "alt", "size"]);
    return (<div className={"brand-root ".concat(size)}>
    <img src={src} alt={alt} {...rest}/>
  </div>);
};
export default Brand;
