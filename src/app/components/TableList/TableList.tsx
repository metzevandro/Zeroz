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

  return (
    <div
      className={`table-list ${isOverflowed ? "overflow-ativo" : ""}`}
      ref={tableListRef}
    >
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td className={`${size} border`} key={cellIndex}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
