import React from "react";
import "./DataTable.scss";
interface DataTableProps {
    columns: string[];
    data: {
        id: string;
        [key: string]: any;
    }[];
    expandedData?: Array<{
        id: string;
        [key: string]: React.ReactNode;
    }>;
    selectable?: boolean;
    expandable?: boolean;
    itemPerPage: number;
    pagesText: string;
    inputPlaceholder: string;
    typeIconSecondButton: string;
    labelSecondButton: string;
    selectableLabelSecondButton: string;
    selectableIconSecondButton: string;
    filters?: {
        [key: string]: string[];
    };
    asideTitle: string;
    firstButtonLabelAside: string;
    secondButtonLabelAside: string;
    titleNoDataMessage: string;
    descriptionNoDataMessage: string;
    titleNoDataFilteredMessage: string;
    labelButtonNoDataFilteredMessage: string;
    descriptionNoDataFilteredMessage: string;
}
declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
