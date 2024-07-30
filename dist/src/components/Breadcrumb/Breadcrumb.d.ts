import "./Breadcrumb.scss";
import React from "react";
export interface BreadcrumbItem {
  pageName: string;
  href: string;
}
interface BreadcrumbProps {
  items: BreadcrumbItem[];
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
