import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./Aside.scss";
var Aside = function (_a) {
    var title = _a.title, isOpen = _a.isOpen, description = _a.description, toggleAside = _a.toggleAside, footer = _a.footer, content = _a.content;
    return (<>
      <div className={"aside-overlay ".concat(isOpen ? "open" : "hidden")} onClick={toggleAside}/>
      <div className={"aside-root ".concat(isOpen ? "open" : "")}>
        <div className="aside">
          <header className="aside-header">
            <div className="aside-title">
              <div>{title}</div>
              <ButtonIcon buttonType="plain" variant="primary" typeIcon="close" size="md" onClick={toggleAside}/>
            </div>
            <div className="aside-description">{description}</div>
          </header>
          <main className="aside-children">{content}</main>
          <footer className="aside-footer">{footer}</footer>
        </div>
      </div>
    </>);
};
export default Aside;
export var AsideContent = function (_a) {
    var children = _a.children;
    return <div className="aside-content">{children}</div>;
};
export var AsideFooter = function (_a) {
    var children = _a.children;
    return <div>{children}</div>;
};
