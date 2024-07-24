import React, { useRef, useState } from "react";
import "./Tab.scss";
export var Tab = function (_a) {
    var content = _a.content;
    return (<div className="tab-root">
      <div>{content}</div>
    </div>);
};
var Tabs = function (_a) {
    var tabs = _a.tabs, widthFull = _a.widthFull;
    var _b = useState(0), activeTab = _b[0], setActiveTab = _b[1];
    var tabItemGroupRef = useRef(null);
    var handleTabClick = function (index) {
        setActiveTab(index);
        if (tabItemGroupRef.current) {
            var tabItemWidth = tabItemGroupRef.current.children[index].getBoundingClientRect().width;
            var scrollLeft = tabItemGroupRef.current.scrollLeft;
            var offsetLeft = tabItemGroupRef.current.children[index].getBoundingClientRect().left;
            var centerScroll = offsetLeft - (tabItemGroupRef.current.clientWidth - tabItemWidth) / 2;
            tabItemGroupRef.current.scrollTo({
                left: centerScroll + scrollLeft,
                behavior: "smooth",
            });
        }
    };
    var customizeWidthFull = function (widthFull) {
        if (widthFull === void 0) { widthFull = false; }
        if (widthFull) {
            return {
                width: "100%",
            };
        }
    };
    return (<div className="tab-root">
      <div className="tab-item-group" ref={tabItemGroupRef}>
        {tabs.map(function (tab, index) { return (<button style={customizeWidthFull(widthFull)} className={"tab-item ".concat(index === activeTab && "tab-item-active")} key={index} onClick={function () { return handleTabClick(index); }}>
            {tab.label}
          </button>); })}
      </div>
      <div className="tab-content">
        <Tab content={tabs[activeTab].content}/>
      </div>
    </div>);
};
export default Tabs;
