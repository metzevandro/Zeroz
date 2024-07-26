"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Page.scss");
var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon/ButtonIcon"));
var _Button = _interopRequireDefault(require("../Button/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Props

// Declaração
var Page = function Page(_ref) {
  var children = _ref.children,
    namePage = _ref.namePage,
    withBackButton = _ref.withBackButton,
    withActionPrimary = _ref.withActionPrimary,
    withActionSecondary = _ref.withActionSecondary,
    buttonContentPrimary = _ref.buttonContentPrimary,
    buttonContentSecondary = _ref.buttonContentSecondary,
    onClickActionPrimary = _ref.onClickActionPrimary,
    onClickActionSecondary = _ref.onClickActionSecondary,
    onClickBackButton = _ref.onClickBackButton,
    iconButtonPrimary = _ref.iconButtonPrimary,
    iconButtonSecondary = _ref.iconButtonSecondary,
    skeletonButtonPrimary = _ref.skeletonButtonPrimary,
    skeletonButtonSecondary = _ref.skeletonButtonSecondary,
    description = _ref.description;
  return <div style={{
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    background: "var(--s-color-background-default);",
    overflowX: "hidden"
  }}>
      <div className="page-root">
        <div>
          <div className="page-header">
            {withBackButton && <_ButtonIcon.default onClick={onClickBackButton} size="md" buttonType="default" typeIcon="arrow_back" variant="secondary" />}
            <div className="page-header-title">
              <h1>{namePage}</h1>
            </div>
            <div className="page-header-actions">
              {withActionSecondary && <>
                  <div className="button-icon-actions">
                    <_ButtonIcon.default buttonType="default" size="md" typeIcon={"".concat(iconButtonSecondary || "more_vert")} variant="secondary" onClick={onClickActionSecondary} skeleton={skeletonButtonSecondary} />
                  </div>
                  <div className="button-actions">
                    <_Button.default size="md" variant="secondary" label={buttonContentSecondary} onClick={onClickActionSecondary} typeIcon={iconButtonSecondary} skeleton={skeletonButtonSecondary} />
                  </div>
                </>}
              {withActionPrimary && <>
                  <div className="button-icon-actions">
                    <_ButtonIcon.default buttonType="default" size="md" typeIcon={"".concat(iconButtonPrimary || "add")} variant="primary" onClick={onClickActionPrimary} skeleton={skeletonButtonPrimary} />
                  </div>
                  <div className="button-actions">
                    <_Button.default size="md" variant="primary" skeleton={skeletonButtonPrimary} typeIcon={iconButtonPrimary} label={buttonContentPrimary} onClick={onClickActionPrimary} />
                  </div>
                </>}
            </div>
          </div>
          <p className={"page-description ".concat(withBackButton ? "with-back-button" : "")}>
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>;
};

// Exportação
var _default = exports["default"] = Page;