import "./DescriptionList.scss";
import React from "react";
var DescriptionList = function (_a) {
    var items = _a.items, direction = _a.direction;
    return (<>
      {items.map(function (item, index) { return (<React.Fragment key={index}>
          <div className={"description-list-root ".concat(direction)} style={index < items.length - 1
                ? {
                    borderBottom: "var(--s-border-width-hairline) solid var(--s-color-border-default)",
                }
                : undefined}>
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
        </React.Fragment>); })}
    </>);
};
export default DescriptionList;
