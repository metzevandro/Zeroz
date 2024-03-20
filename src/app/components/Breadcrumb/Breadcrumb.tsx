import "./Breadcrumb.scss";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import React from "react";

interface BreadcrumbRootProps {
  children?: React.ReactNode;
  pageName: string;
  href: string;
}

const BreadcrumbRoot: React.FC<BreadcrumbRootProps> = ({
  children,
  pageName,
  href,
}) => {
  return (
    <>
      <div className="breadcrumb">
        <BreadcrumbInitial pageName={pageName} href={href} />
        {children}
      </div>
    </>
  );
};

const BreadcrumbInitial: React.FC<BreadcrumbProps> = ({ pageName, href }) => {
  return (
    <>
      <div className="breadcrumb">
        <Link content={pageName} href={href} />
      </div>
    </>
  );
};

interface BreadcrumbProps {
  pageName: string;
  href: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageName, href }) => {
  return (
    <>
      <div className="breadcrumb">
        <Icon icon="keyboard_arrow_right" size="sm" />
        <Link content={pageName} href={href} />
      </div>
    </>
  );
};

export default BreadcrumbRoot;
