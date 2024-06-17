import React from "react";
import "./Page.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";

type layout = "1" | "2 - Symmetric" | "2 - Asymmetric" | "3 - Symmetric";

interface PageProps {
  columnLayout: layout;
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
  skeletonButtonSecondary: boolean;
}

const Page: React.FC<PageProps> = ({
  columnLayout,
  children,
  namePage,
  withBackButton,
  withActionPrimary,
  withActionSecondary,
  buttonContentPrimary,
  buttonContentSecondary,
  onClickActionPrimary,
  onClickActionSecondary,
  onClickBackButton,
  iconButtonPrimary,
  iconButtonSecondary,
  skeletonButtonPrimary,
  skeletonButtonSecondary,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="page-root">
        <div className="page-header">
          <div className="page-header-title">
            {withBackButton && (
              <ButtonIcon
                onClick={onClickBackButton}
                size="md"
                type="default"
                typeIcon="arrow_back"
                variant="secondary"
              />
            )}
            <h1>{namePage}</h1>
          </div>
          <div className="page-header-actions">
            {withActionSecondary && (
              <>
                <div className="button-icon-actions">
                  <ButtonIcon
                    type="default"
                    size="md"
                    typeIcon={`${iconButtonSecondary || "more_vert"}`}
                    variant="secondary"
                    onClick={onClickActionSecondary}
                    skeleton={skeletonButtonSecondary}
                  />
                </div>
                <div className="button-actions">
                  <Button
                    size="md"
                    variant="secondary"
                    label={buttonContentSecondary}
                    onClick={onClickActionSecondary}
                    typeIcon={iconButtonSecondary}
                    skeleton={skeletonButtonSecondary}
                  />
                </div>
              </>
            )}
            {withActionPrimary && (
              <>
                <div className="button-icon-actions">
                  <ButtonIcon
                    type="default"
                    size="md"
                    typeIcon={`${iconButtonPrimary || "add"}`}
                    variant="primary"
                    onClick={onClickActionPrimary}
                    skeleton={skeletonButtonPrimary}
                  />
                </div>
                <div className="button-actions">
                  <Button
                    size="md"
                    variant="primary"
                    skeleton={skeletonButtonPrimary}
                    typeIcon={iconButtonPrimary}
                    label={buttonContentPrimary}
                    onClick={onClickActionPrimary}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <Layout columns={columnLayout}>{children}</Layout>
      </div>
    </div>
  );
};

export default Page;
