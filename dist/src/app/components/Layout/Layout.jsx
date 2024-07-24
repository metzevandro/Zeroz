var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React from "react";
import "./Layout.scss";
var Layout = function (_a) {
  var children = _a.children,
    columns = _a.columns,
    rest = __rest(_a, ["children", "columns"]);
  var columnClassNames = {
    1: "one-column",
    "2 - Symmetric": "two-column-symmetric",
    "2 - Asymmetric": "two-column-asymmetric",
    "3 - Symmetric": "three-column-symmetric",
  };
  var columnClassName = columnClassNames[columns];
  return (
    <div {...rest} className={"layout ".concat(columnClassName)}>
      {children}
    </div>
  );
};
export default Layout;
