import "./Modal.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import React from "react";
var Modal = function (_a) {
    var title = _a.title, description = _a.description, content = _a.content, hideModal = _a.hideModal, isOpen = _a.isOpen, footer = _a.footer, dismissible = _a.dismissible;
    var modalClass = isOpen ? "modal-root visible" : "modal-root";
    var ghostClass = isOpen ? "modal-ghost visible" : "modal-ghost";
    return (<>
      <div className={modalClass}>
        <div className="modal-header">
          <div className="modal-title">
            <div>{title}</div>
            {dismissible && (<ButtonIcon variant="primary" size="md" typeIcon="close" buttonType="plain" onClick={hideModal}/>)}
          </div>
          <div className="modal-description">{description}</div>
        </div>
        {content}
        {footer}
      </div>
      <div className={ghostClass} onClick={(dismissible
            ? hideModal
            : undefined)}/>
    </>);
};
export var ContentModal = function (_a) {
    var children = _a.children;
    return <div className="modal-content">{children}</div>;
};
export var FooterModal = function (_a) {
    var children = _a.children;
    return <div className="modal-footer">{children}</div>;
};
export default Modal;
ContentModal;
FooterModal;
