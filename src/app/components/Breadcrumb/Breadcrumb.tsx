import "./Breadcrumb.scss";
import Link from "../Link/Link";
import Icon from "../Icon/Icon";
import React from "react";

interface BreadcrumbRootProps {
  children?: React.ReactNode;
  pageName: string;
}

const BreadcrumbRoot: React.FC<BreadcrumbRootProps> = ({
  children,
  pageName,
}) => {
  return (
    <>
      <div className="breadcrumb">
        <BreadcrumbInitial pageName={pageName} />
        {children}
      </div>
    </>
  );
};

const BreadcrumbInitial: React.FC<BreadcrumbProps> = ({ pageName }) => {
  return (
    <>
      <div className="breadcrumb">
        <Link content={pageName} href="" />
      </div>
    </>
  );
};

interface BreadcrumbProps {
  pageName: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageName }) => {
  return (
    <>
      <div className="breadcrumb">
        <Icon icon="keyboard_arrow_right" size="sm" />
        <Link content={pageName} href="" />
      </div>
    </>
  );
};

export default BreadcrumbRoot;
