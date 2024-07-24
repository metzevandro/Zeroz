import React from "react";
import "./Page.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Button from "../Button/Button";
// Declaração
var Page = function (_a) {
  var children = _a.children,
    namePage = _a.namePage,
    withBackButton = _a.withBackButton,
    withActionPrimary = _a.withActionPrimary,
    withActionSecondary = _a.withActionSecondary,
    buttonContentPrimary = _a.buttonContentPrimary,
    buttonContentSecondary = _a.buttonContentSecondary,
    onClickActionPrimary = _a.onClickActionPrimary,
    onClickActionSecondary = _a.onClickActionSecondary,
    onClickBackButton = _a.onClickBackButton,
    iconButtonPrimary = _a.iconButtonPrimary,
    iconButtonSecondary = _a.iconButtonSecondary,
    skeletonButtonPrimary = _a.skeletonButtonPrimary,
    skeletonButtonSecondary = _a.skeletonButtonSecondary,
    description = _a.description;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "var(--s-color-background-default);",
        overflowX: "hidden",
      }}
    >
      <div className="page-root">
        <div>
          <div className="page-header">
            {withBackButton && (
              <ButtonIcon
                onClick={onClickBackButton}
                size="md"
                buttonType="default"
                typeIcon="arrow_back"
                variant="secondary"
              />
            )}
            <div className="page-header-title">
              <h1>{namePage}</h1>
            </div>
            <div className="page-header-actions">
              {withActionSecondary && (
                <>
                  <div className="button-icon-actions">
                    <ButtonIcon
                      buttonType="default"
                      size="md"
                      typeIcon={"".concat(iconButtonSecondary || "more_vert")}
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
                      buttonType="default"
                      size="md"
                      typeIcon={"".concat(iconButtonPrimary || "add")}
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
          <p
            className={"page-description ".concat(
              withBackButton ? "with-back-button" : "",
            )}
          >
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};
// Exportação
export default Page;
