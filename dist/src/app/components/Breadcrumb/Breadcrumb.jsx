import "./Breadcrumb.scss";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import React from "react";
export var Breadcrumb = function (_a) {
    var items = _a.items;
    return (<div className="breadcrumb">
      {items.map(function (item, index) { return (<React.Fragment key={index}>
          <Link content={item.pageName} href={item.href}/>
          {index < items.length - 1 && (<Icon icon="keyboard_arrow_right" size="sm"/>)}
        </React.Fragment>); })}
    </div>);
};
export default Breadcrumb;
