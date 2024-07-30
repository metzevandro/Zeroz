import React from "react";
import "./Page.scss";
interface PageProps {
    children?: React.ReactNode;
    namePage: string;
    withBackButton?: boolean;
    withActionPrimary?: boolean;
    withActionSecondary?: boolean;
    buttonContentPrimary?: string;
    buttonContentSecondary?: string;
    onClickActionPrimary?: () => void;
    onClickActionSecondary?: () => void;
    onClickBackButton?: () => void;
    iconButtonPrimary?: string;
    iconButtonSecondary?: string;
    skeletonButtonPrimary?: boolean;
    skeletonButtonSecondary?: boolean;
    description?: React.ReactNode;
}
declare const Page: React.FC<PageProps>;
export default Page;
