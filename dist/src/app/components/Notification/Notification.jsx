import { useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import "./Notification.scss";
import Button from "../Button/Button";
import React from "react";
var Notification = function (_a) {
    var icon = _a.icon, title = _a.title, description = _a.description, variant = _a.variant, type = _a.type, isOpen = _a.isOpen, dismissible = _a.dismissible, withAction = _a.withAction, disableButton = _a.disableButton, onClickButton = _a.onClickButton, buttonLabel = _a.buttonLabel;
    var _b = useState(true), isClose = _b[0], setIsClose = _b[1];
    var handleClickClose = function () {
        setIsClose(false);
    };
    // Condicional para mostrar a div pai
    var showContent = withAction || description;
    return (<>
      {isClose && (<div className={"notification ".concat(variant, " ").concat(type, " ").concat(dismissible && "dismissible", " ").concat(isOpen ? "open" : "")}>
          <div className={"notification-title ".concat(variant)}>
            <Icon icon={icon} size="md"/>
            <div className="title">{title}</div>
            {dismissible && (<ButtonIcon variant="on-color" size="sm" typeIcon="close" buttonType="plain" onClick={handleClickClose}/>)}
          </div>
          {showContent && (<div className="notification-content">
              {description && <div className="description">{description}</div>}
              {withAction && (<div className="notification-with-action">
                  <Button size="md" variant={variant} disabled={disableButton} label={buttonLabel} onClick={onClickButton}/>
                </div>)}
            </div>)}
        </div>)}
    </>);
};
export default Notification;
