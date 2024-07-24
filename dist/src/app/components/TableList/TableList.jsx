import React, { useEffect, useRef, useState } from "react";
import "./TableList.scss";
var TableList = function (_a) {
  var columns = _a.columns,
    data = _a.data,
    size = _a.size;
  var _b = useState(false),
    isOverflowed = _b[0],
    setIsOverflowed = _b[1];
  var tableListRef = useRef(null);
  useEffect(function () {
    var checkOverflow = function () {
      var tableListElement = tableListRef.current;
      if (tableListElement) {
        setIsOverflowed(
          tableListElement.scrollWidth > tableListElement.clientWidth,
        );
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
    return data.map(function (row) {
      return row[columnIndex];
    });
  });
  return (
    <div
      className={"table-list-root ".concat(
        isOverflowed ? "overflow-ativo" : "",
      )}
      ref={tableListRef}
    >
      <div className="table">
        <div className="table-container">
          {columns.map(function (column, columnIndex) {
            return (
              <div className="th" key={columnIndex}>
                {column}
              </div>
            );
          })}
        </div>
        <div className="table-container">
          {transposedData.map(function (column, columnIndex) {
            return (
              <div key={columnIndex} className="table-column">
                {column.map(function (cell, cellIndex) {
                  return (
                    <div
                      className={"td ".concat(size, " border")}
                      key={cellIndex}
                    >
                      {cell}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TableList;
