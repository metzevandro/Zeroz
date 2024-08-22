import "./DescriptionList.scss";
import React from "react";
interface DescriptionItem {
    title: string;
    description?: string;
}
interface DescriptionListProps {
    items: DescriptionItem[];
    direction: "row" | "column";
}
declare const DescriptionList: React.FC<DescriptionListProps>;
export default DescriptionList;
