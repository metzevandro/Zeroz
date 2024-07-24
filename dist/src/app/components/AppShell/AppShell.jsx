import React from "react";
import "./AppShell.scss";
var AppShellContainer = function (_a) {
  var children = _a.children;
  return <div className="app-shell">{children}</div>;
};
export var AppShell = React.memo(AppShellContainer);
export default AppShell;
