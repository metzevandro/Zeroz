var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import "./ButtonIcon.scss";
import Skeleton from "../Skeleton/Skeleton";
var ButtonIcon = function (_a) {
  var size = _a.size,
    buttonType = _a.buttonType,
    typeIcon = _a.typeIcon,
    variant = _a.variant,
    disabled = _a.disabled,
    skeleton = _a.skeleton,
    rest = __rest(_a, [
      "size",
      "buttonType",
      "typeIcon",
      "variant",
      "disabled",
      "skeleton",
    ]);
  var buttonRef = useRef(null);
  var _b = useState(null),
    dimensions = _b[0],
    setDimensions = _b[1];
  useEffect(
    function () {
      if (buttonRef.current) {
        var _a = buttonRef.current,
          height = _a.offsetHeight,
          width = _a.offsetWidth;
        setDimensions({ height: height, width: width });
      }
    },
    [size, variant],
  );
  return (
    <>
      {skeleton && dimensions ? (
        <Skeleton
          height={"".concat(dimensions.height)}
          width={"".concat(dimensions.width)}
        />
      ) : (
        <button
          {...rest}
          ref={buttonRef}
          disabled={disabled}
          className={"button-icon "
            .concat(variant, " ")
            .concat(size, " ")
            .concat(buttonType)}
        >
          {typeIcon && (
            <Icon
              icon={typeIcon}
              size={buttonType === "default" ? "md" : size}
            />
          )}
        </button>
      )}
    </>
  );
};
export default ButtonIcon;
