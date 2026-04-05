import React from "react";
import Pagination from "../../Pagination/Pagination";

interface DataTableFooterProps {
  currentPage: number;
  totalPages: number;
  disabledLeft: boolean;
  disabledRight: boolean;
  skeleton: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}

/**
 * Footer com controles de paginação.
 */
export const DataTableFooter: React.FC<DataTableFooterProps> = ({
  currentPage,
  totalPages,
  disabledLeft,
  disabledRight,
  skeleton,
  onClickLeft,
  onClickRight,
}) => {
  const label = `Mostrando ${totalPages === 0 ? 0 : currentPage} de ${totalPages}`;

  return (
    <div className="data-table-footer">
      <Pagination
        label={label}
        variant="leftLabel"
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
        skeleton={skeleton}
      />
    </div>
  );
};
