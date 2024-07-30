import "./Breadcrumb.scss";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import React from "react";

export interface BreadcrumbItem {
  pageName: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link content={item.pageName} href={item.href} />
          {index < items.length - 1 && (
            <Icon icon="keyboard_arrow_right" size="sm" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
