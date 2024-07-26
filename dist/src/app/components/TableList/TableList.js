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
var react_1 = __importStar(require("react"));
require("./TableList.scss");
var TableList = function (_a) {
    var columns = _a.columns, data = _a.data, size = _a.size;
    var _b = (0, react_1.useState)(false), isOverflowed = _b[0], setIsOverflowed = _b[1];
    var tableListRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var checkOverflow = function () {
            var tableListElement = tableListRef.current;
            if (tableListElement) {
                setIsOverflowed(tableListElement.scrollWidth > tableListElement.clientWidth);
            }
        };
        var resizeObserver = new ResizeObserver(function () {
            checkOverflow();
        });
        var tableListElement = tableListRef.current;
        if (tableListElement) {
            resizeObserver.observe(tableListElement);
            checkOverflow();
        }
        return function () {
            if (tableListElement) {
                resizeObserver.unobserve(tableListElement);
            }
        };
    }, []);
    var transposedData = columns.map(function (_, columnIndex) {
        return data.map(function (row) { return row[columnIndex]; });
    });
    return (react_1.default.createElement("div", { className: "table-list-root ".concat(isOverflowed ? "overflow-ativo" : ""), ref: tableListRef },
        react_1.default.createElement("div", { className: "table" },
            react_1.default.createElement("div", { className: "table-container" }, columns.map(function (column, columnIndex) { return (react_1.default.createElement("div", { className: "th", key: columnIndex }, column)); })),
            react_1.default.createElement("div", { className: "table-container" }, transposedData.map(function (column, columnIndex) { return (react_1.default.createElement("div", { key: columnIndex, className: "table-column" }, column.map(function (cell, cellIndex) { return (react_1.default.createElement("div", { className: "td ".concat(size, " border"), key: cellIndex }, cell)); }))); })))));
};
exports.default = TableList;
