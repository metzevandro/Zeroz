"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
var react_1 = __importStar(require("react"));
require("./Tab.scss");
var Tab = function (_a) {
    var content = _a.content;
    return (react_1.default.createElement("div", { className: "tab-root" },
        react_1.default.createElement("div", null, content)));
};
exports.Tab = Tab;
var Tabs = function (_a) {
    var tabs = _a.tabs, widthFull = _a.widthFull;
    var _b = (0, react_1.useState)(0), activeTab = _b[0], setActiveTab = _b[1];
    var tabItemGroupRef = (0, react_1.useRef)(null);
    var handleTabClick = function (index) {
        if (!tabItemGroupRef.current) {
            return;
        }
        var tabItems = tabItemGroupRef.current.children;
        if (!tabItems || index >= tabItems.length) {
            return;
        }
        var activeTabItem = tabItems[index];
        if (!activeTabItem) {
            return;
        }
        var activeTabItemWidth = activeTabItem.getBoundingClientRect().width;
        var scrollLeft = tabItemGroupRef.current.scrollLeft;
        var activeTabItemOffsetLeft = activeTabItem.getBoundingClientRect().left;
        var centerScroll = activeTabItemOffsetLeft -
            (tabItemGroupRef.current.clientWidth - activeTabItemWidth) / 2;
        tabItemGroupRef.current.scrollTo({
            left: centerScroll + scrollLeft,
            behavior: "smooth",
        });
    };
    var customizeWidthFull = function (widthFull) {
        if (widthFull === void 0) { widthFull = false; }
        if (widthFull) {
            return {
                width: "100%",
            };
        }
    };
    return (react_1.default.createElement("div", { className: "tab-root" },
        react_1.default.createElement("div", { className: "tab-item-group", ref: tabItemGroupRef }, tabs.map(function (tab, index) { return (react_1.default.createElement("button", { style: customizeWidthFull(widthFull), className: "tab-item ".concat(index === activeTab && "tab-item-active"), key: index, onClick: function () {
                setActiveTab(index);
                handleTabClick(index);
            } }, tab.label)); })),
        react_1.default.createElement("div", { className: "tab-content" }, tabs[activeTab] && react_1.default.createElement(exports.Tab, { content: tabs[activeTab].content }))));
};
exports.default = Tabs;
