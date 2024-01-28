import React, { useEffect, useRef, useState } from "react";
import "./TableList.scss";

interface TableListProps {
  columns: string[];
  data: any[][];
  size: "sm" | "md";
}

const TableList: React.FC<TableListProps> = ({ columns, data, size }) => {
  const [isOverflowed, setIsOverflowed] = useState(false);
  const tableListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const tableListElement = tableListRef.current;

      if (tableListElement) {
        setIsOverflowed(
          tableListElement.scrollWidth > tableListElement.clientWidth
        );
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });

    const tableListElement = tableListRef.current;

    if (tableListElement) {
      resizeObserver.observe(tableListElement);

      checkOverflow();
    }

    return () => {
      if (tableListElement) {
        resizeObserver.unobserve(tableListElement);
      }
    };
  }, []);

  const transposedData = columns.map((_, columnIndex) =>
    data.map((row) => row[columnIndex])
  );

  return (
    <div
      className={`table-list-root ${isOverflowed ? "overflow-ativo" : ""}`}
      ref={tableListRef}
    >
      <div className="table">
      <div className="table-container">
        {columns.map((column, columnIndex) => (
          <div className="th" key={columnIndex}>
            {column}
          </div>
        ))}
        </div>
        <div className="table-container">
          {transposedData.map((column, columnIndex) => (
            <div key={columnIndex} className="table-column">
              {column.map((cell, cellIndex) => (
                <div className={`td ${size} border`} key={cellIndex}>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableList;
