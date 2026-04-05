import React from "react";
import Skeleton from "../../Skeleton/Skeleton";

interface DataTableRowContentProps {
  children: React.ReactNode;
  skeleton: boolean;
  style?: React.CSSProperties;
}

/**
 * Célula individual de dados da tabela.
 * Exibe skeleton enquanto os dados estão carregando.
 */
export const DataTableRowContent: React.FC<DataTableRowContentProps> = ({
  children,
  skeleton,
  style,
}) => {
  return (
    <div className="data-table-row-content" style={style}>
      {skeleton ? <Skeleton height="24" width="80" /> : children}
    </div>
  );
};
