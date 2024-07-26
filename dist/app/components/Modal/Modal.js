"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FooterModal = exports.ContentModal = void 0;
require("./Modal.scss");
var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon/ButtonIcon"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Modal = function Modal(_ref) {
  var title = _ref.title,
    description = _ref.description,
    content = _ref.content,
    hideModal = _ref.hideModal,
    isOpen = _ref.isOpen,
    footer = _ref.footer,
    dismissible = _ref.dismissible;
  var modalClass = isOpen ? "modal-root visible" : "modal-root";
  var ghostClass = isOpen ? "modal-ghost visible" : "modal-ghost";
  return <>
      <div className={modalClass}>
        <div className="modal-header">
          <div className="modal-title">
            <div>{title}</div>
            {dismissible && <_ButtonIcon.default variant="primary" size="md" typeIcon="close" buttonType="plain" onClick={hideModal} />}
          </div>
          <div className="modal-description">{description}</div>
        </div>
        {content}
        {footer}
      </div>
      <div className={ghostClass} onClick={dismissible ? hideModal : undefined} />
    </>;
};
var ContentModal = exports.ContentModal = function ContentModal(_ref2) {
  var children = _ref2.children;
  return <div className="modal-content">{children}</div>;
};
var FooterModal = exports.FooterModal = function FooterModal(_ref3) {
  var children = _ref3.children;
  return <div className="modal-footer">{children}</div>;
};
var _default = exports["default"] = Modal;
ContentModal;
FooterModal;